"use client";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { 
  FaLock, FaNetworkWired, FaEye, FaBolt, 
  FaFileContract, FaCoins, FaPalette, FaGlobe, 
  FaCode, FaHeadset, FaShieldAlt, FaChartLine, 
  FaArchive, FaDollarSign 
} from "react-icons/fa";

export default function BlockchainPage() {
  return (
    <>
      <Header />

      {/* HERO — FULL SCREEN, TOP 0, NO BOX */}
      <section className="hero-full">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            <span className="badge mt-10">CONTACT US</span>
            <h1>
              BLOCKCHAIN DEVELOPMENT <br />
              <span>Blockchain Development</span>
            </h1>
            <p>
              Decentralized applications, smart contracts, and blockchain solutions
              for the future of digital transactions.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Get started</button>
              <button className="btn-outline">Learn more</button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <Image
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600"
              alt="blockchain cube"
              width={450}
              height={450}
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <div className="main-container">
        {/* WHY BLOCKCHAIN — inspired by second image features */}
        <section className="why-section">
          <h2>Why Blockchain?</h2>
          <p className="section-sub">
            Blockchain is a widely used technology that has revolutionized how we do business.
          </p>

          <div className="card-grid">
            <div className="card">
              <div className="icon-circle">
                <FaNetworkWired />
              </div>
              <h3>Decentralization</h3>
              <p>No single entity controls the network.</p>
            </div>

            <div className="card">
              <div className="icon-circle">
                <FaLock />
              </div>
              <h3>Security</h3>
              <p>Transactions are verified by multiple nodes.</p>
            </div>

            <div className="card">
              <div className="icon-circle">
                <FaEye />
              </div>
              <h3>Transparency</h3>
              <p>Publicly verifiable records.</p>
            </div>

            <div className="card">
              <div className="icon-circle">
                <FaBolt />
              </div>
              <h3>Efficiency</h3>
              <p>Faster transactions, lower energy usage.</p>
            </div>
          </div>
        </section>

        {/* EXACT DESIGN FROM 2nd IMAGE (why blockchain matters + boxes) */}
        <section className="matters-section">
          <div className="matters-header">
            <h2>Why Blockchain Matters</h2>
            <p>
              It’s critical to be part of this revolution. We provide tools and services
              to help you get started. Visit our website to learn more about how
              blockchain can benefit your business.
            </p>
            <a href="#" className="matters-link">
              Read More →
            </a>
          </div>

          <div className="matters-grid">
            <div className="matter-card">
              <h3>Decentralization</h3>
              <p>No single entity controls the network.</p>
            </div>
            <div className="matter-card">
              <h3>Security</h3>
              <p>Transactions are verified by multiple nodes.</p>
            </div>
            <div className="matter-card">
              <h3>Transparency</h3>
              <p>Publicly verifiable records.</p>
            </div>
            <div className="matter-card">
              <h3>Efficiency</h3>
              <p>Faster transactions, lower energy usage.</p>
            </div>
            <div className="matter-card">
              <h3>Power consumption</h3>
              <p>Lower energy usage.</p>
            </div>
          </div>
        </section>

        {/* NEW SECTION — FEATURES & BENEFITS (exact from image) */}
        <section className="features-benefits-section">
          <div className="features-benefits-grid">
            {/* Features Column */}
            <div className="features-column">
              <h2>Features</h2>
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-icon">
                    <FaFileContract />
                  </div>
                  <span>Smart Contracts</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <FaCoins />
                  </div>
                  <span>DeFi Solutions</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <FaPalette />
                  </div>
                  <span>NFT Development</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <FaGlobe />
                  </div>
                  <span>Web3 Applications</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <FaCode />
                  </div>
                  <span>Token Development</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <FaHeadset />
                  </div>
                  <span>Blockchain Consulting</span>
                </div>
              </div>
            </div>

            {/* Benefits Column */}
            <div className="benefits-column">
              <h2>Benefits</h2>
              <div className="benefit-list">
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <FaShieldAlt />
                  </div>
                  <div className="benefit-text">
                    <h3>Secure transactions</h3>
                    <p>End-to-end encryption and immutable security</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <FaEye />
                  </div>
                  <div className="benefit-text">
                    <h3>Transparent operations</h3>
                    <p>Fully verifiable and auditable processes</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <FaNetworkWired />
                  </div>
                  <div className="benefit-text">
                    <h3>Decentralized architecture</h3>
                    <p>No single point of failure</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <FaArchive />
                  </div>
                  <div className="benefit-text">
                    <h3>Immutable records</h3>
                    <p>Permanent and tamper-proof data</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <FaDollarSign />
                  </div>
                  <div className="benefit-text">
                    <h3>Cost-effective solutions</h3>
                    <p>Reduce overhead and intermediary costs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= CSS (with new features/benefits section) ================= */}
      <style jsx>{`
        /* --- FULL SCREEN HERO - TOP 0, NO BORDER RADIUS, SPANS ENTIRE VIEWPORT --- */
        .hero-full {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(145deg, #0f0a1f, #0a0718);
          position: relative;
          display: flex;
          align-items: center;
          margin-top: 0;
          padding: 0 8%;
          color: white;
          overflow: hidden;
        }
        

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 70% 50%, rgba(123, 31, 162, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }

        .hero-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        .badge {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(4px);
          padding: 8px 22px;
          border-radius: 40px;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 1.5px;
          color: #e0b0ff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: inline-block;
          margin-bottom: 25px;
        }

        .hero-content h1 {
          font-size: 54px;
          line-height: 1.2;
          margin-bottom: 25px;
          color: white;
          text-shadow: 0 5px 20px rgba(0,0,0,0.3);
        }

        .hero-content h1 span {
          color: #d6b1ff;
          font-size: 44px;
          display: block;
          margin-top: 10px;
          font-weight: 500;
        }

        .hero-content p {
          color: rgba(255, 255, 255, 0.85);
          max-width: 550px;
          font-size: 20px;
          margin-bottom: 35px;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
        }

        .btn-primary {
          background: linear-gradient(135deg, #7c3aed, #5b21b6);
          border: none;
          padding: 14px 38px;
          border-radius: 40px;
          font-weight: 600;
          font-size: 16px;
          color: white;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(124, 58, 237, 0.5);
          transition: 0.25s;
        }
        .btn-primary:hover {
          background: linear-gradient(135deg, #8b4aff, #6b2ec4);
          box-shadow: 0 12px 35px rgba(124, 58, 237, 0.7);
          transform: scale(1.02);
        }

        .btn-outline {
          border: 1.5px solid rgba(255, 255, 255, 0.5);
          background: transparent;
          color: white;
          padding: 14px 38px;
          border-radius: 40px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: 0.25s;
        }
        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: white;
          transform: scale(1.02);
        }

        .hero-image-wrapper {
          filter: drop-shadow(0 30px 40px rgba(0, 0, 0, 0.6));
          animation: float 6s ease-in-out infinite;
        }

        .hero-image {
          border-radius: 30px;
          transform: perspective(1000px) rotateY(-8deg) rotateX(3deg);
          transition: 0.5s;
          border: 3px solid rgba(255, 255, 255, 0.1);
        }
        .hero-image:hover {
          transform: perspective(1000px) rotateY(-4deg) rotateX(2deg) scale(1.03);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        /* --- MAIN CONTAINER (for rest of content) --- */
        .main-container {
          background: #f4f5f7;
          color: #2d2d2d;
          padding: 100px 8% 80px;
          font-family: "Segoe UI", sans-serif;
        }

        /* --- WHY SECTION (cards with hover gradient) --- */
        .why-section {
          text-align: center;
          margin-bottom: 120px;
        }

        .why-section h2 {
          font-size: 48px;
          margin-bottom: 15px;
          color: #1f1f1f;
        }

        .section-sub {
          color: #6b7280;
          max-width: 650px;
          margin: 0 auto;
          font-size: 18px;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 70px;
        }

        .card {
          background: white;
          padding: 45px 25px;
          border-radius: 28px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
          text-align: start !important;
          transition: 0.3s ease;
          border: 1px solid rgba(0,0,0,0.02);
        }

        .card:hover {
          background: linear-gradient(135deg, #6B1C95 0%, #5A1780 50%, #4A1266 100%);
          color: white;
          transform: translateY(-12px);
          box-shadow: 0 30px 50px rgba(90, 23, 128, 0.35);
        }

        .card:hover h3,
        .card:hover p {
          color: white;
        }

        .card:hover .icon-circle {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .icon-circle {
          background: rgba(124, 58, 237, 0.08);
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 32px;
          color: #7c3aed;
          margin: 0 auto 25px;
          transition: 0.2s;
        }

        .card h3 {
          margin-bottom: 15px;
          color: #1f1f1f;
          font-size: 24px;
        }
        .card p {
          color: #6b7280;
          line-height: 1.6;
          font-size: 16px;
        }

        /* --- MATTERS SECTION (exact from second image) --- */
        .matters-section {
          background: white;
          border-radius: 48px;
          padding: 70px 60px;
          margin-bottom: 80px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          gap: 60px;
        }

        .matters-header {
          flex: 1 1 320px;
        }

        .matters-header h2 {
          font-size: 48px;
          color: #1f1f1f;
          margin-bottom: 25px;
        }

        .matters-header p {
          color: #6b7280;
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 35px;
        }

        .matters-link {
          color: #7c3aed;
          font-weight: 700;
          font-size: 20px;
          text-decoration: none;
          border-bottom: 3px solid #7c3aed;
          padding-bottom: 6px;
          transition: 0.2s;
        }
        .matters-link:hover {
          color: #5b21b6;
          border-bottom-color: #5b21b6;
        }

        .matters-grid {
          flex: 2 1 550px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
          gap: 25px;
        }

        .matter-card {
          background: #f8f4ff;
          padding: 32px 24px;
          border-radius: 28px;
          border-left: 8px solid #7c3aed;
          transition: 0.25s;
          box-shadow: 0 8px 18px rgba(0,0,0,0.02);
        }

        .matter-card:hover {
          background: linear-gradient(135deg, #6B1C95 0%, #5A1780 50%, #4A1266 100%);
          border-left-color: white;
          transform: scale(1.03);
          box-shadow: 0 20px 35px rgba(90, 23, 128, 0.25);
        }

        .matter-card:hover h3,
        .matter-card:hover p {
          color: white;
        }

        .matter-card h3 {
          font-size: 24px;
          margin-bottom: 12px;
          color: #2d2d2d;
        }

        .matter-card p {
          color: #5a5a5a;
          margin: 0;
          line-height: 1.6;
          font-size: 16px;
        }

        /* --- NEW FEATURES & BENEFITS SECTION --- */
        .features-benefits-section {
          background: white;
          border-radius: 48px;
          padding: 70px 60px;
          margin-bottom: 80px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.04);
        }

        .features-benefits-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        /* Features Column */
        .features-column h2,
        .benefits-column h2 {
          font-size: 42px;
          color: #1f1f1f;
          margin-bottom: 40px;
          position: relative;
        }

        .features-column h2:after,
        .benefits-column h2:after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 0;
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #6B1C95, #4A1266);
          border-radius: 4px;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 18px 25px;
          background: #f8f4ff;
          border-radius: 20px;
          transition: 0.25s;
          border: 1px solid rgba(124, 58, 237, 0.1);
        }

        .feature-item:hover {
          background: linear-gradient(135deg, #6B1C95 0%, #5A1780 50%, #4A1266 100%);
          transform: translateX(8px);
          box-shadow: 0 15px 30px rgba(90, 23, 128, 0.25);
        }

        .feature-item:hover .feature-icon {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .feature-item:hover span {
          color: white;
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          background: rgba(124, 58, 237, 0.1);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          color: #7c3aed;
          transition: 0.2s;
        }

        .feature-item span {
          font-size: 18px;
          font-weight: 600;
          color: #2d2d2d;
          transition: 0.2s;
        }

        /* Benefits Column */
        .benefit-list {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .benefit-item {
          display: flex;
          gap: 20px;
          padding: 20px 25px;
          background: #f8f4ff;
          border-radius: 20px;
          transition: 0.25s;
          border: 1px solid rgba(124, 58, 237, 0.1);
        }

        .benefit-item:hover {
          background: linear-gradient(135deg, #6B1C95 0%, #5A1780 50%, #4A1266 100%);
          transform: translateX(8px);
          box-shadow: 0 15px 30px rgba(90, 23, 128, 0.25);
        }

        .benefit-item:hover .benefit-icon {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .benefit-item:hover .benefit-text h3,
        .benefit-item:hover .benefit-text p {
          color: white;
        }

        .benefit-icon {
          width: 60px;
          height: 60px;
          background: rgba(124, 58, 237, 0.1);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          color: #7c3aed;
          transition: 0.2s;
          flex-shrink: 0;
        }

        .benefit-text h3 {
          font-size: 20px;
          font-weight: 700;
          color: #2d2d2d;
          margin-bottom: 6px;
          transition: 0.2s;
        }

        .benefit-text p {
          font-size: 15px;
          color: #6b7280;
          margin: 0;
          line-height: 1.5;
          transition: 0.2s;
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 1200px) {
          .hero-container {
            flex-direction: column;
            text-align: center;
            padding: 60px 0;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-content p {
            text-align: center;
          }
          .hero-image-wrapper {
            margin-top: 50px;
          }
          .card-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .features-benefits-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
        }

        @media (max-width: 900px) {
          .matters-section {
            flex-direction: column;
            padding: 50px 30px;
          }
          .features-benefits-section {
            padding: 50px 30px;
          }
        }

        @media (max-width: 700px) {
          .hero-content h1 {
            font-size: 42px;
          }
          .hero-content h1 span {
            font-size: 32px;
          }
          .card-grid,
          .matters-grid {
            grid-template-columns: 1fr;
          }
          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }
          .btn-primary, .btn-outline {
            width: 100%;
          }
          .feature-item {
            padding: 15px 20px;
          }
          .benefit-item {
            padding: 18px 20px;
          }
          .features-column h2,
          .benefits-column h2 {
            font-size: 36px;
          }
        }
      `}</style>

      <Footer />
    </>
  );
}