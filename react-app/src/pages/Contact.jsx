import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <h1 className="page-title display-heading gold-text">Contact Us</h1>

      <div className="contact-grid container-page">
        <div className="contact-info" data-aos="fade-right" data-aos-duration="1000">
          <h2 className="display-heading gold-text">Contact Information</h2>
          <p>Email: arianailspa1739@gmail.com</p>
          <p>Phone: (773) 698-6455</p>
          <p>Address: 1739 N Milwaukee Ave, Chicago, IL 60647</p>
          <div className="map-container">
            <iframe
              title="Aria Nail Spa location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0587396946476!2d-87.68397392397755!3d41.91309597123787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2bef24f5c9d%3A0x46796f33c5f5371a!2s1739%20N%20Milwaukee%20Ave%2C%20Chicago%2C%20IL%2060647!5e0!3m2!1sen!2sus!4v1712278101092!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="contact-form-wrap" data-aos="fade-left" data-aos-duration="1000">
          <h2 className="display-heading gold-text">Send a Message</h2>
          <form action="https://formsubmit.co/vyknguyen01@gmail.com" method="POST" className="contact-form">
            <input type="hidden" name="_cc" value="arianailspa1739@gmail.com" />
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required />
            <button type="submit" className="btn-gold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
