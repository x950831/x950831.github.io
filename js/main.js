/* ===== 主題切換 ===== */
(function initTheme() {
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = saved || (prefersDark ? "dark" : "light");
})();

const themeToggle = document.querySelector(".theme-toggle");
if (themeToggle) {
  const syncPressed = () => {
    themeToggle.setAttribute("aria-pressed", String(document.documentElement.dataset.theme === "dark"));
  };
  syncPressed();

  themeToggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    syncPressed();
  });
}

/* ===== 手機選單 ===== */
const nav = document.querySelector("#primary-nav");
const menuToggle = document.querySelector(".menu-toggle");

if (nav && menuToggle) {
  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "關閉選單" : "開啟選單");
  };

  menuToggle.addEventListener("click", () => {
    setOpen(!nav.classList.contains("is-open"));
  });

  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) setOpen(false);
  });
}

/* ===== 捲動時 header 加上分隔線 ===== */
const header = document.querySelector(".site-header");
const onScroll = () => {
  if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* ===== 進場動畫 ===== */
const revealItems = document.querySelectorAll(".reveal");
if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const siblings = Array.from(el.parentElement.querySelectorAll(":scope > .reveal"));
        const delay = Math.max(0, siblings.indexOf(el)) * 70;
        setTimeout(() => el.classList.add("is-visible"), delay);
        io.unobserve(el);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
  );

  revealItems.forEach((el) => io.observe(el));
} else {
  revealItems.forEach((el) => el.classList.add("is-visible"));
}

/* ===== 導覽列標示目前區塊 ===== */
const sections = Array.from(document.querySelectorAll("main section[id]"));
const navLinks = Array.from(document.querySelectorAll("#primary-nav a"));

if (sections.length && navLinks.length && "IntersectionObserver" in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((section) => spy.observe(section));
}

/* ===== 年份 ===== */
const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
