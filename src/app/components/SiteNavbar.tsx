"use client";

import type { CSSProperties } from "react";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { navLinks, socialLinks, withBasePath } from "./navbar/navbarLinks";

const themeChangeEventName = "site-theme-change";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function normalizePath(path: string) {
  const pathWithoutBase =
    basePath && path.startsWith(basePath)
      ? path.slice(basePath.length) || "/"
      : path;

  return pathWithoutBase.length > 1
    ? pathWithoutBase.replace(/\/+$/, "")
    : pathWithoutBase;
}

function isActivePath(currentPath: string, targetPath: string) {
  const normalizedCurrentPath = normalizePath(currentPath);
  const normalizedTargetPath = normalizePath(targetPath);

  return (
    normalizedCurrentPath === normalizedTargetPath ||
    normalizedCurrentPath.startsWith(`${normalizedTargetPath}/`)
  );
}

function getThemeSnapshot() {
  if (typeof window === "undefined") {
    return false;
  }

  const storedTheme = window.localStorage.getItem("theme");

  return (
    storedTheme === "dark" ||
    (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
}

function getServerThemeSnapshot() {
  return false;
}

function subscribeToThemeChanges(onStoreChange: () => void) {
  const preferredScheme = window.matchMedia("(prefers-color-scheme: dark)");

  window.addEventListener(themeChangeEventName, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  preferredScheme.addEventListener("change", onStoreChange);

  return () => {
    window.removeEventListener(themeChangeEventName, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
    preferredScheme.removeEventListener("change", onStoreChange);
  };
}

export default function SiteNavbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDarkMode = useSyncExternalStore(
    subscribeToThemeChanges,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  function toggleTheme() {
    const nextMode = !isDarkMode;

    document.documentElement.classList.toggle("dark-mode", nextMode);
    window.localStorage.setItem("theme", nextMode ? "dark" : "light");
    window.dispatchEvent(new Event(themeChangeEventName));
  }

  const themeLabel =
    isDarkMode
      ? "Chuyển sang giao diện sáng"
      : "Chuyển sang giao diện tối";
  const themeIconSrc = withBasePath(
    isDarkMode ? "/icons/sun.svg" : "/icons/moon.svg",
  );

  return (
    <nav className="site-navbar" aria-label="Điều hướng chính">
      <div className="site-navbar-inner">
        <div className="site-navbar-social" aria-label="Liên kết cá nhân">
          {socialLinks.map((link) => (
            <a
              className="site-social-link"
              href={link.href}
              key={link.label}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              title={link.label}
              aria-label={link.label}
            >
              <span
                className="site-social-icon"
                style={
                  {
                    "--site-social-icon": `url(${link.iconSrc})`,
                  } as CSSProperties
                }
                aria-hidden="true"
              />
            </a>
          ))}
        </div>

        <button
          className="site-navbar-toggle"
          type="button"
          aria-controls="site-navbar-menu"
          aria-expanded={isMenuOpen}
          aria-label="Mở menu điều hướng"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`site-navbar-menu${isMenuOpen ? " is-open" : ""}`}
          id="site-navbar-menu"
        >
          <ul className="site-navbar-links">
            {navLinks.map((link) => {
              const isActive = isActivePath(pathname, link.href);

              return (
                <li key={link.label}>
                  <a
                    className={isActive ? "is-active" : undefined}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            className="site-theme-toggle"
            type="button"
            aria-label={themeLabel}
            title={themeLabel}
            onClick={toggleTheme}
          >
            <span
              className="site-theme-icon"
              style={
                {
                  "--site-theme-icon": `url(${themeIconSrc})`,
                } as CSSProperties
              }
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
