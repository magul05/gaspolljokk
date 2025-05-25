import React from 'react';

const Navbar = () => {
  return (
    <>
      {/* Tombol WhatsApp */}
      <a
        href="https://wa.me/085702088994?text=Halo%20admin,%20saya%20butuh%20bantuan%20joki%20kampus."
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

      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>GaspollJokk</div>
        <ul style={styles.navLinks}>
          <li><a href="/#layanan" style={styles.navLink}>Layanan</a></li>
          <li><a href="/harga" style={styles.navLink}>Harga</a></li>
          <li><a href="/#kontak" style={styles.navLink}>Kontak</a></li>
        </ul>
      </nav>
    </>
  );
};

const styles = {
   navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    backgroundColor: '#ffffff',
    color: '#0b1d3a',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    flexWrap: 'wrap',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#0b1d3a',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '16px',
    padding: 0,
    margin: 0,
    flexWrap: 'wrap',
  },
  navLink: {
    color: '#0b1d3a',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

export default Navbar;
