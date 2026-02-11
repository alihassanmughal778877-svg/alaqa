"use client";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaLock, FaNetworkWired, FaEye, FaBolt } from "react-icons/fa";

export default function BlockchainPage() {
  return (
    <>
      <Header />

      <div className="main-container">
        {/* HERO */}
        <section className="hero mt-5">
          <div className="hero-left">
            
            <h1>
              Unleashing the Power <br />
              of <span>Blockchain</span>
            </h1>
            <p>
              Transforming industries with secure, decentralized, and transparent
              technology.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">
                Get Started with Blockchain
              </button>
              <button className="btn-outline">
                Learn More About Us
              </button>
            </div>
          </div>

          <div className="hero-right">
            <Image
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a"
              alt="blockchain"
              width={500}
              height={500}
              className="hero-image"
            />
          </div>
        </section>

        {/* WHY BLOCKCHAIN */}
        <section className="why-section">
          <h2>Why Blockchain?</h2>
          <p>
            Blockchain technology ensures security, transparency, and efficiency
            across digital systems.
          </p>

          <div className="card-grid">
            <div className="card">
              <div className="icon-circle">
                <FaNetworkWired />
              </div>
              <h3>Decentralization</h3>
              <p>Eliminates intermediaries and distributes control.</p>
            </div>

            <div className="card">
              <div className="icon-circle">
                <FaLock />
              </div>
              <h3>Security</h3>
              <p>Advanced encryption protects your transactions.</p>
            </div>

            <div className="card">
              <div className="icon-circle">
                <FaEye />
              </div>
              <h3>Transparency</h3>
              <p>All transactions are visible and verifiable.</p>
            </div>

            <div className="card">
              <div className="icon-circle">
                <FaBolt />
              </div>
              <h3>Efficiency</h3>
              <p>Smart contracts automate processes.</p>
            </div>
          </div>
        </section>

        {/* MATTERS */}
        <section className="matters">
          <div className="matters-left">
            <h2>Why Blockchain Matters</h2>
            <p>
              Blockchain is reshaping industries by increasing trust, reducing
              fraud, and improving operational efficiency.
            </p>
            <button className="btn-primary">Read More</button>
          </div>

          <div className="matters-right">
            <Image
              src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9"
              alt="network"
              width={500}
              height={400}
              className="network-image"
            />
          </div>
        </section>

        {/* PRICING */}
        <section className="pricing">
          <h2>Pricing Plans</h2>
          <p>
            Choose a plan that fits your needs and scale with confidence.
          </p>

          <div className="pricing-grid">
            <div className="price-card">
              <h3>Starter Plan</h3>
              <h1>
                $199<span>/month</span>
              </h1>
            </div>

            <div className="price-card featured">
              <h3>Business Plan</h3>
              <h1>
                $349<span>/month</span>
              </h1>
            </div>

            <div className="price-card">
              <h3>Enterprise Plan</h3>
              <h1>
                $495<span>/month</span>
              </h1>
            </div>
          </div>
        </section>
      </div>
 {/* ================= CSS ================= */}
 <style jsx>{`
  .main-container {
    background: #f4f5f7;
    color: #2d2d2d;
    padding: 80px 8%;
    font-family: "Segoe UI", sans-serif;
  }

  h1 span {
    color: #6c2bd9;
  }

  .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 120px;
  }

  .hero-left h1 {
    font-size: 48px;
    margin-bottom: 20px;
    color: #1f1f1f;
  }

  .hero-left p {
    color: #6b7280;
    margin-bottom: 25px;
    max-width: 500px;
  }

  .hero-buttons {
    display: flex;
    gap: 15px;
  }

  .btn-primary {
    background: linear-gradient(135deg, #7c3aed, #5b21b6);
    border: none;
    padding: 12px 28px;
    border-radius: 30px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(124, 58, 237, 0.4);
  }

  .btn-outline {
    border: 1px solid #7c3aed;
    background: transparent;
    color: #7c3aed;
    padding: 12px 28px;
    border-radius: 30px;
    cursor: pointer;
  }

  .hero-image {
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(124, 58, 237, 0.3);
  }

  /* WHY SECTION */

  .why-section {
    text-align: center;
    margin-bottom: 120px;
  }

  .why-section h2 {
    font-size: 36px;
    margin-bottom: 10px;
    color: #1f1f1f;
  }

  .why-section p {
    color: #6b7280;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    margin-top: 50px;
  }

  .card {
    background: white;
    padding: 35px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: 0.3s;
  }

  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(124, 58, 237, 0.15);
  }

  .icon-circle {
    background: rgba(124, 58, 237, 0.1);
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 22px;
    color: #7c3aed;
    margin: 0 auto 20px;
  }

  /* MATTERS SECTION */

  .matters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 120px;
  }

  .matters-left h2 {
    font-size: 36px;
    margin-bottom: 20px;
    color: #1f1f1f;
  }

  .matters-left p {
    color: #6b7280;
    margin-bottom: 20px;
  }

  .network-image {
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(124, 58, 237, 0.2);
  }

  /* PRICING */

  .pricing {
    text-align: center;
  }

  .pricing h2 {
    font-size: 36px;
    margin-bottom: 10px;
  }

  .pricing p {
    color: #6b7280;
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 50px;
  }

  .price-card {
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  }

  .price-card h1 {
    font-size: 36px;
    margin-top: 20px;
    color: #7c3aed;
  }

  .price-card span {
    font-size: 16px;
    color: #6b7280;
  }

  .featured {
    border: 2px solid #7c3aed;
    box-shadow: 0 20px 40px rgba(124, 58, 237, 0.2);
  }

  /* RESPONSIVE */

  @media (max-width: 992px) {
    .hero,
    .matters {
      flex-direction: column;
      text-align: center;
    }

    .card-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .pricing-grid {
      grid-template-columns: 1fr;
    }
  }
`}</style>
      <Footer />
    </>
  );
}
