const profile = {
  name: "La Hiểu Phong",
  title: "Full Stack Developer",
  birthday: "21/11/2003",
  phone: "(+84) 326526898",
  email: "hieuphong144@gmail.com",
  emailUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=hieuphong144@gmail.com",
  location: "Việt Nam",
  github: "http://github.com/lahieuphong",
  githubLabel: "lahieuphong.github",
  linkedin: "https://www.linkedin.com/in/la-hieu-phong-04359a362/",
  linkedinLabel: "lahieuphong.linkedin",
};

const skills = [
  {
    group: "Ngôn ngữ lập trình",
    items: "JavaScript, TypeScript, HTML5, CSS3, C# cơ bản...",
  },
  {
    group: "Frontend",
    items: "ReactJS, Next.js, Tailwind CSS...",
  },
  {
    group: "Backend",
    items: "Node.js, Express.js, C#, REST API, Authentication...",
  },
  {
    group: "Cơ sở dữ liệu",
    items: "MySQL, SQL Server, Django",
  },
  {
    group: "Công cụ phát triển",
    items: "Git, GitHub, VS Code, Postman, Figma cơ bản",
  },
];

const experiences = [
  {
    company: "Công ty TNHH Thương mại và Dịch vụ Hồng Vân",
    role: "Core Full-stack Developer",
    period: "02/2026 – Nay",
    projects: [
      {
        project: "Dự án chuyển đổi số cho đơn vị hành chính và văn hóa",
        highlights: [
          "Phát triển hệ thống web bằng Next.js, ReactJS và TypeScript, xây dựng UI responsive, quản lý nội dung và tối ưu trải nghiệm người dùng.",
          "Tích hợp REST API và WebSocket để xử lý dữ liệu, đồng bộ trạng thái realtime và quản lý state phía frontend.",
          "Tối ưu hiệu năng với Render Streaming và Worker, hỗ trợ xử lý tác vụ nền, giảm tải luồng chính và cải thiện tốc độ phản hồi hệ thống.",
        ],
        technologies: "Bảo mật theo chính sách công ty.",
      },
      {
        project: "Dự án số hóa và bóc tách dữ liệu từ tài liệu chuyên ngành",
        highlights: [
          "Xây dựng hệ thống AI hỗ trợ bóc tách và chuẩn hóa dữ liệu từ tài liệu chuyên ngành.",
          "Tích hợp API, xử lý dữ liệu và xuất kết quả sang Excel phục vụ quản lý thông tin.",
          "Phát triển giao diện, kiểm thử kết quả trích xuất và tối ưu trải nghiệm người dùng.",
        ],
        technologies: "Bảo mật theo chính sách công ty.",
      },
      {
        project: "Dự án vận hành, bảo trì và tối ưu hệ thống web",
        highlights: [
          "Tham gia vận hành và bảo trì nhiều hệ thống web của công ty, bao gồm nền tảng quản trị nội dung, ứng dụng web tương tác và hệ thống hiển thị 3D.",
          "Xử lý lỗi phát sinh, cập nhật tính năng, tích hợp API, tối ưu giao diện và duy trì tính ổn định của sản phẩm.",
          "Phối hợp kiểm thử, debug, refactor code và cải thiện hiệu năng nhằm đảm bảo hệ thống hoạt động liên tục, ổn định.",
        ],
        technologies: "Bảo mật theo chính sách công ty.",
      },
    ],
  },
  {
    company: "Công ty TNHH HVTT",
    role: "Frontend Developer Intern",
    period: "05/2025 – 08/2025",
    projects: [
      {
        project: "Dự án phát triển giao diện DICOM Viewer cho hệ thống y tế",
        highlights: [
          "Phát triển frontend cho hệ thống web hỗ trợ hiển thị và thao tác với dữ liệu hình ảnh y tế DICOM.",
          "Xây dựng giao diện viewer, xử lý state, tích hợp API và tối ưu luồng tương tác người dùng.",
          "Hỗ trợ kiểm thử, debug giao diện và cải thiện trải nghiệm sử dụng trong quá trình phát triển sản phẩm.",
        ],
        technologies:
          "ReactJS, TypeScript, JavaScript, HTML5, CSS3, REST API, State Management, DICOM Viewer UI, Responsive UI.",
      },
    ],
  },
];

const currentWork = {
  period: "02/2026 – Nay",
  company: "Công ty TNHH Thương mại và Dịch vụ Hồng Vân",
  details: [
    {
      label: "Vị trí: ",
      value: "Core Full-stack Developer",
      strong: true,
    },
    {
      label:
        "Công việc: Phát triển và bảo trì ứng dụng web full-stack, xây dựng UI, tích hợp API, xử lý backend và tối ưu truy vấn cơ sở dữ liệu.",
    },
  ],
};

