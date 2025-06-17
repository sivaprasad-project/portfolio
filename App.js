import React from 'react';
import './App.css';
import profileImg from './assets/sparkdenz.png';
import revoIcon from './assets/sparkdenz.png';
import uniIcon from './assets/sparkdenz.png';

function App() {
  return (
    <div className="container">
      {/* Intro Section */}
      <section className="intro">
        {/* <img src={profileImg} alt="Sivaprasad" className="profile-img" /> */}
        <h1>Sivaprasad</h1>
        <p>Digital Marketing Executive | SEO Specialist</p>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          Detail-oriented SEO Specialist with 1+ year of hands-on experience in eCommerce SEO, keyword research,
          content optimization, and analytics. Adept with tools like Ahrefs, GA4, SEMrush, and Shopify SEO. 
          Passionate about growing brands with ethical strategies and data-driven decisions.
        </p>
      </section>

      {/* Skills Section - Iconic */}
      <section className="skills-icons">
        <h2>Skills</h2>
        <p>My skills are ranging from performance marketing, SEO, social media management, and I am familiar with design-related tools and software.</p>
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

      {/* Experience Section */}
      <section className="experience">
        <h2>Experience</h2>
        <h3>Beleaf Technologies – Digital Marketing Executive</h3>
        <p><em>June 2024 – Present</em></p>
        <ul>
          <li>Conducted SEO audits and fixed technical SEO issues on Shopify sites.</li>
          <li>Improved SERP rankings using schema markups and backlink outreach.</li>
          <li>Utilized GA4, GSC, Ahrefs for SEO tracking and reporting.</li>
        </ul>
      </section>

      <section className="experience-section">
  <h2>Professional Experience</h2>
  <div className="timeline">
    <div className="timeline-item">
      <h3>Beleaf Technologies – Digital Marketing Executive</h3>
      <span>June 2024 – Present</span>
      <ul>
        <li>Conducted SEO audits, fixed technical SEO issues, and optimized eCommerce product pages across Shopify sites.</li>
        <li>Performed keyword research (short-tail, long-tail, LSI) and mapped content to user intent and funnel stages.</li>
        <li>Improved SERP visibility with schema markup (Product, FAQ, Review) and enhanced crawl/index performance.</li>
        <li>Led backlink outreach campaigns, monitored link quality, and followed white-hat practices to boost authority.</li>
        <li>Tracked performance via GA4, GSC, and Ahrefs; created monthly SEO reports to visualize ranking and traffic improvements.</li>
        <li>Collaborated cross-functionally with content, dev, and marketing teams to align SEO strategy with KPIs.</li>
        <li>Used Klaviyo insights and Google Merchant Center data to inform content personalization and structure.</li>
      </ul>
    </div>
  </div>
</section>
      {/* Educational Background */}
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
    <h2>SEO Work</h2>
<div className="project-card">
  <h3>Naturewash – SEO Article Optimization</h3>
  <ul>
    <li>Performed keyword research and competitive analysis.</li>
    <li>Used schema markups to improve visibility (FAQ, Product).</li>
    <li>Achieved Top 3 SERP position for key terms like “essential oils for laundry”.</li>
  </ul>
  <iframe
    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTQWryb_o4CFqq00fPIVH0s6ml2C-2Qj5sThvV6msaRmd3IWR6JE7ucJYaGE3HI8DP6MfJASeMrHEoR/pubhtml"
    width="100%"
    height="400"
    title="SEO Spreadsheet"
  ></iframe>
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





<section className="project-section">
        <h2>Content Marketing</h2>
        
  <div className="project-card">
    <h3>RevoU Assignment – Data-Driven Content Strategy</h3>
    <ul>
      <li>Ideated and published article: “Top Indonesian YouTubers Forecast 2022”.</li>
      <li>Collected and visualized Socialblade data to attract backlinks and traffic.</li>
      <li>Aligned topic with tech & education audiences for broader media coverage.</li>
          </ul>
          <div className="medium-profile-card" style={{
  border: '1px solid #eee',
  padding: '20px',
  borderRadius: '12px',
  maxWidth: '400px',
  backgroundColor: '#fafafa'
          }}>
            
  <img
    src="https://cdn-icons-png.flaticon.com/512/2111/2111505.png"
    alt="Medium Logo"
    style={{ width: '40px', marginBottom: '10px' }}
  />
  <h3 style={{ margin: '10px 0' }}>Read My Blogs on Medium</h3>
  <p style={{ fontSize: '15px', lineHeight: '1.5' }}>
    I regularly publish blogs on technology, digital strategy, crypto development, and more.
    Dive into insights, how-tos, and case studies crafted from real experience.
  </p>
 
</div>

        </div>
        <div className="boxx-grid">

    {/* Card 1 */}
    <div className="boxx-card" style={{ position: 'relative', paddingTop: '56.25%', height: 0 }}>
      <iframe
        loading="lazy"
        src="https://bc-game-clone-script.blogspot.com/2025/06/trying-to-build-crypto-casino-heres.html"
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
        src="https://cryptoalgobot.blogspot.com/2025/02/how-can-crypto-algo-trading-bot.html"
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
        src="https://amazon-clone-development.blogspot.com/2025/03/how-ai-upgrade-your-e-commerce-business.html"
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
        src="https://crypto-exchange-devlopment.blogspot.com/2025/06/the-essential-checklist-for-launching.html"
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
          }}>
          
          
    Visit My Medium Profile →
  </a>
</section>


      {/* Footer */}
      <footer>
        <p>📧 <a href="mailto:sivaprasadm203@gmail.com">sivaprasadm203@gmail.com</a> | 📞 +91 7418725336</p>
        <p>🔗 <a href="https://linkedin.com/in/sivaprasad-m" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </footer>
    </div>
  );
}

export default App;
