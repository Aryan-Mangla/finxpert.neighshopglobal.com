import React, { useState } from 'react';
import './LeadForm.css';

const LeadForm = ({ isModal = false, initialService = 'insurance' }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: initialService,
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submission
        console.log('Form Submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className={isModal ? "" : "lead-section section"}>
            <div className={isModal ? "" : "container"}>
                <div className={isModal ? "modal-form-wrapper" : "lead-wrapper"}>
                    {!isModal && (
                        <div className="lead-content animate-fade-up">
                            <span className="section-label">GET STARTED</span>
                            <h2 className="section-heading">Ready to <span className="accent">Secure Your Future?</span></h2>
                            <p className="section-subtext">Fill out the form and our financial experts will get in touch with you within 24 hours.</p>

                            <div className="contact-info-list">
                                <div className="contact-item animate-fade-up delay-1">
                                    <span className="icon">📞</span>
                                    <div>
                                        <h4>Call Us</h4>
                                        <p>+91 1800 123 4567</p>
                                    </div>
                                </div>
                                <div className="contact-item animate-fade-up delay-2">
                                    <span className="icon">📧</span>
                                    <div>
                                        <h4>Email Us</h4>
                                        <p>support@finexprt.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className={isModal ? "form-card-modal" : "form-card animate-fade-up delay-3"}>
                        {submitted ? (
                            <div className="success-message">
                                <div className="success-icon">✓</div>
                                <h3>Thank You!</h3>
                                <p>Your request has been received. We'll contact you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="John Doe"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="+91 98765 43210"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Service Interested In</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                    >
                                        <option value="insurance">Insurance</option>
                                        <option value="mutual-funds">Mutual Funds</option>
                                        <option value="investment">Investment Planning</option>
                                        <option value="loans">Loans</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Message (Optional)</label>
                                    <textarea
                                        name="message"
                                        placeholder="Tell us a bit about your requirement..."
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button type="submit" className="submit-btn">Send Request</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadForm;
