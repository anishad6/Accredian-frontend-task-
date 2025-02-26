import React, { useEffect, useState } from "react";
import axios from "axios";

const ReferralsList = () => {
  const [referrals, setReferrals] = useState([]);

  useEffect(() => {
    axios.get("https://nishadshop.pythonanywhere.com/crud/")
      .then(response => setReferrals(response.data))
      .catch(error => console.error("Error fetching referrals:", error));
  }, []);

  return (
    <div>
      <h2>Referral List</h2>
      <ul>
        {referrals.map((ref, index) => (
          <li key={index}>
            {ref.referrer_name} referred {ref.referee_name} for {ref.course_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReferralsList;
