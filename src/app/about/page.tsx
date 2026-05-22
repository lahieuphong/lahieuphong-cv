import SiteFooter from "../components/SiteFooter";
import { withBasePath } from "../components/navbar/navbarLinks";

const education = [
  {
    period: "2021 - 2026",
    description:
      "Faculty of Information Technology, Saigon University, Engineer Program in Information Technology.",
  },
  {
    period: "2025",
    description:
      "Graduation thesis: Course management system integrated with an AI chatbot using Next.js.",
  },
];

const careers = [
  {
    period: "05/2025 - 08/2025",
    description:
      "Frontend Developer Intern, Công ty TNHH HVTT. Worked on a DICOM Viewer interface for a healthcare web system.",
  },
  {
    period: "02/2026 - Present",
    description:
      "Core Full-stack Developer, Công ty TNHH Thương mại và Dịch vụ Hồng Vân. Builds and maintains full-stack web applications.",
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
              <h2>Education</h2>
              <div className="about-timeline">
                {education.map((item) => (
                  <div className="about-row" key={item.period}>
                    <p className="about-period">{item.period}</p>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="about-section">
              <h2>Careers</h2>
              <div className="about-timeline">
                {careers.map((item) => (
                  <div className="about-row" key={item.period}>
                    <p className="about-period">{item.period}</p>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="about-profile" aria-label="Thông tin cá nhân">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={withBasePath("/profile.png")} alt="La Hiểu Phong" />
            <h2>La Hiểu Phong</h2>
            <p>Full Stack Developer</p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hieuphong144@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              hieuphong144@gmail.com
            </a>
            <a
              href="https://github.com/lahieuphong"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/lahieuphong
            </a>
            <a
              href="https://www.linkedin.com/in/la-hieu-phong-04359a362/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn profile
            </a>
          </aside>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
