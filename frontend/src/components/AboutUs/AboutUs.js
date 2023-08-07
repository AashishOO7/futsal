import React from 'react';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AboutUs() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">About Us</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt vestibulum erat, ut bibendum metus tincidunt eu.
                Nullam congue non velit eget tincidunt. Vivamus bibendum odio ut facilisis. Duis lacinia bibendum quam, vel dictum neque
                semper eu. Integer non ligula et enim feugiat elementum. Proin faucibus rhoncus vestibulum. Fusce efficitur elit eu arcu
                placerat, vitae consequat dolor sollicitudin.
              </p>
              <p className="card-text">
                Nullam consequat hendrerit convallis. Curabitur vestibulum consequat nunc ac gravida. Nunc tincidunt, dui ac blandit
                faucibus, lectus est efficitur sapien, in commodo lectus augue nec odio. Nulla facilisi. Vivamus tincidunt ex velit, nec
                hendrerit quam pellentesque vel. Nunc ut venenatis turpis, et dictum nisi. Maecenas vitae varius libero. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed nec est at sapien sollicitudin rhoncus a ac libero.
                Nullam suscipit risus sit amet posuere sollicitudin. Fusce malesuada nunc in velit varius, non vulputate risus consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Aashish Poudel</h3>
              <p className="card-text">Project Developer</p>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt vestibulum erat, ut bibendum metus tincidunt eu.</p>
              <div className="contact-icons">
                <a href="tel:+1234567890"><FontAwesomeIcon icon={faPhone} className="me-3"/></a>
                <a href="mailto:john@example.com"><FontAwesomeIcon icon={faEnvelope}className="me-3" /></a>
                <a href="https://www.instagram.com/johndoe"><FontAwesomeIcon icon={faInstagram} className="me-3" /></a>
                <a href="https://www.facebook.com/johndoe"><FontAwesomeIcon icon={faFacebook} className="me-3" /></a>
                <a href="https://www.twitter.com/johndoe"><FontAwesomeIcon icon={faTwitter} className="me-3" /></a>
                <a href="https://www.linkedin.com/in/johndoe"><FontAwesomeIcon icon={faLinkedin} className="me-3" /></a>
                <a href="https://github.com/johndoe"><FontAwesomeIcon icon={faGithub} className="me-3" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Prajwal Dahal</h3>
              <p className="card-text">Project Developer</p>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt vestibulum erat, ut bibendum metus tincidunt eu.</p>
              <div className="contact-icons">
                <a href="tel:+9876543210"><FontAwesomeIcon icon={faPhone}className="me-3" /></a>
                <a href="mailto:jane@example.com"><FontAwesomeIcon icon={faEnvelope}className="me-3" /></a>
                <a href="https://www.instagram.com/janesmith"><FontAwesomeIcon icon={faInstagram} className="me-3" /></a>
                <a href="https://www.facebook.com/janesmith"><FontAwesomeIcon icon={faFacebook} className="me-3" /></a>
                <a href="https://www.twitter.com/janesmith"><FontAwesomeIcon icon={faTwitter} className="me-3" /></a>
                <a href="https://www.linkedin.com/in/janesmith"><FontAwesomeIcon icon={faLinkedin} className="me-3" /></a>
                <a href="https://github.com/janesmith"><FontAwesomeIcon icon={faGithub} className="me-3" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-5 text-center">
        <p>Contact Us</p>
        <div className="contact-icons">
          <a href="tel:+1234567890"><FontAwesomeIcon icon={faPhone} className="me-3"/></a>
          <a href="mailto:info@example.com"><FontAwesomeIcon icon={faEnvelope} className="me-3"/></a>
          <a href="https://www.instagram.com/example"><FontAwesomeIcon icon={faInstagram} className="me-3" /></a>
          <a href="https://www.facebook.com/example"><FontAwesomeIcon icon={faFacebook} className="me-3" /></a>
          <a href="https://www.twitter.com/example"><FontAwesomeIcon icon={faTwitter} className="me-3" /></a>
          {/* Add more contact icons as needed */}
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
