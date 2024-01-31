const allsection = document.querySelectorAll("section");
const intro = document.querySelector(".a");

const reveal = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const observer = new IntersectionObserver(reveal, {
  root: null,
  threshold: 0.2,
});

allsection.forEach(function (section) {
  observer.observe(section);
  section.classList.add("section-hidden");
});

const timeintro = setInterval(function () {
  intro.style.visibility = "hidden";
}, 2000);

window.addEventListener("load", timeintro);
