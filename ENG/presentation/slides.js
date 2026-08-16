const slides = [...document.querySelectorAll(".slide")];
const progress = document.querySelector("#progress span");
const counter = document.querySelector("#counter");
const sectionLabel = document.querySelector("#sectionLabel");
const overviewButton = document.querySelector("#overviewButton");
const helpDialog = document.querySelector("#helpDialog");
let index = 0;

function indexFromHash() {
  const raw = location.hash.match(/\d+/)?.[0];
  const value = raw ? Number(raw) - 1 : 0;
  return Number.isFinite(value) ? Math.max(0, Math.min(slides.length - 1, value)) : 0;
}

function show(next, updateHash = true) {
  index = Math.max(0, Math.min(slides.length - 1, next));
  slides.forEach((slide, slideIndex) => slide.classList.toggle("active", slideIndex === index));
  progress.style.width = `${((index + 1) / slides.length) * 100}%`;
  counter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  sectionLabel.textContent = slides[index].dataset.section || "";
  document.title = `${slides[index].dataset.title} — AI Level Up`;
  if (updateHash) history.replaceState(null, "", `#/${index + 1}`);
}

function toggleOverview(force) {
  const shouldOpen = typeof force === "boolean" ? force : !document.body.classList.contains("overview");
  document.body.classList.toggle("overview", shouldOpen);
  overviewButton.textContent = shouldOpen ? "×" : "O";
  if (!shouldOpen) show(index);
}

document.addEventListener("keydown", async (event) => {
  if (helpDialog.open && event.key !== "Escape") return;
  if (["ArrowRight", "PageDown", " "].includes(event.key)) { event.preventDefault(); show(index + 1); }
  if (["ArrowLeft", "PageUp"].includes(event.key)) { event.preventDefault(); show(index - 1); }
  if (event.key === "Home") show(0);
  if (event.key === "End") show(slides.length - 1);
  if (event.key.toLowerCase() === "o") toggleOverview();
  if (event.key.toLowerCase() === "f") {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen?.();
    else await document.exitFullscreen?.();
  }
  if (event.key === "?") helpDialog.showModal();
});

slides.forEach((slide, slideIndex) => slide.addEventListener("click", () => {
  if (!document.body.classList.contains("overview")) return;
  index = slideIndex;
  toggleOverview(false);
}));

overviewButton.addEventListener("click", () => toggleOverview());
helpDialog.querySelector("button").addEventListener("click", () => helpDialog.close());
window.addEventListener("hashchange", () => show(indexFromHash(), false));

show(indexFromHash(), false);
