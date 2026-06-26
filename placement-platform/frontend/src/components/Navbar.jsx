function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    alert("Logged out");
  };

  return (
    <nav>
      <h2>AI Placement Platform</h2>

      <div>
        <button>Dashboard</button>
        <button>Profile</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;