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
          <h3>My skills range from performance marketing, SEO, social media, and creative design tools.</h3>
          <div className="skills-grid">
            <div>Search Engine Optimization</div>
            <div>Google Analytics</div>
            <div>Social Media Marketing</div>
            <div>Content Marketing</div>
            <div>Google Data Studio</div>
            <div>SEMrush,Ahrefs</div>
            <div>GSC,GTM</div>
           <div>Schema markups</div>
             <div>Meta Ads</div>
            <div>Goolge Ads</div>
            <div>Photoshop</div>
            <div>Canva</div>
          </div>
        </section>

        <section className="experience-section">
          
          <h2>Professional Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>Beleaf Technologies – Digital Marketing Executive</h3>
              <h4><span>June 2024 – Present</span></h4>
              
              <ul>
               <ul>
  <li>Performed comprehensive SEO audits for various websites, identifying and fixing critical technical SEO issues such as crawl errors, broken links, sitemap optimization, and improving page speed and mobile usability.</li> <br></br>
  <li>Enhanced website search visibility by implementing schema markup, structured data, and rich snippets, leading to better CTR on SERPs.</li><br></br>
  <li>Managed end-to-end SEO strategies including keyword research, on-page optimization, and off-page link-building campaigns through effective backlink outreach.</li><br></br>
  <li>Regularly monitored website performance and SEO health using GA4 (Google Analytics), Google Search Console (GSC), and Ahrefs, generating insightful reports to guide strategy improvements.</li><br></br>
  <li>Ran Google Ads (Search & Display) and Meta Ads (Facebook & Instagram) campaigns, optimizing them for better conversions and lower CPC, directly impacting lead generation.</li><br></br>
  <li>Collaborated with the content team to develop SEO-optimized blogs, landing pages, and product descriptions tailored for higher engagement and ranking.</li><br></br>
  <li>Increased organic traffic and domain authority by executing targeted link-building strategies and improving technical SEO factors.</li><br></br>
  <li>Conducted competitor analysis and market research to adapt strategies for outperforming competitors in search rankings.</li><br></br>
  <li>Tracked user behavior and website heatmaps using Microsoft Clarity to refine UX and improve conversion rates.</li><br></br>
  <li>Managed and executed email marketing campaigns using Mailchimp, achieving improved open rates and click-through rates.</li><br></br>
  <li>Played a key role in improving overall brand presence through consistent efforts across SEO, social media marketing, and paid campaigns.</li><br></br>
</ul>

              </ul>
            </div>
          </div>
        </section>

        <section className="education-bg">
          <h2>Educational Background</h2>
          <div className="edu-card">
            <img src={uniIcon} alt="University Logo" />
            <div>
              <h3>B.E. in Electronics and Communication Engineering (2019–2023)</h3>
              <p>PSNA College of Engineering and Technology – 80.1%</p>
            </div>
          </div>
          <div className="edu-card">
            <img src={revoIcon} alt="Revo Logo" />
            <div>
              <h3>HSC (Higher Secondary Certificate)(2018-2019)</h3>
              <p>SPM Oxford Matriculation Higher Secondary School – 60%</p>
            </div>
          </div>
        </section>

        <div className="project-card">
          <h3>SEO Work</h3>
          <ul className="project-list">
            
  <li>Performed keyword research and competitive analysis.</li>
  <li>Implemented schema markups (FAQ, Product) to improve search visibility.</li>
  <li>Achieved Top 3 SERP ranking for key terms like “essential oils for laundry”.</li>

         
          <h5>On-Page SEO Checking</h5>
<ul>
  <li>Check page titles, meta descriptions, and heading tags for proper SEO structure.</li>
  <li>Optimize URL structure, image alt tags, and internal linking.</li>
  <li>Ensure mobile responsiveness, page speed, and keyword placement in content.</li>
</ul>

<h5>Technical SEO Checking</h5>
<ul>
  <li>Verify sitemap.xml, robots.txt, and indexing status on Google Search Console.</li>
  <li>Fix crawl errors like 404 pages, broken links, and redirect issues.</li>
  <li>Check Core Web Vitals, HTTPS security, and structured data (schema markup).</li>
</ul>

<h5>Keyword Research</h5>
<ul>
  <li>Find primary, secondary, and long-tail keywords with good search volume.</li>
  <li>Analyze competitor keywords to discover ranking opportunities.</li>
  <li>Group keywords based on user intent — informational, navigational, or transactional.</li>
</ul>

<h5>Target Audience Analysis</h5>
<ul>
  <li>Identify audience demographics like location, age, and interests.</li>
  <li>Understand audience search intent and behavior patterns.</li>
  <li>Analyze competitors' audience engagement to refine targeting strategies.</li>
</ul>

<h5>Backlink Creation (Off-Page SEO)</h5>
<ul>
  <li>Build backlinks through guest posting, business listings, and directory submissions.</li>
  <li>Engage in forum participation, blog commenting, and social bookmarking.</li>
  <li>Track backlink quality using tools like Ahrefs to avoid spammy links.</li>
</ul>
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
