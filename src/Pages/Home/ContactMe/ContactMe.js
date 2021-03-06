import React from 'react';
import { Reveal } from 'react-reveal';

const ContactMe = () => {
  return (
    <div id="contact">
      <section
        className={`contact-area contact-area-two bg_color dContac`}
        id="contacts"
        style={{ textAlign: 'start' }}

      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="get_info">
                <div className={`section_title_two `}>
                  <h6>Get in Touch</h6>
                  <h2>Talk or Meet with Me</h2>
                </div>

                <div className="media get_item">
                  <i class="fas fa-phone"></i>
                  <div className="media-body">
                    <h6>Call Me Now</h6>
                    <a style={{ textDecoration: 'none' }} href=".#">(+88) 01750485095</a>
                  </div>
                </div>
                <div className="media get_item">
                  <i class="fas fa-envelope"></i>
                  <div className="media-body">
                    <h6>Contact Me</h6>
                    <a style={{ textDecoration: 'none', fontSize: '20px' }} href=".#">faysalsikder378486@gmail.com</a>
                  </div>
                </div>
                <div className="media get_item">
                  <i class="fas fa-map-marker-alt"></i>
                  <div className="media-body">
                    <h6>Get Me Here</h6>
                    <p>Dhaka, Banglades</p>
                  </div>
                </div>
                <div className="media get_item">
                  <i class="fab fa-linkedin"></i>
                  <div className="media-body">
                    <h6>Listen To Me</h6>
                    <a style={{ textDecoration: 'none' }} href=".#">faysalsikder.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <Reveal effect="fadeInRight" duration={800}>
                <div className="input_form">
                  <div className={`section_title_two `}>
                    <h6>Contact us</h6>
                    <h2>Let me Know Here</h2>
                  </div>



                  <form className="form_class">
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Your Name*"

                        />

                      </div>
                      <div className="col-lg-6">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Your Email*"

                        />

                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          placeholder="Subject*"

                        />

                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="Phone*"

                        />

                      </div>
                    </div>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="6"
                      placeholder="Your Message ..."

                    ></textarea>
                    <button type="submit" className="btn send_btn theme_btn">
                      Send Message
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;