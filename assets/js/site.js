const root = document.documentElement;
const storedTheme = localStorage.getItem("theme");

if (storedTheme === "dark" || storedTheme === "light") {
  root.dataset.theme = storedTheme;
}

document.querySelectorAll(".theme-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  });
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const publicationSearch = document.querySelector("#publication-search");

if (publicationSearch) {
  const entries = Array.from(document.querySelectorAll("[data-publication-entry]"));
  const years = Array.from(document.querySelectorAll("[data-publication-year]"));
  const emptyState = document.querySelector("[data-publication-empty]");

  publicationSearch.addEventListener("input", () => {
    const query = publicationSearch.value.trim().toLowerCase();
    let visibleCount = 0;

    entries.forEach((entry) => {
      const matches = !query || entry.textContent.toLowerCase().includes(query);
      const item = entry.closest("li");
      if (item) item.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    years.forEach((year) => {
      const hasVisibleEntry = Array.from(year.querySelectorAll("[data-publication-entry]")).some((entry) => {
        const item = entry.closest("li");
        return item && !item.hidden;
      });
      year.hidden = !hasVisibleEntry;
    });

    if (emptyState) {
      emptyState.hidden = visibleCount > 0;
    }
  });
}
