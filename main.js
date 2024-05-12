// Scroll spy functionality
const subtitles = document.querySelectorAll(".subtitle");
const links = document.querySelectorAll("#links a");

const observer = new IntersectionObserver(
  (entries, observe) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = "#" + entry.target.id;
        history.pushState({}, entry.target.innetText, id);

        links.forEach((link) => {
          link.classList.remove("active");

          const href = link.attributes.href.nodeValue;
          if (href === id) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 1,
    rootMargin: "0px 0px -50% 0px",
  }
);

subtitles.forEach((subtitles) => {
  observer.observe(subtitles);
});
