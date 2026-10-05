if (window.lucide) window.lucide.createIcons();

const menuToggle = document.querySelector("[data-menu-toggle]");
const mainNav = document.querySelector("#main-nav");

function setMenuOpen(isOpen, restoreFocus = false) {
  mainNav.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Đóng menu" : "Mở menu");
  menuToggle.title = isOpen ? "Đóng menu" : "Mở menu";
  if (restoreFocus) menuToggle.focus();
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});
mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) setMenuOpen(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false, true);
  }
});
window.matchMedia("(min-width: 901px)").addEventListener("change", (event) => {
  if (event.matches) setMenuOpen(false);
});

const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(selected, moveFocus = false) {
  tabs.forEach((tab) => {
    const isSelected = tab === selected;
    tab.setAttribute("aria-selected", String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
    document.getElementById(tab.getAttribute("aria-controls")).hidden = !isSelected;
  });
  if (moveFocus) {
    selected.focus();
    selected.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "instant" });
  }
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (event) => {
    let nextIndex;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    if (nextIndex !== undefined) {
      event.preventDefault();
      selectTab(tabs[nextIndex], true);
    }
  });
});

const viewer = document.querySelector(".photo-viewer");
const viewerImage = viewer.querySelector(".viewer-image");
const viewerTitle = viewer.querySelector("#viewer-title");
let viewerTrigger;

document.querySelectorAll("[data-photo]").forEach((button) => {
  button.addEventListener("click", () => {
    viewerTrigger = button;
    viewerImage.src = button.dataset.photo;
    viewerImage.alt = button.querySelector("img").alt;
    viewerTitle.textContent = button.dataset.caption;
    viewer.showModal();
    document.body.classList.add("viewer-open");
  });
});
viewer.querySelector("[data-close-viewer]").addEventListener("click", () => viewer.close());
viewer.addEventListener("click", (event) => {
  if (event.target !== viewer) return;
  const bounds = viewer.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
    viewer.close();
  }
});
viewer.addEventListener("close", () => {
  document.body.classList.remove("viewer-open");
  if (viewerTrigger) viewerTrigger.focus({ preventScroll: true });
});

const navLinks = [...mainNav.querySelectorAll('a[href^="#"]')];
const trackedSections = navLinks.map((link) => document.querySelector(link.hash));
let scrollPending = false;
function updateNavigation() {
  const offset = document.querySelector(".site-header").getBoundingClientRect().height + 100;
  let activeSection;
  trackedSections.forEach((section) => {
    if (section.getBoundingClientRect().top <= offset) activeSection = section;
  });
  // The contact footer can be shorter than the viewport.
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
    activeSection = trackedSections[trackedSections.length - 1];
  }
  navLinks.forEach((link) => {
    if (activeSection && link.hash === `#${activeSection.id}`) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  scrollPending = false;
}
window.addEventListener("scroll", () => {
  if (scrollPending) return;
  scrollPending = true;
  requestAnimationFrame(updateNavigation);
}, { passive: true });
window.addEventListener("resize", updateNavigation);
updateNavigation();
