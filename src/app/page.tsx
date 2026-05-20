export default function Home() {
  return (
    <main className="redirect-page">
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              const currentPath = window.location.pathname.replace(/\\/$/, "");
              const targetUrl = currentPath + "/cv" + window.location.search + window.location.hash;
              window.location.replace(targetUrl);
            })();
          `,
        }}
      />

      <div className="redirect-loader" aria-label="Đang tải CV" role="status">
        <span className="redirect-spinner" aria-hidden="true" />
      </div>
    </main>
  );
}
