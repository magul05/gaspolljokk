import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Homepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <nav style={{
        ...styles.navbar,
        boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}>
        <div style={styles.logo}>GaspollJokk</div>
        <ul style={styles.navLinks}>
          <li><a href="#layanan" style={styles.navLink}>Layanan</a></li>
          <li><a href="harga" style={styles.navLink}>Harga</a></li>
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
          {[
            { text: '📘 Joki Tugas Harian', msg: 'Halo%2C+saya+ingin+pakai+Joki+Tugas+Harian' },
            { text: '✏️ Joki Penulisan Laporan & Editing', msg: 'Halo%2C+saya+butuh+Joki+Penulisan+Laporan+dan+Editing' },
            { text: '💻 Joki Coding & Proyek IT', msg: 'Halo%2C+saya+ingin+pakai+Joki+Coding+%26+Proyek+IT' },
            { text: '📝 Joki jasa ketik dan tulisan tangan', msg: 'Halo%2C+saya+perlu+Jasa+Ketik+dan+Tulisan+Tangan' },
            { text: '🔍 joki pengecekatan turnitin dan edit parafrase', msg: 'Halo%2C+saya+mau+jasa+pengecekan+Turnitin+dan+parafrase' }
          ].map((item, index) => (
            <button
              key={index}
              style={styles.card}
              onClick={() => window.open(`https://wa.me/6285702088994?text=${item.msg}`, '_blank')}
            >
              {item.text}
            </button>
          ))}
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
          {[
            { text: '“Pelayanan super cepat dan hasilnya memuaskan banget. Nggak nyangka bisa selesai dalam sehari!”', author: '— Rina, Mahasiswi Teknik' },
            { text: '“Codingan gue error mulu, tapi tim Gaspoll langsung bantu dan beres. Worth it banget!”', author: '— Fajar, Informatika' },
            { text: '“Udah dua kali pake jasa ini buat laporan akhir. Selalu profesional dan rapi.”', author: '— Sari, Akuntansi' }
          ].map((item, index) => (
            <div key={index} style={styles.testimonialCard}>
              <p style={styles.testimonialText}>{item.text}</p>
              <p style={styles.testimonialAuthor}>{item.author}</p>
            </div>
          ))}
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
    backgroundColor: '#ffffff',
    color: '#0b1d3a',
    margin: 0,
    padding: 0,
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
    backgroundColor: '#ffffff',
    color: '#0b1d3a',
    position: 'sticky',
    top: 0,
    zIndex: 999,
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
  hero: {
    padding: '80px 20px',
    textAlign: 'center',
    backgroundColor: '#ffffff',
  },
  heroTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    minHeight: '60px',
    color: '#0b1d3a',
  },
  heroText: {
    fontSize: '1rem',
    color: '#0b1d3a',
    margin: '20px 0',
  },
  ctaButton: {
    backgroundColor: '#0b1d3a',
    color: '#fff',
    padding: '12px 28px',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
  },
  services: {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#ffffff',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: 30,
    color: '#0b1d3a',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 20,
    maxWidth: 900,
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#e6f0ff',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontWeight: 500,
    transition: '0.3s',
    color: '#0b1d3a',
    cursor: 'pointer',
  },
  cta: {
    padding: '60px 20px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    color: '#0b1d3a',
  },
  testimonialSection: {
    padding: '60px 20px',
    backgroundColor: '#ffffff',
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
    backgroundColor: '#e6f0ff',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'left',
    color: '#0b1d3a',
  },
  testimonialText: {
    fontStyle: 'italic',
    marginBottom: 10,
  },
  testimonialAuthor: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#0b1d3a',
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#ffffff',
    color: '#0b1d3a',
  }
};

export default Homepage;
