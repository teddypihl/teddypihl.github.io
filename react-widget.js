// Enkel liten React-komponent
const e = React.createElement;

function TinyRunStats() {
  const [clicks, setClicks] = React.useState(0);

  const facts = [
    "Built with FastAPI + OSMnx + Leaflet.",
    "Route editing uses Leaflet.Editable with rubber-banding.",
    "Backend is deployed on Render, frontend on GitHub Pages.",
  ];

  const fact = facts[clicks % facts.length];

  return e(
    "div",
    { className: "react-widget-card" },
    e("p", { className: "react-widget-label" }, "Tiny Run Router"),
    e("p", null, fact),
    e(
      "button",
      {
        className: "react-widget-btn",
        onClick: () => setClicks(clicks + 1),
      },
      "Show another detail"
    )
  );
}

// Montera i div:en vi la in
const rootEl = document.getElementById("react-widget-root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(e(TinyRunStats));
}
