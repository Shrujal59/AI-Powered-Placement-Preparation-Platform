import { useState } from "react";
import api from "../api/axios";

function Profile() {
  const [formData, setFormData] = useState({
    user: 1,
    college: "",
    branch: "",
    cgpa: "",
    skills: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/profiles/",
        formData
      );

      console.log(response.data);

      alert("Profile Saved Successfully");
    } catch (error) {
       console.log("FULL ERROR:", error);
       console.log("ERROR DATA:", JSON.stringify(error.response?.data, null, 2));
       alert(JSON.stringify(error.response?.data));
      }
  };

  return (
    <div>
      <h1>Create Profile</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="college"
          placeholder="College"
          value={formData.college}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="branch"
          placeholder="Branch"
          value={formData.branch}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="cgpa"
          placeholder="CGPA"
          value={formData.cgpa}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="skills"
          placeholder="Skills"
          value={formData.skills}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Save Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;