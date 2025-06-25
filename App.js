import React, { useState } from 'react';
import './App.css';
import profileImg from './assets/sparkdenz.png';
import revoIcon from './assets/sparkdenz.png';
import uniIcon from './assets/sparkdenz.png';

function App() {
  const [activeImage, setActiveImage] = useState(null);

  const images = [
    { id: 1, src: '/assets/sparkdenz.png', title: 'Campaign 1' },
    { id: 2, src: '/assets/sparkdenz.png', title: 'Campaign 2' },
    { id: 3, src: '/assets/Pancakeswap Clone Script Development!!.png', title: 'Campaign 3' },
    { id: 4, src: '/assets/sparkdenz.png', title: 'Campaign 4' },
  ];

  return (
    <div className="container">
      <aside className="sidebar">
        <img src={profileImg} alt="Sivaprasad" className="profile-img" />
        <h1>Sivaprasad</h1>
        <p>Digital Marketing Executive | SEO Specialist</p>
        <div className="social-icons">
          <a href="https://linkedin.com/in/sivaprasad-m" target="_blank" rel="noopener noreferrer">🔗</a>
          <a href="mailto:sivaprasadm203@gmail.com">📧</a>
        </div>
        <div className="contact-info">
          <div>📱 +91 7418725336</div>
          <div>📧 sivaprasadm203@gmail.com</div>
          <div>📍 Tamil Nadu, India</div>
        </div>
        <a className="download-btn" href="#" download>📄 Download Resume</a>
      </aside>

      <main className="content">
        <section className="about">
          <h2>About Me</h2>
          <p>
            Detail-oriented SEO Specialist with 1+ year of hands-on experience in eCommerce SEO, keyword research,
            content optimization, and analytics. Adept with tools like Ahrefs, GA4, SEMrush, and Shopify SEO.
            Passionate about growing brands with ethical strategies and data-driven decisions.
          </p>
        </section>

        <section className="skills-icons">
          <h2>Skills</h2>
          <p>My skills range from performance marketing, SEO, social media, and creative design tools.</p>
          <div className="skills-grid">
            <div>Facebook Ads</div>
            <div>Search Engine Marketing</div>
            <div>Google Analytics</div>
            <div>Social Media Marketing</div>
            <div>Search Engine Optimization</div>
            <div>Content Marketing</div>
            <div>Illustrator</div>
            <div>InDesign</div>
            <div>Photoshop</div>
            <div>Google Data Studio</div>
            <div>Canva</div>
          </div>
        </section>

        <section className="experience-section">
          <h2>Professional Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>Beleaf Technologies – Digital Marketing Executive</h3>
              <span>June 2024 – Present</span>
              <ul>
                <li>Conducted SEO audits and fixed technical SEO issues on Shopify sites.</li>
                <li>Improved SERP rankings using schema markups and backlink outreach.</li>
                <li>Utilized GA4, GSC, Ahrefs for SEO tracking and reporting.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="education-bg">
          <h2>Educational Background</h2>
          <div className="edu-card">
            <img src={uniIcon} alt="University Logo" />
            <div>
              <h3>B.Sc. in Architecture, ITB (2011–2015)</h3>
              <p>Developed empathy to design spaces that solve problems. Led as Head of Design in student events.</p>
            </div>
          </div>
          <div className="edu-card">
            <img src={revoIcon} alt="Revo Logo" />
            <div>
              <h3>Full Stack Digital Marketing, Revo (2021)</h3>
              <p>Completed 100+ hours & 20+ assignments including Facebook Ads, SEO, Google Ads. Top 1 in assignments.</p>
            </div>
          </div>
        </section>

        <div className="project-card">
          <h3>Naturewash – SEO Article Optimization</h3>
          <ul className="project-list">
            <li>Performed keyword research and competitive analysis.</li>
            <li>Used schema markups to improve visibility (FAQ, Product).</li>
            <li>Achieved Top 3 SERP position for key terms like “essential oils for laundry”.</li>
          </ul>
          <button
            className="toggle-btn"
            onClick={() => {
              const iframe = document.getElementById("seo-sheet");
              iframe.style.display = iframe.style.display === "none" ? "block" : "none";
            }}
          >
            Toggle Report
          </button>
          <div className="spreadsheet-container" id="seo-sheet" style={{ display: 'none' }}>
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTQWryb_o4CFqq00fPIVH0s6ml2C-2Qj5sThvV6msaRmd3IWR6JE7ucJYaGE3HI8DP6MfJASeMrHEoR/pubhtml"
              width="100%"
              height="400"
              title="SEO Spreadsheet"
            ></iframe>
          </div>
        </div>

        <section className="boxx-section">
  <h2>Featured Work</h2>
  <div className="boxx-grid">

    {/* Card 1 */}
    <div className="boxx-card" style={{ position: 'relative', paddingTop: '56.25%', height: 0 }}>
      <iframe
        loading="lazy"
        src="https://www.canva.com/design/DAGqlQ2XBIs/Bps_VD2Sd7TrTLLvsIBh3A/view?embed"
        allow="fullscreen"
        title="Canva Design – Brand Kit"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          border: 'none',
          padding: 0,
          margin: 0,
        }}
      ></iframe>
    </div>
  

    {/* Card 2 */}
    <div className="boxx-card" style={{ position: 'relative', paddingTop: '56.25%', height: 0 }}>
      <iframe
        loading="lazy"
        src="https://www.canva.com/design/DAGnBhLOWVY/MxY5xmMtAraLCnIha0UaZw/view?embed"
        allow="fullscreen"
        title="Canva Design – Portfolio Showcase"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          border: 'none',
          padding: 0,
          margin: 0,
        }}
      ></iframe>
    </div>
   

    {/* Card 3 */}
    <div className="boxx-card" style={{ position: 'relative', paddingTop: '56.25%', height: 0 }}>
      <iframe
        loading="lazy"
        src="https://www.canva.com/design/DAGfDSnUS1U/GmfZHco9rW50ErCBaubqsQ/view?embed" 
        allow="fullscreen"
        title="Canva Design – Social Media Templates"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          border: 'none',
          padding: 0,
          margin: 0,
        }}
      ></iframe>
    </div>
    

    {/* Card 4 */}
    <div className="boxx-card" style={{ position: 'relative', paddingTop: '56.25%', height: 0 }}>
      <iframe
        loading="lazy"
        src="https://www.canva.com/design/DAGj78anCsU/sYtnHzc2gEd3E4LvSKppHg/view?embed"
        allow="fullscreen"
        title="Canva Design – Business Proposal"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          border: 'none',
          padding: 0,
          margin: 0,
        }}
      ></iframe>
          </div>

           <div className="boxx-card" style={{ position: 'relative', paddingTop: '56.25%', height: 0 }}>
      <iframe
        loading="lazy"
        src="https://www.canva.com/design/DAGczoRHHgA/h4ZgYA_YyuTWbgOoABZmcw/view?embed" 
        allow="fullscreen"
        title="Canva Design – Social Media Templates"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          border: 'none',
          padding: 0,
          margin: 0,
        }}
      ></iframe>
          </div>
          
           <div className="boxx-card" style={{ position: 'relative', paddingTop: '56.25%', height: 0 }}>
      <iframe
        loading="lazy"
        src="https://www.canva.com/design/DAGoJktjwhI/r3HtL1xv_UsKhEL9JfUiBg/view?embed" 
        allow="fullscreen"
        title="Canva Design – Social Media Templates"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          border: 'none',
          padding: 0,
          margin: 0,
        }}
      ></iframe>
    </div>
          
  

        </div>
        <a
    href="https://medium.com/@yourusername"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-block',
      marginTop: '10px',
      padding: '10px 15px',
      backgroundColor: '#00ab6c',
      color: '#fff',
      borderRadius: '6px',
      textDecoration: 'none'
    }}
  >
    Visit My Medium Profile →
  </a>
