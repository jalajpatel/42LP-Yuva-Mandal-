import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 80px;
  margin-bottom: 40px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const ContactSubtitle = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
`;

const ContactContent = styled.div`
  display: flex;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContactForm = styled.form`
  width: 45%;
  margin-left: 10%; /* Adjusted margin for better spacing */

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
  }
`;

const ContactInfoItem = styled.div`
  text-align: left;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const FormItem = styled.div`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const FormControl = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  border: 1px solid #ccc;
  padding: 0 25px;
  font-size: 16px;
  color: #555;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  height: 140px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px 25px;
  font-size: 16px;
  color: #555;
  resize: none;
`;

const SendButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <br />
      <div className="content-wrapper">
        <ContactContainer>
          <ContactTitle>
            Let's Get in Touch: Ways to Connect with Me
          </ContactTitle>

          <ContactSubtitle>
            Thank you for your interest in getting in touch with me. I welcome
            your feedback, questions, and suggestions. If you have a specific
            question or comment, please feel free to email me directly. I make
            an effort to respond to all messages within 24 hours, although it
            may take me longer during busy periods. Alternatively, you can use
            the contact form on my website to get in touch. Simply fill out the
            required fields and I'll get back to you as soon as possible.
            Finally, if you prefer to connect on social media, you can find me
            on there. I post regular updates and engage with my followers
            there, so don't hesitate to reach out. Thanks again for your
            interest, and I look forward to hearing from you!
          </ContactSubtitle>

          <ContactContent>
            <ContactInfo>
              <ContactInfoItem>
                <div>
                  <i className="fa fa-map-marker"></i>
                </div>
                <h4>Address</h4>
                <p>20, મંગલમ સ્કવેર, સદભાવ હોસ્પિટલની સામે, પાટણ</p>
              </ContactInfoItem>

              <ContactInfoItem>
                <div>
                  <i className="fa fa-phone"></i>
                </div>
                <h4>Call Us On</h4>
                <p>+૯૧ ૯૯૦૯૫૪૭૬૦૭</p>
              </ContactInfoItem>

              <ContactInfoItem>
                <div>
                  <i className="fa fa-envelope"></i>
                </div>
                <h4>Email</h4>
                <p>42leuvapatidaryuvamandal@gmail.com</p>
              </ContactInfoItem>
            </ContactInfo>

            <ContactForm>
              <FormItem>
                <FormGroup>
                  <FormControl type="text" placeholder="Name*" />
                </FormGroup>
              </FormItem>

              <FormItem>
                <FormGroup>
                  <FormControl type="email" placeholder="Email*" />
                </FormGroup>
              </FormItem>

              <FormItem>
                <FormGroup>
                  <FormControl type="text" placeholder="Subject*" />
                </FormGroup>
              </FormItem>

              <FormItem>
                <FormGroup>
                  <FormTextarea placeholder="Your Message*" />
                </FormGroup>
              </FormItem>

              <FormItem>
                <SendButton type="submit">Send Message</SendButton>
              </FormItem>
            </ContactForm>
          </ContactContent>
        </ContactContainer>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Contact;
