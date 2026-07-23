import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-row">
        <img src="/images/noun-contact-3279556.png" alt="" />
        <a href="https://maps.app.goo.gl/H1tksGtTWS3XR4449" target="_blank" rel="noreferrer">
          1739 N Milwaukee Ave, Chicago, IL 60647
        </a>
      </div>

      <div className="footer-row">
        <img src="/images/noun-call-3279474.png" alt="" />
        <a href="tel:7736986455">(773) 698-6455</a>
      </div>

      <div className="footer-row">
        <img src="/images/noun-communication-3279453.png" alt="" />
        <a href="mailto:arianailspa1739@gmail.com">arianailspa1739@gmail.com</a>
      </div>

      <div className="footer-social">
        <a
          href="https://www.facebook.com/profile.php?id=61557344390450&mibextid=LQQJ4d"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/icons8-facebook-48.png" alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/aria_nail_spa?igsh=MWN4ZHY5dGw3OG85eA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/icons8-instagram-48.png" alt="Instagram" />
        </a>
        <a href="https://www.tiktok.com/@arianailspa?_t=8mK6E7nl87a&_r=1" target="_blank" rel="noreferrer">
          <img src="/images/icons8-tiktok-48.png" alt="TikTok" />
        </a>
      </div>

      <p className="footer-copy">&copy; {new Date().getFullYear()} Aria Nail Spa Chicago. All rights reserved.</p>
    </footer>
  );
}
