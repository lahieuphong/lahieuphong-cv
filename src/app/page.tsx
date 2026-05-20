"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const currentPath = window.location.pathname.replace(/\/$/, "");
    const targetPath = `${currentPath || ""}/cv`;
    const targetUrl = `${targetPath}${window.location.search}${window.location.hash}`;

    window.location.replace(targetUrl);
  }, []);

  return (
    <main className="cv-wrapper">
      <article className="cv-sheet">
        <section className="cv-section">
          <h2>ĐANG CHUYỂN HƯỚNG</h2>
          <p className="summary-text">
            Đang mở CV tại{" "}
            <a href="./cv">https://lahieuphong.github.io/lahieuphong-cv/cv</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
