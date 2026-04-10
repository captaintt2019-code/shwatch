"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { isLocale, localeLabels, locales, siteContent, type Locale } from "@/lib/i18n";
import { notesContent } from "@/lib/notes";

const localeStorageKey = "shwatchservice-locale";

export function NotesPage() {
  const [locale, setLocale] = useState<Locale>("zh-CN");
  const [navOpen, setNavOpen] = useState(false);

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
    document.title = `${noteLibrary.pageTitle} | ${content.brandName}`;
  }, [content.brandName, content.htmlLang, noteLibrary.pageTitle]);

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
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label={content.brandName}>
            <span className="brand-mark">SH</span>
            <span className="brand-text">{content.brandName}</span>
          </Link>

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
              <Link href="/" onClick={closeNav}>
                {content.nav.home}
              </Link>
              <Link href="/#services" onClick={closeNav}>
                {content.nav.services}
              </Link>
              <Link href="/notes" className="active" aria-current="page" onClick={closeNav}>
                {content.nav.tips}
              </Link>
              <Link href="/#booking" onClick={closeNav}>
                {content.nav.booking}
              </Link>
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
        <section className="section notes-landing-section">
          <div className="container">
            <div className="notes-landing-intro">
              <p className="eyebrow">{noteLibrary.pageEyebrow}</p>
              <h1>{noteLibrary.pageTitle}</h1>
              <p>{noteLibrary.pageDescription}</p>
              <div className="notes-landing-actions">
                <Link href="/" className="button button-secondary">
                  {noteLibrary.backHome}
                </Link>
              </div>
            </div>

            <div className="notes-page-grid">
              {noteLibrary.articles.map((article) => (
                <article key={article.slug} className="note-preview-card">
                  <div className="note-preview-image-wrap">
                    <img className="note-preview-image" src={article.imageSrc} alt={article.imageAlt} />
                  </div>
                  <div className="note-preview-content">
                    <h2>{article.title}</h2>
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
