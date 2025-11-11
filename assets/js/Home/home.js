document.addEventListener("DOMContentLoaded", () => {
  const processSection = document.querySelector(".process-section");
  let aosInitialized = false;

  if (processSection) {
    const processObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !aosInitialized) {
            AOS.init({
              duration: 1000,
              once: true,
            });
            aosInitialized = true;
            observer.unobserve(processSection);
          }
        });
      },
      { threshold: 0.3 }
    );

    processObserver.observe(processSection);
  }
});

const section = document.getElementById("whyChoose");
const galleryItems = document.querySelectorAll(".gallery-item");
const textContent = document.getElementById("textContent");
let sectionVisible = false;

if (section && galleryItems.length > 0 && textContent) {
  const galleryObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !sectionVisible) {
          sectionVisible = true;

          // Reduce initial delay from 600ms to 300ms
          setTimeout(() => {
            galleryItems.forEach((item, index) => {
              // Reduce stagger delay from 200ms to 100ms
              setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "scale(1)";
                item.style.transition = "all 0.6s ease";
              }, index * 100);
            });

            // Reduce the delay before text appears (from galleryItems.length * 100 + 1000 to galleryItems.length * 80 + 600)
            setTimeout(() => {
              textContent.style.opacity = "1";
              textContent.style.transform = "translateY(0)";
            }, galleryItems.length * 80 + 600);
          }, 300);
        }
      });
    },
    { threshold: 0.5 }
  );

  galleryObserver.observe(section);
}

const loader = document.getElementById("loader-wrapper");
const sequence = [1, 2, 3, 4, 5, 6, 7, 8];
let hasAnimated = false;

function animateCustomCounter(el, sequence, delay = 100) {
  let index = 0;
  const interval = setInterval(() => {
    el.textContent = sequence[index];
    index++;
    if (index >= sequence.length) {
      clearInterval(interval);
    }
  }, delay);
}

function onPageLoadReady() {
  const elapsedTime = Date.now() - window.pageLoadStart;
  const remainingTime = Math.max(2000 - elapsedTime, 0);
  setTimeout(() => {
    loader.classList.add("fade-out");
    setTimeout(() => loader.remove(), 500);
  }, remainingTime);
}

window.pageLoadStart = Date.now();
window.addEventListener("load", onPageLoadReady);

$(document).ready(function () {
  const counter = document.querySelector(".countup");
  if (counter) {
    const counterObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            animateCustomCounter(counter, sequence);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counterObserver.observe(counter);
  }

  window.scrollTo(0, 0);

  $(".nav-link, .navbar-brand").on("click", function (e) {
    e.preventDefault();
    const page = $(this).data("page");
    if (page) {
      $("#pageContent").load(page);
    }
  });

  $("#navbarLogo, #homePage").on("click", function () {
    window.location.reload();
  });

  $(".hero-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    dots: true,
    nav: false,
    animateOut: "fadeOut",
  });

  // Replace hover with tap for service cards on mobile
  document.querySelectorAll(".service-card-ac").forEach((card) => {
    const content = card.querySelector(".service-card-ac-content");

    // For desktops (hover works fine)
    content.addEventListener("mouseenter", () => {
      card.classList.add("zoom-bg");
    });
    content.addEventListener("mouseleave", () => {
      card.classList.remove("zoom-bg");
    });

    // For mobile (toggle zoom on tap)
    content.addEventListener("click", () => {
      card.classList.toggle("zoom-bg");
    });
  });

  $(".hero-carousel").on("changed.owl.carousel", function () {
    setTimeout(() => {
      const caption = $(".owl-item.active .hero-caption");
      const p = caption.find("p");
      const h1 = caption.find("h1");
      const button = caption.find("button");

      p.css({ opacity: 0, transform: "translateY(20px)" });
      h1.css({ opacity: 0, transform: "translateY(20px)" });
      button.css({ opacity: 0, transform: "translateY(20px)" });

      setTimeout(() => {
        p.css({
          opacity: 1,
          transform: "translateY(0)",
          transition: "all 0.6s ease",
        });
      }, 200);

      setTimeout(() => {
        h1.css({
          opacity: 1,
          transform: "translateY(0)",
          transition: "all 0.6s ease",
        });
      }, 600);

      setTimeout(() => {
        button.css({
          opacity: 1,
          transform: "translateY(0)",
          transition: "all 0.6s ease",
        });
      }, 1000);
    }, 100);
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar, #navbarLogo").removeClass("transparent").addClass("scrolled");
    } else {
      $(".navbar, #navbarLogo").removeClass("scrolled").addClass("transparent");
    }
  });

  const cardContainer = document.querySelector(".services-row");
  const cards = document.querySelectorAll(".service-card-ac");
  if (cardContainer && cards.length > 0) {
    const cardObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-in-view");
              }, index * 500);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    cardObserver.observe(cardContainer);
  }

  document.querySelectorAll(".service-card-ac").forEach((card) => {
    const content = card.querySelector(".service-card-ac-content");
    content.addEventListener("mouseenter", () => {
      card.classList.add("zoom-bg");
    });
    content.addEventListener("mouseleave", () => {
      card.classList.remove("zoom-bg");
    });
  });

  const fadeObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.getAttribute("data-delay") || "0s";
          el.style.animationDelay = delay;
          el.classList.add("visible");
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.2 }
  );
  document.querySelectorAll(".fade-up-on-scroll").forEach((el) => {
    fadeObserver.observe(el);
  });

  const animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in-view");
          if (entry.target.classList.contains("stagger-list")) {
            const items = entry.target.querySelectorAll("li");
            items.forEach((li, index) => {
              li.style.animationDelay = `${0.2 + index * 0.2}s`;
              li.classList.add("animated");
            });
          }
        }
      });
    },
    { threshold: 0.3 }
  );

  document
    .querySelectorAll(".animate-left, .animate-right, .stagger-list")
    .forEach((el) => {
      animationObserver.observe(el);
    });

  function typewriterOnView(selector, options = {}) {
    const typingSpeed = options.typingSpeed || 120;

    const typeObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target.querySelector(".typewriter");
            if (!el) return;
            const text = el.getAttribute("data-text");
            let index = 0;
            const type = () => {
              if (index <= text.length) {
                el.innerHTML = text
                  .slice(0, index)
                  .split("")
                  .map((char) => `<span>${char}</span>`)
                  .join("");
                index++;
                setTimeout(type, typingSpeed);
              }
            };
            type();
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll(selector).forEach((el) => {
      typeObserver.observe(el);
    });
  }

  typewriterOnView(".section-subtitle");
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
if (scrollToTopBtn) {
  window.addEventListener("scroll", () => {
    scrollToTopBtn.classList.toggle("show", window.scrollY > 100);
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
async function loadPage(file) {
  if (!file) return;
  try {
    const response = await fetch(file);
    const html = await response.text();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.getElementById("pageContent").innerHTML = html;
  } catch (err) {
    document.getElementById("pageContent").innerHTML =
      "<p>Error loading content.</p>";
    console.error(err);
  }
}
