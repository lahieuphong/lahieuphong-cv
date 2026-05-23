import type { Metadata } from "next";
import type { CSSProperties } from "react";
import SiteFooter from "../components/SiteFooter";
import { withBasePath } from "../components/navbar/navbarLinks";

export const metadata: Metadata = {
  title: "LHP | about",
};

const education = [
  {
    period: "2021 - 2026",
    school: "Trường Đại học Sài Gòn (SGU)",
    faculty: "Khoa Công nghệ Thông tin",
    program: "Chương trình Kỹ sư Công nghệ thông tin (CLC)",
  },
];

const careers = [
  {
    period: "05/2025 - 08/2025",
    role: "Frontend Developer Intern",
    company: "Công ty TNHH HVTT",
    description:
      "Tham gia phát triển giao diện DICOM Viewer cho hệ thống web y tế.",
  },
  {
    period: "02/2026 - Nay",
    role: "Core Full-stack Developer",
    company: "Công ty TNHH Thương mại và Dịch vụ Hồng Vân",
    description: "Phát triển và bảo trì các ứng dụng web full-stack.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-shell">
        <h1>La Hiểu Phong</h1>

        <div className="about-layout">
          <div className="about-content">
            <section className="about-section">
              <h2>Học vấn</h2>
              <div className="about-timeline">
                {education.map((item) => (
                  <div className="about-row" key={item.period}>
                    <p className="about-period">{item.period}</p>
                    <div className="about-entry">
                      <strong>{item.faculty}</strong>
                      <span>{item.school}</span>
                      <em>{item.program}</em>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="about-section">
              <h2>Kinh nghiệm</h2>
              <div className="about-timeline">
                {careers.map((item) => (
                  <div className="about-row" key={item.period}>
                    <p className="about-period">{item.period}</p>
                    <div className="about-entry">
                      <strong>{item.role}</strong>
                      <span>{item.company}</span>
                      <em>{item.description}</em>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="about-profile" aria-label="Thông tin cá nhân">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBasePath("/about/avatar.png")}
              alt="Avatar La Hiểu Phong"
              draggable={false}
            />
            <h2>La Hiểu Phong</h2>
            <p>Full Stack Developer</p>
            <a
              className="about-profile-link"
              href="https://github.com/lahieuphong"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="about-profile-link-icon"
                style={{
                  "--about-profile-link-icon": `url(${withBasePath(
                    "/icons/github.svg",
                  )})`,
                } as CSSProperties}
                aria-hidden="true"
              />
              <span>github.com/lahieuphong</span>
            </a>
            <a
              className="about-profile-link"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hieuphong144@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="about-profile-link-icon"
                style={{
                  "--about-profile-link-icon": `url(${withBasePath(
                    "/icons/mail.svg",
                  )})`,
                } as CSSProperties}
                aria-hidden="true"
              />
              <span>hieuphong144@gmail.com</span>
            </a>
          </aside>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
