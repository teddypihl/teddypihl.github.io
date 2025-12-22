document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll (in-page links)
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const id = href.substring(1);
      const el = document.getElementById(id);
      if (!el) return;
      event.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Project filter + search
  const cards = Array.from(document.querySelectorAll(".project-card"));
  const buttons = Array.from(document.querySelectorAll(".filter-btn"));
  const search = document.querySelector(".projects-search");

  let activeFilter = "all";
  let query = "";

  function matches(card) {
    const tags = (card.getAttribute("data-tags") || "").toLowerCase();
    const text = (card.innerText || "").toLowerCase();

    const tagList = tags.split(",").map((s) => s.trim()).filter(Boolean);

    const filterOk = activeFilter === "all" || tagList.includes(activeFilter);
    const queryOk = !query || tags.includes(query) || text.includes(query);

    return filterOk && queryOk;
  }

  function renderCards() {
    cards.forEach((card) => {
      card.style.display = matches(card) ? "" : "none";
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      activeFilter = btn.dataset.filter || "all";
      renderCards();
    });
  });

  if (search) {
    search.addEventListener("input", (e) => {
      query = e.target.value.trim().toLowerCase();
      renderCards();
    });
  }

  renderCards();

  // Reveal on scroll
  const revealEls = Array.from(document.querySelectorAll(".reveal"));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => io.observe(el));
});
