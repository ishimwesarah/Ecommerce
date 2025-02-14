import React from 'react';
import '../style/contact.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { names, email, subject, message } = data;
    try {
      const response = await axios.post(
        'https://botiga-kvf9.onrender.com/contact/createContact',
        { names, email, subject, message },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log("Submission successful:", response);
      alert("Form has been submitted");
    } catch (error) {
      console.error("Error submitting the form:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  return (
    <div className="contact-container">
      <div className="map-container">
        <iframe
          title="Embedded Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.7585087093186!2d-0.09219138414155317!3d51.47915847173121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760357682efdc5%3A0x9873df614c17be35!2sLondon%20SE1%209PD%2C%20UK!5e0!3m2!1sen!2sus!4v1717513725752!5m2!1sen!2sus"
          width="100%"
          height="400px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-content">
        <div className="contact-section leave-message">
          <h2>Leave Us a Message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="form-container">
            <div className="name-input">
              <label>
                Name <span style={{ color: 'black' }}>*</span>
              </label>
              <div className="name-fields">
                <input
                  type="text"
                  placeholder="Name"
                  {...register('names', { required: 'First Name is required' })}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  {...register('subject', { required: 'Subject is required' })}
                />
              </div>
              {errors.names && (
                <p className="error-message">{errors.names.message}</p>
              )}
              {errors.subject && (
                <p className="error-message">{errors.subject.message}</p>
              )}
            </div>
            <div className="email-input">
              <label>
                Email <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </div>

            <div className="message-input">
              <label>Comment or Message</label>
              <textarea
                placeholder="Your message"
                {...register('message', { required: 'Message is required' })}
              ></textarea>
              {errors.message && (
                <p className="error-message">{errors.message.message}</p>
              )}
            </div>

            <button type="submit" className="submit-button">
              SUBMIT
            </button>
          </form>
        </div>

        <div className="contact-section our-store">
          <h2>Our Store</h2>
          <p>501-521 Fashion Ave, New York, NY 10018, USA</p>
          <p>
            PHONE: <br />+1 212 244 2681
          </p>
          <p>
            E-MAIL: <br /> office@example.org
          </p>
        </div>

        <div className="contact-section store-hours">
          <h2>Store Hours</h2>
          <p>Sun: Closed</p>
          <p>Mon to Sat: 10 AM – 5:30 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