</section>

        <section className="cards-section">
          <div className="cards-row">
            {[
              { title: 'Crypto Casino', url: 'https://bc-game-clone-script.blogspot.com/2025/06/trying-to-build-crypto-casino-heres.html' },
              { title: 'Crypto Algo Bot', url: 'https://cryptoalgobot.blogspot.com/2025/02/how-can-crypto-algo-trading-bot.html' },
              { title: 'AI for eCommerce', url: 'https://amazon-clone-development.blogspot.com/2025/03/how-ai-upgrade-your-e-commerce-business.html' },
              { title: 'Crypto Exchange Launch', url: 'https://crypto-exchange-devlopment.blogspot.com/2025/06/the-essential-checklist-for-launching.html' }
            ].map((item, i) => (
              <div className="card" key={i}>
                <iframe loading="lazy" src={item.url} allowFullScreen title={item.title}></iframe>
              </div>
            ))}
          </div>
          <a
            href="https://medium.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="medium-btn"
          >
            Visit My Medium Profile →
          </a>
        </section>

        <section className="image-showcase-section">
          <h2>Campaign Mockups</h2>
          <div className="image-showcase-container">
            <div className="stacked-images">
              {images.map((img, index) => (
                <img
                  key={img.id}
                  src={img.src}
                  alt={img.title}
                  className={`image-card image-${index + 1}`}
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>
          </div>
        </section>
<section class="seo-blog-section">
  <h2>Explore My Blog on SEO & Meta Services</h2>
  <p>I've created a website where I write insightful blogs related to SEO strategies, meta optimization tips, and digital visibility best practices.</p>
  <a href="https://spardenz.online" target="_blank" class="visit-blog-btn">Visit Blog</a>
</section>

        <footer>
          <p>📧 <a href="mailto:sivaprasadm203@gmail.com">sivaprasadm203@gmail.com</a> | 📞 +91 7418725336</p>
          <p>🔗 <a href="https://linkedin.com/in/sivaprasad-m" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </footer>
      </main>
    </div>
  );
}

export default App;
