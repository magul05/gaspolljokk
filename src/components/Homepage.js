import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Homepage = () => {
  return (
    <div style={styles.container}>
      {/* Tombol WhatsApp */}
      <a
        href="https://wa.me/6285702088994?text=Halo%20admin,%20saya%20butuh%20bantuan%20joki%20kampus."
        target="_blank"
        rel="noopener noreferrer"
        style={styles.whatsappButton}
      >
        💬
      </a>

      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>GaspollJokk</div>
        <ul style={styles.navLinks}>
          <li><a href="#layanan" style={styles.navLink}>Layanan</a></li>
          <li><a href="#harga" style={styles.navLink}>Harga</a></li>
          <li><a href="#kontak" style={styles.navLink}>Kontak</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          <Typewriter
            words={['Tugas Menumpuk?', 'Pusing?', 'Pengin Cepat Selesai?', 'Tapi Mager?', 'Gaspoll Aja!', 'Cepat, Amanah, dan Terpercaya!']}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
        <p style={styles.heroText}>Kami siap membantu tugas kuliah, coding, laporan, hingga editing</p>
        <a href="#pesan" style={styles.ctaButton}>Pesan Sekarang</a>
      </section>

      {/* Layanan */}
      <section style={styles.services} id="layanan">
        <h2 style={styles.sectionTitle}>💼 Layanan Kami</h2>
        <div style={styles.cardContainer}>
          <div style={styles.card}>📘 Joki Tugas Harian</div>
          <div style={styles.card}>✏️ Joki Penulisan Laporan & Editing</div>
          <div style={styles.card}>💻 Joki Coding & Proyek IT</div>
          <div style={styles.card}>📝 Joki jasa ketik dan tulisan tangan</div>
          <div style={styles.card}>🔍 joki cek turnitin no repository dan parafrase turnitin</div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta} id="pesan">
        <h2 style={styles.sectionTitle}>Siap Gaspoll?</h2>
        <p style={{ marginBottom: 30 }}>Klik tombol emot 💬 untuk pesan atau konsultasi lewat WhatsApp</p>
      </section>

      {/* Testimoni */}
      <section style={styles.testimonialSection}>
        <h2 style={styles.sectionTitle}>Apa Kata Mereka</h2>
        <div style={styles.testimonialContainer}>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>“Pelayanan super cepat dan hasilnya memuaskan banget. Nggak nyangka bisa selesai dalam sehari!”</p>
            <p style={styles.testimonialAuthor}>— Rina, Mahasiswi Teknik</p>
          </div>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>“Codingan gue error mulu, tapi tim Gaspoll langsung bantu dan beres. Worth it banget!”</p>
            <p style={styles.testimonialAuthor}>— Fajar, Informatika</p>
          </div>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>“Udah dua kali pake jasa ini buat laporan akhir. Selalu profesional dan rapi.”</p>
            <p style={styles.testimonialAuthor}>— Sari, Akuntansi</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 GaspollJokk. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: '#0b1d3a',
    color: '#fff',
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
  },
  whatsappButton: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    backgroundColor: '#25D366',
    color: 'white',
    padding: '12px 16px',
    borderRadius: '50%',
    textDecoration: 'none',
    fontSize: 24,
    zIndex: 1000,
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    backgroundColor: '#09172e',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    flexWrap: 'wrap',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
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
    color: '#bcd0ea',
    textDecoration: 'none',
    fontSize: '1rem',
  },
  hero: {
    padding: '80px 20px',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    minHeight: '60px',
  },
  heroText: {
    fontSize: '1rem',
    color: '#bcd0ea',
    margin: '20px 0',
  },
  ctaButton: {
    backgroundColor: '#1e90ff',
    color: '#fff',
    padding: '12px 28px',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
  },
  services: {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#102c50',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: 30,
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 20,
    maxWidth: 900,
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#14355d',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
    fontWeight: 500,
    transition: '0.3s',
  },
  cta: {
    padding: '60px 20px',
    backgroundColor: '#0f2c4a',
    textAlign: 'center',
  },
  testimonialSection: {
    padding: '60px 20px',
    backgroundColor: '#102c50',
    textAlign: 'center',
  },
  testimonialContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 20,
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: 30,
  },
  testimonialCard: {
    backgroundColor: '#14355d',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    textAlign: 'left',
  },
  testimonialText: {
    fontStyle: 'italic',
    marginBottom: 10,
  },
  testimonialAuthor: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#bcd0ea',
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#0a1c38',
    color: '#aaa',
  }
};

export default Homepage;
