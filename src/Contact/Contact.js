import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact= () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4 col-12 d-flex align-items-center justify-content-center mb-3 mb-md-0">
                    <h1 className="contact-heading">Contacts</h1>
                </div> 
                <div className="col-md-8 col-12 map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8489867594353!2d72.80556931473063!3d19.228203393437583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b158222067c7%3A0x4ce86be376e098ba!2sGlobal%20Vipassana%20Pagoda!5e0!3m2!1sen!2sin!4v1693418371563!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ border: 0, width: '100%', height: '450px' }}
                        title="Location Map"
                    ></iframe>
                </div>
            </div>
            <h5 className="text-center  mt-5">Dhamma Pattana Vipassana Meditation Center</h5>
            <div className="row justify-content-center mt-5">
                {/* Location 1 */}
                <div className="col-md-4 col-sm-6 mb-4">
                    <div className="card text-center p-4 position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                            <span style={{ fontSize: '1.5rem' }}>01</span>
                        </div>
                        <div className="mt-4">
                            <p><FaMapMarkerAlt className="text-warning me-2" />120 Park Avenue, New York, NY 10002, USA</p>
                            <p><FaPhoneAlt className="text-warning me-2" />+1 (234) 567 89 90</p>
                            <p><FaEnvelope className="text-warning me-2" />inspire@mail.com</p>
                            <p><FaClock className="text-warning me-2" />Mon - Sat 10 AM - 6 PM</p>
                        </div>
                    </div>
                </div>

                {/* Location 2 */}
                <div className="col-md-4 col-sm-6 mb-4">
                    <div className="card text-center p-4 position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                            <span style={{ fontSize: '1.5rem' }}>02</span>
                        </div>
                        <div className="mt-4">
                            <p><FaMapMarkerAlt className="text-warning me-2" />275 West Avenue, New York, NY 10002, USA</p>
                            <p><FaPhoneAlt className="text-warning me-2" />+1 (234) 567 89 90</p>
                            <p><FaEnvelope className="text-warning me-2" />inspire@mail.com</p>
                            <p><FaClock className="text-warning me-2" />Mon - Sat 10 AM - 6 PM</p>
                        </div>
                    </div>
                </div>

                {/* Location 3 */}
                <div className="col-md-4 col-sm-6 mb-4">
                    <div className="card text-center p-4 position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                            <span style={{ fontSize: '1.5rem' }}>03</span>
                        </div>
                        <div className="mt-4">
                            <p><FaMapMarkerAlt className="text-warning me-2" />120 Park Avenue, New York, NY 10002, USA</p>
                            <p><FaPhoneAlt className="text-warning me-2" />+1 (234) 567 89 90</p>
                            <p><FaEnvelope className="text-warning me-2" />inspire@mail.com</p>
                            <p><FaClock className="text-warning me-2" />Mon - Sat 10 AM - 6 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
