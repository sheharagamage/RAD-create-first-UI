import React, { useState, useEffect } from 'react';
import './ContactUs.css'; 
import website_icon from '../assests/website-icon.png';
import mail_icon from '../assests/mail-icon.png';
import phone_icon from '../assests/phone-icon.png';
const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!form.firstName) errors.firstName = 'First name is required';
    if (!form.lastName) errors.lastName = 'Last name is required';
    if (!form.email) errors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = 'Email is invalid';
    if (!form.phone) errors.phone = 'Phone number is required';
    if (!form.message) errors.message = 'Message is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccess('Form submitted successfully!');
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      }); 
      setTimeout(() => {
        setSuccess('');
      }, 3000); 
    }
  };

  useEffect(() => {
    console.log('Form or errors updated');
  }, [form, errors]);

  return (
    <div className="contact-container">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <strong>Address:</strong>
            <p>Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
          </div>
        </div>
        <div className="contact-info">
          <i className="fas fa-phone-alt"></i>
          <ul>
          <li><img src={website_icon} alt=""/>
            <div className='common-hover'>
            <a href="https://www.uniquest.edu.lk" target='_blank' rel="noopener noreferrer"> uniquest.edu.lk </a>
            </div>
          </li>
          <li><img src={mail_icon} alt=""/>
            <div className='common-hover'>
              <a href="mailto:info@uniquest.edu.lk" target='_blank' rel="noopener noreferrer"> info@uniquest.edu.lk </a>
            </div>
          </li>
          <li><img src={phone_icon} alt=""/>+94 11 222 333 </li>
        </ul>

        </div>
      </div>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="form-control"
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="form-control"
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="form-control"
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="form-control"
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
          {success && <p className="success">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
