// pages/forms.tsx

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Events: React.FC = () => {
  return (
    <div>
        <Header/>
        <br /><br /><br />
      <h1>Recent Events</h1>
      <div className="event">
        <img src="/event1_poster.jpg" alt="Event 1 Poster" />
        <h2>Event 1</h2>
        <p>Description of Event 1</p>
        <a href="https://docs.google.com/forms/d/e/your_form_link">Google Form Link</a>
      </div>
      <div className="event">
        <img src="/event2_poster.jpg" alt="Event 2 Poster" />
        <h2>Event 2</h2>
        <p>Description of Event 2</p>
        <a href="https://docs.google.com/forms/d/e/your_form_link">Google Form Link</a>
      </div>
      <div className="event">
        <img src="/event2_poster.jpg" alt="Event 2 Poster" />
        <h2>Event 2</h2>
        <p>Description of Event 3</p>
        <a href="https://docs.google.com/forms/d/e/your_form_link">Google Form Link</a>
      </div>
      <div className="event">
        <img src="/event2_poster.jpg" alt="Event 2 Poster" />
        <h2>Event 2</h2>
        <p>Description of Event 4</p>
        <a href="https://docs.google.com/forms/d/e/your_form_link">Google Form Link</a>
      </div>
      <br />

      {/* Add more events as needed */}

      <style jsx>{`
        .event {
          margin-bottom: 20px;
          border: 1px solid #ccc;
          padding: 10px;
        }
        .event h2 {
          margin-top: 0;
        }
        .event a {
          color: blue;
          text-decoration: underline;
        }
        .event img {
          max-width: 100%;
          height: auto;
          margin-bottom: 10px;
        }
      `}</style>
      <br />
      <Footer/>
    </div>
  );
};

export default Events;
