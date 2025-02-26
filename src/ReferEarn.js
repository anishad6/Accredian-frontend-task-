import React, { useState } from "react";
import "./ReferEarn.css"; // Import CSS file
import axios from "axios";

const ReferEarn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    referrer_name: "",
    referrer_email: "",
    referee_name: "",
    referee_email: "",
    course_name: "",
  });

  const [message, setMessage] = useState("");  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log(formData);
        
      const response = await axios.post("https://nishadshop.pythonanywhere.com/crud/", formData);
      

      setMessage("Referral sent successfully!");
      setFormData({ referrer_name: "", referrer_email: "", referee_name: "", referee_email: "", course_name: "" });
    } catch (error) {
      setMessage("Error sending referral.");
    }
  };

  return (
    <div className="refer-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>📢 Refer & Earn</h1>
        <p>Invite your friends and earn exciting rewards when they enroll in a course!</p>
        <button className="refer-btn" onClick={() => setIsModalOpen(true)}>
          🎁 Refer Now
        </button>
      </div>

      {/* Popup Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>👥 Refer a Friend</h2>
            <p>Fill out the details to refer a course and earn rewards.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="referrer_name"
                  placeholder="Enter your name"
                  value={formData.referrer_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input
                  type="email"
                  name="referrer_email"
                  placeholder="Enter your email"
                  value={formData.referrer_email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Friend's Name</label>
                <input
                  type="text"
                  name="referee_name"
                  placeholder="Enter friend's name"
                  value={formData.referee_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Friend's Email</label>
                <input
                  type="email"
                  name="referee_email"
                  placeholder="Enter friend's email"
                  value={formData.referee_email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Course Name</label>
                <input
                  type="text"
                  name="course_name"
                  placeholder="Enter course name"
                  value={formData.course_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">🚀 Submit Referral</button>
            </form>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>✖</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferEarn;
