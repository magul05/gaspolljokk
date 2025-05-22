import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

const Layout = () => {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Nav/>
      <Outlet /> {/* Tempat halaman ditampilkan */}
      {/* Chatbot WhatsApp tetap muncul di semua halaman */}
      <a
        href="https://wa.me/6285702088994?text=Halo%20admin,%20saya%20butuh%20bantuan%20joki%20kampus."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          color: 'white',
          padding: '12px 16px',
          borderRadius: '50%',
          textDecoration: 'none',
          fontSize: '24px',
          zIndex: 1000,
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        }}
      >
        💬
      </a>
    </div>
  );
};

export default Layout;
