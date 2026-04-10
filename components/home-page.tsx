"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { AMapPanel } from "@/components/amap-panel";
import { BookingForm } from "@/components/booking-form";
import { isLocale, localeLabels, locales, siteContent, type Locale } from "@/lib/i18n";
import { notesContent } from "@/lib/notes";

const sectionIds = {
  home: "top",
  services: "services",
  tips: "tips",
  booking: "booking",
} as const;

const trustIcons = [
  <svg key="shield" viewBox="0 0 48 48" role="img" aria-hidden="true">
    <path d="M24 5 10 10v11c0 9.1 5.7 17.2 14 20 8.3-2.8 14-10.9 14-20V10L24 5Zm-2.1 24.5-6.1-6.1 2.8-2.8 3.3 3.3 7.5-7.5 2.8 2.8-10.3 10.3Z" />
  </svg>,
  <svg key="parts" viewBox="0 0 48 48" role="img" aria-hidden="true">
    <path d="M24 6c-7.7 0-14 6.3-14 14v22h28V20c0-7.7-6.3-14-14-14Zm0 4c5.5 0 10 4.5 10 10v2H14v-2c0-5.5 4.5-10 10-10Zm0 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
  </svg>,
  <svg key="clock" viewBox="0 0 48 48" role="img" aria-hidden="true">
    <path d="M24 6a18 18 0 1 0 18 18A18 18 0 0 0 24 6Zm0 4a14 14 0 0 1 11.3 22.2L14.8 11.7A13.9 13.9 0 0 1 24 10Zm0 28a13.9 13.9 0 0 1-11.3-5.8l20.5-20.5A14 14 0 0 1 24 38Zm2-22h-4v10l8 4 1.8-3.6-5.8-2.9Z" />
  </svg>,
];

const localeStorageKey = "shwatchservice-locale";

