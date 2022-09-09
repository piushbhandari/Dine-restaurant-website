class SubFooter extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <div class="footer__row1">
          <div class="footer__row1-container reveal">
            <h2 class="footer__title">Ready to make a reservation?</h2>
            <a href="#" class="footer__cta"> Book a table </a>
          </div>
        </div>
        `;
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <div class="footer__row2">
          <div class="footer__row2-container reveal">
            <img
              src="./images/logo.svg"
              alt="company logo dine"
              class="footer__logo"
            />
            <address>
              <p class="footer__country">Marthwaite, Sedbergh</p>
              <p class="footer__city">Cumbria</p>
              <p class="footer__phone-number">+00 44 123 4567</p>
            </address>
            <div class="footer__schedulebox">
              <p class="footer__open">Open Times</p>
              <p class="footer__weekday">Mon - Fri: 09:00 AM - 10:00 PM</p>
              <p class="footer__weekend">Sat - Sun: 09:00 AM - 11:30 PM</p>
            </div>
          </div>
        </div>`;
  }
}

customElements.define("footer-component", Footer);
customElements.define("sub-footer-component", SubFooter);

// loaders
window.addEventListener("scroll", unloadElement);

function unloadElement(e) {
  const elements = [...document.querySelectorAll(".reveal")];

  for (let x = 0; x < elements.length; x++) {
    let windowHeight = window.innerHeight;
    let revealTop = elements[x].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      elements[x].classList.add("active");
    }
  }
}
//lazy loading

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    let target = entry.target;

    if (entry.isIntersecting) {
      target.dataset.src ? (target.src = target.dataset.src) : "";

      target.classList.remove("lazy-img");
      target.classList.add("unlazied");

      observer.unobserve(target);
    }
  });
});

const images = [...document.querySelectorAll(".lazy-img")];

images.forEach((image) => observer.observe(image));
