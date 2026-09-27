const stages = [
  { number: "STAGE / 01", label: "SYSTEM LITERACY", title: "Know the terrain first.", copy: "Build an intuition for the operating system, the network, and the web before asking deeper security questions.", points: ["Navigate Linux with confidence", "Read network traffic as a story", "Understand requests, responses, and trust boundaries"], tags: ["Linux", "TCP/IP", "HTTP"] },
  { number: "STAGE / 02", label: "WEB SYSTEMS", title: "Trace every request.", copy: "Study where browser, server, and user expectations meet. Test only in safe labs and learn what good defenses have to account for.", points: ["Map an application's trust boundaries", "Practice common risks in guided labs", "Connect each test to a defensive lesson"], tags: ["OWASP", "Burp Suite", "Web Labs"] },
  { number: "STAGE / 03", label: "MOBILE & AUTOMATION", title: "Take the lab with you.", copy: "Explore Android fundamentals and use scripts to remove repetition, leaving more attention for the questions that matter.", points: ["Understand Android app structure", "Build a lean Termux workflow", "Automate small, repeatable checks"], tags: ["Android", "Termux", "Python"] },
  { number: "STAGE / 04", label: "COMMUNITY PRACTICE", title: "Leave useful notes behind.", copy: "Turn experiments into clearer explanations, responsibly share what helps, and keep learning in public without losing precision.", points: ["Write for the next version of yourself", "Share lessons with practical context", "Contribute responsibly to open work"], tags: ["Write-ups", "Open source", "Ethics"] }
];
const menu = document.querySelector(".menu"), nav = document.querySelector("#nav");
menu.addEventListener("click", () => { const open = nav.classList.toggle("open"); menu.setAttribute("aria-expanded", String(open)); });
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { nav.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); }));
const number = document.querySelector("#stage-number"), label = document.querySelector("#stage-label"), title = document.querySelector("#stage-title"), copy = document.querySelector("#stage-copy"), points = document.querySelector("#stage-points"), tags = document.querySelector("#stage-tags");
document.querySelectorAll(".map-tabs button").forEach((button) => button.addEventListener("click", () => {
  const stage = stages[Number(button.dataset.stage)];
  document.querySelectorAll(".map-tabs button").forEach((item) => { item.classList.remove("active"); item.setAttribute("aria-selected", "false"); });
  button.classList.add("active"); button.setAttribute("aria-selected", "true");
  number.textContent = stage.number; label.textContent = stage.label; title.textContent = stage.title; copy.textContent = stage.copy;
  points.replaceChildren(...stage.points.map((item) => { const li = document.createElement("li"); li.textContent = item; return li; }));
  tags.replaceChildren(...stage.tags.map((item) => { const tag = document.createElement("span"); tag.textContent = item; return tag; }));
}));
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((items) => items.forEach((item) => { if (item.isIntersecting) { item.target.classList.add("visible"); observer.unobserve(item.target); } }), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
  addEventListener("pointermove", (event) => { document.documentElement.style.setProperty("--x", event.clientX + "px"); document.documentElement.style.setProperty("--y", event.clientY + "px"); }, { passive: true });
}