export function HomePage() {
  const [locale, setLocale] = useState<Locale>("zh-CN");
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("top");

  const content = siteContent[locale];
  const noteLibrary = notesContent[locale];

  useEffect(() => {
    const saved = window.localStorage.getItem(localeStorageKey);
    if (saved && isLocale(saved)) {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = content.htmlLang;
    document.title = content.metaTitle;
  }, [content.htmlLang, content.metaTitle]);

  useEffect(() => {
    function handleScroll() {
      const sectionList = document.querySelectorAll<HTMLElement>("main section[id], header[id]");
      let currentId = "top";

      sectionList.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          currentId = section.id;
        }
      });

      setActiveSection(currentId);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  function changeLocale(nextLocale: string) {
    if (!isLocale(nextLocale)) return;

    setLocale(nextLocale);
    window.localStorage.setItem(localeStorageKey, nextLocale);
  }

  function toggleNav() {
    setNavOpen((current) => !current);
  }

  function closeNav() {
    setNavOpen(false);
  }

  return (
    <div className="site-shell">
      <header className="site-header" id="top">
        <div className="container header-inner">
          <a href="#top" className="brand" aria-label={content.brandName}>
            <span className="brand-mark">SH</span>
            <span className="brand-text">{content.brandName}</span>
          </a>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={navOpen}
            aria-controls="site-nav"
            aria-label={navOpen ? content.closeMenuLabel : content.openMenuLabel}
            onClick={toggleNav}
          >
            <span />
            <span />
          </button>

          <div className="header-actions">
            <nav className={`site-nav ${navOpen ? "is-open" : ""}`} id="site-nav" aria-label={content.brandName}>
              <a
                href={`#${sectionIds.home}`}
                className={activeSection === sectionIds.home ? "active" : ""}
                aria-current={activeSection === sectionIds.home ? "page" : undefined}
                onClick={closeNav}
              >
                {content.nav.home}
              </a>
              <a
                href={`#${sectionIds.services}`}
                className={activeSection === sectionIds.services ? "active" : ""}
                aria-current={activeSection === sectionIds.services ? "page" : undefined}
                onClick={closeNav}
              >
                {content.nav.services}
              </a>
              <a
                href={`#${sectionIds.tips}`}
                className={activeSection === sectionIds.tips ? "active" : ""}
                aria-current={activeSection === sectionIds.tips ? "page" : undefined}
                onClick={closeNav}
              >
                {content.nav.tips}
              </a>
              <a
                href={`#${sectionIds.booking}`}
                className={activeSection === sectionIds.booking ? "active" : ""}
                aria-current={activeSection === sectionIds.booking ? "page" : undefined}
                onClick={closeNav}
              >
                {content.nav.booking}
              </a>
            </nav>

            <label className="language-switcher">
              <span className="sr-only">{content.languageLabel}</span>
              <select value={locale} aria-label={content.languageLabel} onChange={(event) => changeLocale(event.target.value)}>
                {locales.map((option) => (
                  <option key={option} value={option}>
                    {localeLabels[option]}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <h1>{content.hero.title}</h1>
              <p className="hero-subtitle">{content.hero.subtitle}</p>

              <div className="hero-actions">
                <a className="button button-primary" href="#booking">
                  {content.hero.primaryCta}
                </a>
                <a className="button button-secondary" href="#location">
                  {content.hero.secondaryCta}
                </a>
              </div>

              <div className="hero-address-card">
                <span className="address-label">{content.hero.addressLabel}</span>
                <p>{content.hero.address}</p>
              </div>
            </div>

            <div className="hero-visual">
              <div className="shopfront-frame">
                <img
                  className="shopfront-image"
                  src="/shopfront.svg"
                  alt={locale === "en" ? "Front entrance of the Shanghai watch service center" : "上海名表维修服务中心门店正门"}
                />
              </div>
              <div className="visual-card">
                <p className="visual-kicker">{content.hero.visualKicker}</p>
                <p className="visual-title">{content.hero.visualTitle}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-bar" id="services" aria-label={content.nav.services}>
          <div className="container trust-grid">
            {content.trust.map((item, index) => (
              <article key={item.title} className="trust-item">
                <div className="trust-icon">{trustIcons[index]}</div>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section services-overview">
          <div className="container split-layout">
            <div className="section-heading">
              <p className="eyebrow">{content.services.eyebrow}</p>
              <h2>{content.services.title}</h2>
              <p>{content.services.description}</p>
            </div>
            <div className="service-list">
              {content.services.items.map((item) => (
                <article key={item.title} className="service-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section booking-section" id="booking">
          <div className="container booking-layout">
            <div className="section-heading booking-copy">
              <p className="eyebrow">{content.booking.eyebrow}</p>
              <h2>{content.booking.title}</h2>
              <p>{content.booking.description}</p>

              <ul className="booking-notes">
                {content.booking.notes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <BookingForm locale={locale} copy={content.booking} />
          </div>
        </section>

        <section className="section tips-section" id="tips">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">{content.tips.eyebrow}</p>
              <h2>{content.tips.title}</h2>
              <p>{content.tips.description}</p>
              <Link href="/notes" className="section-link">
                {noteLibrary.browseAll}
              </Link>
            </div>

            <div className="tips-grid">
              {noteLibrary.articles.slice(0, 3).map((article) => (
                <article key={article.slug} className="tip-card">
                  <div className="tip-image">
                    <img className="tip-image-media" src={article.imageSrc} alt={article.imageAlt} />
                  </div>
                  <div className="tip-content">
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <Link href={`/notes/${article.slug}`} className="text-link">
                      {content.tips.readMore}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section location-section" id="location">
          <div className="container location-layout">
            <div className="section-heading">
              <p className="eyebrow">{content.location.eyebrow}</p>
              <h2>{content.location.title}</h2>
              <p>{content.location.description}</p>
              <dl className="contact-list">
                <div>
                  <dt>{content.location.addressLabel}</dt>
                  <dd>{content.location.address}</dd>
                </div>
                <div>
                  <dt>{content.location.hoursLabel}</dt>
                  <dd>{content.location.hours}</dd>
                </div>
                <div>
                  <dt>{content.location.phoneLabel}</dt>
                  <dd>{content.location.phone}</dd>
                </div>
              </dl>
              <div className="map-links">
                <a
                  className="button button-secondary"
                  href="https://uri.amap.com/search?keyword=%E4%B8%8A%E6%B5%B7%E9%BB%84%E6%B5%A6%E5%8C%BA%E7%91%9E%E9%87%91%E4%BA%8C%E8%B7%AF%E6%B7%AE%E6%B5%B7%E4%B8%AD%E8%B7%AF850%E5%8F%B7"
                  target="_blank"
                  rel="noreferrer"
                >
                  {content.location.amapButton}
                </a>
                <a
                  className="button button-secondary"
                  href="https://map.baidu.com/search/%E4%B8%8A%E6%B5%B7%E9%BB%84%E6%B5%A6%E5%8C%BA%E7%91%9E%E9%87%91%E4%BA%8C%E8%B7%AF%E6%B7%AE%E6%B5%B7%E4%B8%AD%E8%B7%AF850%E5%8F%B7"
                  target="_blank"
                  rel="noreferrer"
                >
                  {content.location.baiduButton}
                </a>
              </div>
            </div>

            <AMapPanel
              address={content.location.address}
              brandName={content.brandName}
              loadingLabel={content.location.mapLoading}
              errorLabel={content.location.mapError}
              missingKeyTitle={content.location.mapMissingKeyTitle}
              missingKeyText={content.location.mapMissingKeyText}
            />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-layout">
          <div>
            <p className="footer-brand">{content.brandName}</p>
            <p>{content.footer.address}</p>
          </div>
          <div>
            <p>{content.footer.hours}</p>
            <p>{content.footer.phone}</p>
          </div>
          <div>
            <p>{content.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
