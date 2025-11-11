function loadFooter() {
  document.getElementById("footer").innerHTML = `
   <footer class="footer bg-img text-white d-flex flex-column justify-content-between"
      style="background-image: url('./assets/media/AC/ac3.jpg');">
      
      <!-- Overlay -->
      <div class="overlay"></div>

      <div class="container flex-grow-1 d-flex align-items-center">
        <div class="row gy-5 w-100">
          
          <!-- 1️⃣ Logo & About -->
          <div class="col-lg-3 col-md-6 mb-3">
            <div class="footer-logo-wrapper d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="50" height="50">
                <path fill="#fff" d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
              </svg>
              <div id="footerLogo" class="ms-2">
                <div class="main-title">GENIE..</div>
                <div class="sub-title">SERVICES</div>
              </div>
            </div>
            <p class="small lh-lg mt-4">We handle repairs and maintenance for all types of homes, offices, and buildings — no matter the size.</p>
            <ul class="list-inline footer-contact-icons mt-3">
              <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
              <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li class="list-inline-item"><a href="#"><i class="fab fa-youtube"></i></a></li>
              <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>

          <!-- 2️⃣ Services -->
          <div class="col-lg-3 col-md-6 mb-3">
            <h5 class="primaryfooterColor mb-4">Our Services</h5>
            <ul class="list-unstyled footer-list">
              <li><a href="#"><i class="fas fa-angle-right me-2 primaryfooterColor"></i>AC Repair</a></li>
              <li><a href="#"><i class="fas fa-angle-right me-2 primaryfooterColor"></i>TV Repair</a></li>
              <li><a href="#"><i class="fas fa-angle-right me-2 primaryfooterColor"></i>Washing Machine Repair</a></li>
              <li><a href="#"><i class="fas fa-angle-right me-2 primaryfooterColor"></i>Dish Washer Repair</a></li>
            </ul>
          </div>

          <!-- 3️⃣ Contact Info -->
          <div class="col-lg-3 col-md-6 mb-3">
            <h5 class="primaryfooterColor mb-4">Contact Us</h5>
            <div class="footer-contact-info mb-3">
              <address class="mb-2">105 Edington Drive, Roswell, GA 30076</address>
              <a href="#" class="primaryfooterColor text-decoration-none"><i class="fas fa-angle-right me-2"></i> Get Direction</a>
            </div>
            <ul class="list-unstyled mt-4">
              <li class="mb-2"><a href="tel:+1234567890" class="text-white text-decoration-none"><i class="fas fa-phone me-2 primaryfooterColor"></i> +1 234 567 890</a></li>
              <li><a href="mailto:email@youraddress.com" class="text-white text-decoration-none"><i class="fas fa-envelope me-2 primaryfooterColor"></i> email@youraddress.com</a></li>
            </ul>
          </div>

          <!-- 4️⃣ Free Estimate & Subscribe -->
            <div class="col-lg-3 col-md-6 footer-contact-infoFree mb-3">
            <div class="box position-relative p-3 rounded">
              <h2 class="text-white fs-6 mb-0">
                <span class="d-block small text-white">Get Free Estimate</span>
                <span style="font-size: 24px">+1 234 567 890</span>
              </h2>
              <span
                class="icon position-absolute top-50 end-0 translate-middle-y me-2"
              >
                <svg
                  viewBox="0 0 320 512"
                  width="40px"
                  height="40px"
                  class="fs-3 primaryfooterColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill="#fff"
                    d="M272 0H48C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48H272c26.5 0 48-21.5 48-48V48C320 21.5 298.5 0 272 0zM160 480a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM288 400H32V80H288V400z"
                  />
                </svg>
              </span>
            </div>
            <form class="newsletter-form mt-4">
              <div class="input-group">
                <input type="email" class="form-control" placeholder="Subscribe with us"/>
                <button class="btn btn-primary" type="submit"><i class="fas fa-paper-plane"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Footer bottom -->
     <div class="footer-bottom py-3 mt-5">
  <p class="text-white opacity9 footerTextCss mb-0 display-31 letter-spacing-2 text-uppercase">
    © <script>document.write(new Date().getFullYear())</script> 2025 Services is Powered by 
    <a href="#" class="primaryfooterColor">Genie Services</a>
  </p>
</div>



    
   </footer>
  `;
}

document.addEventListener("DOMContentLoaded", loadFooter);
