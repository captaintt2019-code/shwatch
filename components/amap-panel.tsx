"use client";

import { useEffect, useRef, useState } from "react";

type AMapPanelProps = {
  address: string;
  brandName: string;
  loadingLabel: string;
  errorLabel: string;
  missingKeyTitle: string;
  missingKeyText: string;
};

type MapState = "loading" | "ready" | "error" | "missing-key";

type AMapWindow = Window & {
  AMap?: any;
  _AMapSecurityConfig?: {
    securityJsCode?: string;
  };
};

let amapLoaderPromise: Promise<any> | null = null;

function loadAmap(key: string, securityCode?: string) {
  const amapWindow = window as AMapWindow;

  if (amapWindow.AMap) {
    return Promise.resolve(amapWindow.AMap);
  }

  if (!amapLoaderPromise) {
    amapLoaderPromise = new Promise((resolve, reject) => {
      if (securityCode) {
        amapWindow._AMapSecurityConfig = {
          securityJsCode: securityCode,
        };
      }

      const script = document.createElement("script");
      script.src = `https://webapi.amap.com/maps?v=2.0&key=${encodeURIComponent(
        key,
      )}&plugin=AMap.Geocoder,AMap.Scale,AMap.ToolBar`;
      script.async = true;
      script.onload = () => resolve(amapWindow.AMap);
      script.onerror = () => reject(new Error("Failed to load AMap script."));
      document.head.appendChild(script);
    });
  }

  return amapLoaderPromise;
}

export function AMapPanel({
  address,
  brandName,
  loadingLabel,
  errorLabel,
  missingKeyTitle,
  missingKeyText,
}: AMapPanelProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [mapState, setMapState] = useState<MapState>("loading");

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_AMAP_KEY;
    const securityCode = process.env.NEXT_PUBLIC_AMAP_SECURITY_CODE;

    if (!key) {
      setMapState("missing-key");
      return;
    }

    const mapKey = key;
    let cancelled = false;
    let map: any;
    let marker: any;

    async function initMap() {
      try {
        const AMap = await loadAmap(mapKey, securityCode);
        if (cancelled || !mapRef.current) return;

        map = new AMap.Map(mapRef.current, {
          viewMode: "3D",
          zoom: 15,
          center: [121.4737, 31.2304],
        });

        map.addControl(new AMap.Scale());
        map.addControl(new AMap.ToolBar({ position: "RB" }));

        marker = new AMap.Marker({
          position: [121.4737, 31.2304],
          title: brandName,
        });

        map.add(marker);

        const geocoder = new AMap.Geocoder({
          city: "上海",
        });

        geocoder.getLocation(address, (status: string, result: any) => {
          if (cancelled) return;

          if (status === "complete" && result?.geocodes?.length) {
            const location = result.geocodes[0].location;
            marker.setPosition(location);
            map.setCenter(location);
            map.setZoom(17);

            const infoWindow = new AMap.InfoWindow({
              offset: new AMap.Pixel(0, -26),
              content: `
                <div style="padding:12px 14px;font-family:Arial,'PingFang SC',sans-serif">
                  <strong style="display:block;margin-bottom:6px">${brandName}</strong>
                  <span>${address}</span>
                </div>
              `,
            });

            infoWindow.open(map, location);
            setMapState("ready");
            return;
          }

          setMapState("error");
        });
      } catch {
        if (!cancelled) {
          setMapState("error");
        }
      }
    }

    void initMap();

    return () => {
      cancelled = true;
      if (marker?.setMap) {
        marker.setMap(null);
      }
      if (map?.destroy) {
        map.destroy();
      }
    };
  }, [address, brandName]);

  return (
    <div className="map-frame-wrapper">
      {mapState === "ready" ? <div className="map-canvas" ref={mapRef} /> : null}
      {mapState !== "ready" ? (
        <div className="map-photo-fallback" aria-live="polite">
          <img
            className="map-photo-image"
            src="/storefront-photo.png"
            alt={brandName}
          />
        </div>
      ) : null}
    </div>
  );
}
