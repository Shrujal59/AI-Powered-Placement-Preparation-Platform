function ProfileCard({ profile }) {
  if (!profile) {
    return <p>No profile data found.</p>;
  }

  return (
    <div>
      <h2>Student Profile</h2>

      <p><strong>College:</strong> {profile.college}</p>
      <p><strong>Branch:</strong> {profile.branch}</p>
      <p><strong>CGPA:</strong> {profile.cgpa}</p>
      <p><strong>Skills:</strong> {profile.skills}</p>
    </div>
  );
}

export default ProfileCard;