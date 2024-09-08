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
    backgroundColor: '#ffffff', // White background for header
    padding: '10px 20px',
    borderBottom: '1px solid #e5e7eb',
  };

  const headerLinkStyle = {
    color: '#000000', // Black text color
    textDecoration: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const headerLinkHoverStyle = {
    backgroundColor: '#f0f0f0', // Light gray background on hover
    color: '#000000', // Black text color on hover
  };

  const buttonStyle = {
    backgroundColor: '#3b82f6', // Blue background color for the button
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, box-shadow 0.3s',
    boxSizing: 'border-box',
  };

  const buttonHoverStyle = {
    backgroundColor: '#2563eb', // Darker blue background color on hover
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const logoTextStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#000000', // Black color for logo text
  };

  const logoImageStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '5px',
  };

  const sidebarStyle = {
    width: '20%',
    backgroundColor: '#1f2937', // Dark background color for the sidebar
    padding: '20px',
    color: '#f9fafb', // Light text color
  };

  const sidebarHeadingStyle = {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: '#f9fafb', // Light color for heading
    marginBottom: '15px',
  };

  const sidebarParagraphStyle = {
    color: '#e5e7eb', // Lighter color for the paragraph
  };

  const headSectionStyle = {
    width: '60%',
    padding: '20px',
    backgroundColor: '#f3f4f6', // Light background color
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const bloggerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px',
  };

  const bloggerImageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  };

  const bloggerContentStyle = {
    color: '#4b5563', // Darker text color for the content
  };

  const rightSidebarStyle = {
    width: '20%',
    backgroundColor: '#1f2937', // Dark background color matching the left sidebar
    padding: '20px',
    borderLeft: '1px solid #e5e7eb', // Border between main content and right sidebar
    color: '#f9fafb', // Light text color
  };

  const profileStyle = {
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: '15px',
    marginBottom: '15px',
  };

  const profileHeadingStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '5px',
    color: '#f9fafb', // Light color for the heading
  };

  const profileParagraphStyle = {
    color: '#e5e7eb', // Lighter color for the paragraph
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
        <div style={logoStyle}>
          <img src="https://imgs.search.brave.com/_p5NE5guO_tPdIUsc3Quq6hQPsm7iIUar2mnbPwX1Fk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yMy84OC9y/dy1sb2dvLWxldHRl/ci1tb25vZ3JhbS1z/bGFzaC13aXRoLW1v/ZGVybi12ZWN0b3It/Mjc5ODIzODguanBn" alt="Rw-Blogs Logo" style={logoImageStyle} />
          <h1 style={logoTextStyle}>Rw-Blogs</h1>
        </div>
      </header>

      {/* Main Section */}
      <div style={{ display: 'flex', flexGrow: 1 }}>
        {/* Left Sidebar */}
        <aside style={sidebarStyle}>
          <h2 style={sidebarHeadingStyle}>Create a Blog</h2>
          <p style={sidebarParagraphStyle}>
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
        <section style={headSectionStyle}>
          <div style={{ marginBottom: '20px' }}>
            <div style={bloggerStyle}>
              <img src="https://imgs.search.brave.com/-12dHJKnY9ogsst7sVNiqtkgZbmoCZ3Cv7lg_74Sbws/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA1/NjM5NDYzNi9waG90/by9uZW9uLWxpZ2h0/LWFscGhhYmV0LXIt/d2l0aC1jbGlwcGlu/Zy1wYXRoLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz04Qnoz/OVBFVGxCVS1CbWww/bkFYdDB3RUd2d1pm/SGFubFdoT3ZwUElE/VjJFPQ" alt="Rachit Walia" style={bloggerImageStyle} />
              <div style={bloggerContentStyle}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Rachit Walia</h3>
                <p>Rachit recently shared his thoughts on modern technology trends. He delves into the impact of AI on everyday life and how it's shaping the future of various industries. Rachit’s insights are not only thought-provoking but also provide a practical perspective on emerging technologies.</p>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <div style={bloggerStyle}>
              <img src="https://imgs.search.brave.com/zNxMhcbVuJbCmTQaFdAYrRW5KoqFpMLJl_z75mUnhMQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE1/NDM1MDkwMy9waG90/by9zdHVkaW8tcG9y/dHJhaXQtb2YtZHIt/am9obi13aXRoLXNu/YWtlLWhlYWQtd2Fs/a2luZy1zdGljay1o/b2xpZGF5LWlubi1o/b3RlbC1nZW50LWJl/bGdpdW0tM3JkLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1y/NENOT2xlbDdJMDZq/czQ0NUc2bE5wMkJt/emUxWnNqdVRtbDVj/ZjQ2UEwwPQ" alt="John" style={bloggerImageStyle} />
              <div style={bloggerContentStyle}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>John</h3>
                <p>John’s latest blog post explores the intersection of technology and lifestyle. He provides readers with actionable tips on integrating technology into daily routines to enhance productivity and well-being. His blog is a great resource for those looking to leverage tech for a balanced life.</p>
              </div>
            </div>
          </div>

          <div>
            <div style={bloggerStyle}>
              <img src="https://imgs.search.brave.com/ZIxa6uVuUGhmLwcKwVvdg-tONT4unim33zTl8XiLa5o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aW1hZ2VzLmV4cHJl/c3MuY28udWsvaW1n/L2R5bmFtaWMvNzkv/NTkweC9zZWNvbmRh/cnkvU29waGlhLUxv/cmVuLXdhcy1ib3Ju/LVNvcGhpYS1WaWxs/YW5pLVNjaW9sb25l/LTE0NzI3MjcuanBn/P3I9MTUzNDk0NTQ5/ODc2OA" alt="Sophia" style={bloggerImageStyle} />
              <div style={bloggerContentStyle}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Sophia</h3>
                <p>Sophia’s blog focuses on modern art and its influences on contemporary culture. Her recent posts highlight emerging artists and their innovative approaches to blending traditional techniques with new media. Sophia's content is a vibrant exploration of creativity and artistic expression.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Sidebar */}
        <aside style={rightSidebarStyle}>
          <div style={profileStyle}>
            <h3 style={profileHeadingStyle}>Chris</h3>
            <p style={profileParagraphStyle}>
              Chris started blogging about tech trends in 2015. Today, he is a renowned voice in the tech world, helping others launch their own blogs.
            </p>
          </div>
          <div style={profileStyle}>
            <h3 style={profileHeadingStyle}>Tom</h3>
            <p style={profileParagraphStyle}>
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
