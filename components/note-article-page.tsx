"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { isLocale, localeLabels, locales, siteContent, type Locale } from "@/lib/i18n";
import { getNoteArticle, notesContent, type NoteSlug } from "@/lib/notes";

const localeStorageKey = "shwatchservice-locale";

type NoteArticlePageProps = {
  slug: NoteSlug;
};

export function NoteArticlePage({ slug }: NoteArticlePageProps) {
  const [locale, setLocale] = useState<Locale>("zh-CN");
  const [navOpen, setNavOpen] = useState(false);

  const content = siteContent[locale];
  const noteLibrary = notesContent[locale];
  const article = getNoteArticle(locale, slug);

  useEffect(() => {
    const saved = window.localStorage.getItem(localeStorageKey);
    if (saved && isLocale(saved)) {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    if (!article) return;

    document.documentElement.lang = content.htmlLang;
    document.title = `${article.title} | ${content.brandName}`;
  }, [article, content.brandName, content.htmlLang]);

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

  if (!article) {
    return null;
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
        <section className="section note-article-section">
          <div className="container">
            <div className="note-breadcrumbs">
              <Link href="/" className="text-link">
                {noteLibrary.backHome}
              </Link>
              <span>/</span>
              <Link href="/notes" className="text-link">
                {noteLibrary.browseAll}
              </Link>
            </div>

            <div className="note-hero-layout">
              <div className="note-hero-copy">
                <p className="eyebrow">{noteLibrary.pageEyebrow}</p>
                <h1>{article.title}</h1>
                <p>{article.intro}</p>
              </div>
              <div className="note-hero-visual">
                <img className="note-hero-image" src={article.imageSrc} alt={article.imageAlt} />
              </div>
            </div>

            <div className="note-article-layout">
              <article className="note-body">
                {article.sections.map((section) => (
                  <section key={section.title} className="note-body-section">
                    <h2>{section.title}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </section>
                ))}
              </article>

              <aside className="note-sidebar">
                <div className="note-highlights-card">
                  <p className="note-sidebar-label">{noteLibrary.keyPointsLabel}</p>
                  <ul className="note-highlights-list">
                    {article.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </aside>
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
