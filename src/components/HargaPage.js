import React from 'react';
import Layout from './Layout';
const HargaPage = () => {
  return (
    <div style={styles.container}>
        <Layout/>
      <section style={styles.pricing}>
        <h2 style={styles.title}>💰 Daftar Harga Jasa</h2>
        <p style={styles.subtitle}>Harga terjangkau dengan kualitas terpercaya!</p>

        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📘 Tugas Harian</h3>
            <p style={styles.cardPrice}>Mulai dari <strong>Rp3.000</strong></p>
            <p style={styles.cardDesc}>Essay, laporan ringkas, artikel pendek, dll.</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>✏️ Laporan & Editing</h3>
            <p style={styles.cardPrice}>Mulai dari <strong>Rp25.000</strong></p>
            <p style={styles.cardDesc}>Penulisan laporan, revisi bab, dan layout editing.</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>💻 Coding / Proyek IT</h3>
            <p style={styles.cardPrice}>Mulai dari <strong>Rp50.000</strong></p>
            <p style={styles.cardDesc}>Frontend, backend, aplikasi sederhana hingga skripsi IT.</p>
          </div>
        </div>

        <p style={styles.note}>📌 Harga bisa berbeda tergantung tingkat kesulitan dan deadline.</p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#0b1d3a',
    color: '#fff',
    fontFamily: "'Poppins', sans-serif",
    padding: '40px 20px',
    minHeight: '100vh',
  },
  pricing: {
    maxWidth: 900,
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.4rem',
    marginBottom: 10,
  },
  subtitle: {
    color: '#bcd0ea',
    marginBottom: 40,
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 20,
  },
  card: {
    backgroundColor: '#14355d',
    padding: 30,
    borderRadius: 12,
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    textAlign: 'left',
  },
  cardTitle: {
    fontSize: '1.3rem',
    marginBottom: 10,
  },
  cardPrice: {
    fontSize: '1.2rem',
    marginBottom: 10,
    color: '#1e90ff',
  },
  cardDesc: {
    fontSize: '0.95rem',
    color: '#d0e4ff',
  },
  note: {
    marginTop: 40,
    fontSize: '0.9rem',
    color: '#ccc',
  }
};

export default HargaPage;
