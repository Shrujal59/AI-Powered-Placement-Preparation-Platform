import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import ProfileCard from "../components/ProfileCard";

function Dashboard() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/profiles/");
        setProfile(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <Navbar />

      <h1>Dashboard</h1>

      <div>
        <StatsCard title="Profile Completion" value="100%" />
        <StatsCard title="Resume Score" value="Coming Soon" />
        <StatsCard title="Aptitude Score" value="Coming Soon" />
        <StatsCard title="Interview Score" value="Coming Soon" />
      </div>

      <ProfileCard profile={profile} />
    </div>
  );
}

export default Dashboard;