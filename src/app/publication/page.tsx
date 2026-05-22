import SiteFooter from "../components/SiteFooter";
import PublicationAbstract from "./PublicationAbstract";

const publicationYears = [
  {
    year: "2025",
    items: [
      {
        venue: "Journal 2025",
        title:
          "Development of a Model for Collecting Data on Cantaloupe Melons in Greenhouses Using IoT and AI",
        authors:
          "Huy Q. Tran, Nguyen Thi Hong Anh, Nguyen Long Vu, La Hieu Phong, Nguyen Cong Huy, and Hoang Nguyen Hua Minh",
        source: "Materials and Emerging Technologies for Sustainability 2025",
        abstract:
          "This study proposes a real-time data collection model using an Internet of Things (IoT) system to monitor the growth of cantaloupe melons in greenhouse environments. The system was designed with a mechanical structure and motorized components to control camera movement. The camera moves along predefined positions spaced 10 cm apart over a total distance of 3 meters and rotates vertically from 0° to 180° in 10° increments to capture images from multiple viewing angles. The collected data are automatically transmitted and stored on a central server twice daily at 6:00 AM and 4:00 PM. In parallel, deep learning-based object detection algorithms were applied to identify cantaloupe fruits from the captured images. Experimental results demonstrated that 100% of the collected data were successfully transmitted and stored, while the proposed fruit detection model achieved an overall recall rate of 87%.",
      },
    ],
  },
];

export default function PublicationPage() {
  return (
    <main className="publication-page">
      <div className="publication-shell">
        <h1>Công bố</h1>

        {publicationYears.map((group) => (
          <section className="publication-year-section" key={group.year}>
            <div className="publication-year-left">{group.year}</div>
            <div className="publication-list">
              {group.items.map((item) => (
                <article className="publication-item" key={item.title}>
                  <div className="publication-badge">{item.venue}</div>
                  <div className="publication-detail">
                    <h2>{item.title}</h2>
                    <p className="publication-authors">{item.authors}</p>
                    <p className="publication-source">
                      <em>{item.source}</em>
                    </p>

                    {item.abstract ? (
                      <PublicationAbstract abstract={item.abstract} />
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <SiteFooter />
    </main>
  );
}
