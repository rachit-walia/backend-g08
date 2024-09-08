import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Function to handle navigation to login page
  const navigateToLogin = () => {
    navigate('/login');
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    padding: '10px 20px',
    borderBottom: '1px solid #e5e7eb',
  };

  const headerLinkStyle = {
    color: '#1f2937',
    textDecoration: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const headerLinkHoverStyle = {
    backgroundColor: '#e5e7eb',
    color: '#2563eb',
  };

  const buttonStyle = {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, box-shadow 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#2563eb',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const logoStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1f2937',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header Section */}
      <header style={headerStyle}>
        <div style={{ display: 'flex', gap: '15px' }}>
          <a href="#ourstory" style={headerLinkStyle} onMouseOver={e => e.currentTarget.style = {...headerLinkStyle, ...headerLinkHoverStyle}} onMouseOut={e => e.currentTarget.style = headerLinkStyle}>Our Story</a>
          <a href="#membership" style={headerLinkStyle} onMouseOver={e => e.currentTarget.style = {...headerLinkStyle, ...headerLinkHoverStyle}} onMouseOut={e => e.currentTarget.style = headerLinkStyle}>Membership</a>
          <a href="#write" style={headerLinkStyle} onMouseOver={e => e.currentTarget.style = {...headerLinkStyle, ...headerLinkHoverStyle}} onMouseOut={e => e.currentTarget.style = headerLinkStyle}>Write</a>
          <button
            style={buttonStyle}
            onMouseOver={e => e.currentTarget.style = {...buttonStyle, ...buttonHoverStyle}}
            onMouseOut={e => e.currentTarget.style = buttonStyle}
            onClick={navigateToLogin}
          >
            Sign Up
          </button>
        </div>
        <div>
          <h1 style={logoStyle}>Rw-Blogs</h1>
        </div>
      </header>

      {/* Main Section */}
      <div style={{ display: 'flex', flexGrow: 1 }}>
        {/* Left Sidebar */}
        <aside style={{ width: '20%', backgroundColor: '#f9fafb', padding: '20px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px' }}>Create a Blog</h2>
          <p style={{ color: '#4b5563', marginBottom: '20px' }}>
            Share your story with the world. Create a beautiful, personalized blog that fits your brand. Grow your audience with built-in marketing tools, or transform your passion into revenue by gating access with a paywall.
          </p>
          <button
            style={buttonStyle}
            onMouseOver={e => e.currentTarget.style = {...buttonStyle, ...buttonHoverStyle}}
            onMouseOut={e => e.currentTarget.style = buttonStyle}
            onClick={navigateToLogin}
          >
            Get Started
          </button>
        </aside>

        {/* Head Section */}
        <section style={{ width: '60%', padding: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img src="https://via.placeholder.com/150" alt="Rachit Walia" style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Rachit Walia</h3>
                <p style={{ color: '#6b7280' }}>Rachit recently shared his thoughts on modern technology trends...</p>
              </div>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img src="https://via.placeholder.com/150" alt="John" style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>John</h3>
                <p style={{ color: '#6b7280' }}>John shared an insightful post about life experiences and growth...</p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Sidebar */}
        <aside style={{ width: '20%', backgroundColor: '#f9fafb', padding: '20px' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Chris</h3>
            <p style={{ color: '#6b7280' }}>
              Chris started blogging about tech trends in 2015. Today, he is a renowned voice in the tech world, helping others launch their own blogs.
            </p>
          </div>
          <div style={{ marginTop: '20px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Tom</h3>
            <p style={{ color: '#6b7280' }}>
              Tom's journey began as a travel blogger, and now he shares his adventures with millions of followers worldwide.
            </p>
          </div>
        </aside>
      </div>

      {/* Footer Section */}
      <footer style={{ backgroundColor: '#f9fafb', padding: '20px', borderTop: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a href="#help" style={{ color: '#6b7280', textDecoration: 'none' }}>Help</a>
          <a href="#status" style={{ color: '#6b7280', textDecoration: 'none' }}>Status</a>
          <a href="#about" style={{ color: '#6b7280', textDecoration: 'none' }}>About</a>
          <a href="#careers" style={{ color: '#6b7280', textDecoration: 'none' }}>Careers</a>
          <a href="#press" style={{ color: '#6b7280', textDecoration: 'none' }}>Press</a>
          <a href="#blog" style={{ color: '#6b7280', textDecoration: 'none' }}>Blog</a>
          <a href="#privacy" style={{ color: '#6b7280', textDecoration: 'none' }}>Privacy</a>
          <a href="#terms" style={{ color: '#6b7280', textDecoration: 'none' }}>Terms</a>
          <a href="#tts" style={{ color: '#6b7280', textDecoration: 'none' }}>Text to Speech</a>
          <a href="#teams" style={{ color: '#6b7280', textDecoration: 'none' }}>Teams</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