const education = [
  {
    period: "2021 - 2026",
    institution:
      "Khoa Công Nghệ Thông Tin (CLC), Đại học Sài Gòn, Việt Nam",
    details: [
      {
        label:
          "Chuyên ngành: Công nghệ thông tin, chương trình Chất lượng cao, hệ Kỹ sư Công nghệ thông tin, đã hoàn thành 153/153 tín chỉ với GPA 3.23/4.0.",
      },
      {
        label: "Đồ án tốt nghiệp: ",
        thesis: '"Hệ thống quản lý khóa học tích hợp Chatbot AI"',
        suffix:
          " sử dụng Next.js, được hướng dẫn bởi Tiến sĩ Cao Thái Phương Thanh, bảo vệ vào ngày 10 tháng 6 năm 2025.",
      },
    ],
  },
];

const publications = [
  {
    type: "Tạp chí quốc tế",
    year: "2025",
    authorsBefore: "Huy Q. Tran, Nguyen Thi Hong Anh, Nguyen Long Vu, ",
    highlightedAuthor: "La Hieu Phong",
    authorsAfter: ", Nguyen Cong Huy, and Hoang Nguyen Hua Minh",
    title:
      "Development of a Model for Collecting Data on Cantaloupe Melons in Greenhouses Using IoT and AI",
    journal: "Materials and Emerging Technologies for Sustainability",
    issue: "Vol. 01, No. 04, Article 2550018, 2025.",
    doi: "10.1142/S3060932125500189.",
    doiUrl: "https://www.worldscientific.com/doi/10.1142/S3060932125500189",
  },
];

export default function Home() {
  return (
    <main className="cv-wrapper">
      <article className="cv-sheet">
        <header className="cv-header">
          <h1>{profile.name}</h1>
          <p className="cv-title">{profile.title}</p>
        </header>

        <section className="cv-section personal-info-section">
          <h2>THÔNG TIN CÁ NHÂN</h2>

          <div className="personal-info-grid">
            <div>
              <p>
                <strong>Họ và tên:</strong> {profile.name}
              </p>
              <p>
                <strong>Ngày sinh:</strong> {profile.birthday}
              </p>
              <p>
                <strong>Số điện thoại:</strong> {profile.phone}
              </p>
            </div>

            <div>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href={profile.emailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.email}
                </a>
              </p>
              <p>
                <strong>GitHub:</strong>{" "}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.githubLabel}
                </a>
              </p>
              <p>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.linkedinLabel}
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h2>NƠI LÀM VIỆC HIỆN TẠI</h2>

          <div className="current-work-card">
            <p className="current-work-intro">
              <strong>
                {currentWork.period}: {currentWork.company}
              </strong>
            </p>

            <ul className="cv-list">
              {currentWork.details.map((detail) => (
                <li key={detail.label}>
                  {detail.label}
                  {detail.value ? <strong>{detail.value}</strong> : null}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="cv-section">
          <h2>KỸ NĂNG KỸ THUẬT</h2>

          <div className="skills-list">
            {skills.map((skill) => (
              <p key={skill.group}>
                <strong>{skill.group}:</strong> {skill.items}
              </p>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2>KINH NGHIỆM / DỰ ÁN THỰC TẾ</h2>

          {experiences.map((item) => (
            <div
              className="experience-card"
              key={`${item.period}-${item.company}`}
            >
              <div className="experience-heading">
                <div>
                  <h3>
                    {item.period}: {item.role} — {item.company}
                  </h3>
                </div>
              </div>

              {item.projects.map((project) => (
                <div className="company-project" key={project.project}>
                  <h3 className="experience-title">{project.project}</h3>
                  <ul className="cv-list">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <p className="technology-line">
                    <strong>Công nghệ:</strong> {project.technologies}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </section>

        <section className="cv-section">
          <h2>HỌC VẤN</h2>

          {education.map((item) => (
            <div className="education-card" key={item.institution}>
              <p className="education-intro">
                <strong>{item.period}</strong>: {item.institution}
              </p>

              <ul className="education-list">
                {item.details.map((detail) => (
                  <li key={detail.label}>
                    {detail.label}
                    {detail.thesis ? <em>{detail.thesis}</em> : null}
                    {detail.suffix}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="cv-section publication-section">
          <h2>CÔNG BỐ KHOA HỌC</h2>

          {publications.map((publication) => (
            <div className="publication-card" key={publication.doi}>
              <p className="publication-type">
                <strong>{publication.type}</strong>
              </p>
              <p className="publication-year">
                <strong>{publication.year}</strong>
              </p>
              <p className="publication-authors">
                {publication.authorsBefore}
                <strong>{publication.highlightedAuthor}</strong>
                {publication.authorsAfter}
              </p>
              <p className="publication-title">
                &quot;{publication.title},&quot;
              </p>
              <p className="publication-journal">
                <em>{publication.journal}</em>, {publication.issue}
              </p>
              <p className="publication-doi">
                <strong>DOI:</strong> {publication.doi}{" "}
                <a
                  href={publication.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.worldscientific.com
                </a>
              </p>
            </div>
          ))}
        </section>

      </article>
    </main>
  );
}
