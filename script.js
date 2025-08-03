const pages = {

  about: `
    <h1>About Us</h1>
    <p>The Greenprint Initiative was founded to cultivate grassroots environmental literacy. We partner with schools, communities, and local leaders to bring green education to all.</p>
    <h2>The Problem</h2>
    <p><strong>The Climate Movement is Drowning in Data but Starving for Insight.</strong></p>
    <p>Environmental organizations and research labs are collecting more data than ever before. This information is vital, holding the keys to understanding pollution patterns, tracking corporate greenwashing, and designing effective policy. However, these groups often lack the time and resources to process and analyze this raw data, leaving its potential locked away in spreadsheets and on hard drives.</p>
    <p><strong>A Generation of Passionate Activists Lacks Technical Tools. </strong></p>
    <p>At the same time, a new generation is rising, deeply passionate about solving the climate crisis. They are ready to act, but their energy is often disconnected from the technical skills needed to make a data-driven case for change. There is a critical gap between good intentions and effective, evidence-based action.</p>
    <h2>Our Solution</h2>
    <p>The Greenprint Initiative bridges these gaps. We train high school and college students in the fundamentals of data science and the ethical use of modern AI tools. These trained student-led teams then partner with under-resourced environmental organizations, academic labs, and community groups to provide pro-bono data analysis, visualization, and storytelling services. We turn raw data into clear, compelling "intelligence briefings" that our partners can use to accelerate their work.

    <div class="dropdown-section">
      <h2>Our Core Values</h2>

      <div class="dropdown">
        <div class="drop-header">+ Data for Justice</div>
        <div class="dropdown-content">
          <p>We believe data is a tool to be wielded in service of the most affected communities, not just an abstract set of numbers.</p>
        </div>
      </div>
      <br>
      <div class="dropdown">
        <div class="drop-header">+ Empowerment through Education</div>
        <div class="dropdown-content">
          <p>Our primary product is not a chart; it's a skilled, confident, and ethically-minded young leader.</p>
        </div>
      </div>
      <br>
      <div class="dropdown">
        <div class="drop-header">+ Radical Collaboration</div>
        <div class="dropdown-content">
          <p>We partner with everyone—scientists, activists, artists, and community leaders—to achieve our mission.</p>
        </div>
      </div>
      <br>
      <div class="dropdown">
        <div class="drop-header">+ Open Knowledge</div>
        <div class="dropdown-content">
          <p>We are committed to making our tools, training, and findings accessible to all.</p>
        </div>
      </div>
    </div>
  `,
  ourstory: `
    <h1>Our Story</h1>
    <p>Greenprint may be new, but it is built on a decade of hands-on environmental outreach, technical education, and youth empowerment led by our founder. These experiences informed every piece of our approach—from how we design workshops to why we prioritize open data and radical collaboration.</p>
    <p>As an engineer, I've always been taught to look at systems. For years, I gave talks at schools across Massachusetts about climate change and technology. During those presentations, I saw a fundamental disconnect in our movement's system. I saw brilliant scientists publishing crucial data that few could access or understand. And in the audience, I saw passionate, determined students who were desperate to act but didn't have the technical tools to engage with that data.</p>
    <p>The Greenprint Initiative was founded to be the bridge between those two worlds. It was created from the simple belief that we have the data we need and we have the passionate people we need. We just need to connect them. Our mission is to build that connection—to translate raw data into human stories and to translate student passion into tangible, marketable skills.</p>

    <div class="video-section">
      <h2>Where It All Began</h2>
      <div class="video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TbxMDVp4wrQ" title="Author Talk on Microplastics" frameborder="0" allowfullscreen></iframe>
        <p><em>This author talk by the founder addressed the need for youth action in climate movements.</em></p>
      </div>
      <br>
      <div class="video-wrapper">
        <iframe width="315" height="560" src="https://www.youtube.com/embed/hsX_KkwIsvU" title="Museum of Science Feature on AI & Climate" frameborder="0" allowfullscreen></iframe>
        <p><em>Our founder shares how STEM and AI skills can empower student-led climate innovation—core to Greenprint’s educational mission.</em></p>
      </div>
    </div>

  `,
  getinvolved:  `
    <h1>Get Involved</h1>
    <p>Join our mission! We're always looking for passionate people to join the movement! You can participate in events, volunteer, or schedule a workshop in your community.</p>
    <section class="contact-form-section">
            <h2>Contact Us</h2>
            <form action="https://formspree.io/f/your_NEW_contact_form_id" method="POST">
                
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Your Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                
                <div class="form-group">
                    <label for="message">Your Message</label>
                    <textarea id="message" name="message" rows="6" required></textarea>
                </div>

                <button type="submit">Send Message</button>
            </form>
        </section>
  `
};

function navigate(page) {
  document.getElementById('content').innerHTML = pages[page] || pages.home;
}

window.onload = () => navigate('about');

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('drop-header')) {
    const parent = e.target.closest('.dropdown');
    parent.classList.toggle('open');
    const isOpen = parent.classList.contains('open');
    e.target.textContent = (isOpen ? '- ' : '+ ') + e.target.textContent.replace(/^[-+]\s*/, '');
  } else {
    document.querySelectorAll('.dropdown').forEach(d => {
      if (d.classList.contains('open')) {
        d.classList.remove('open');
        const header = d.querySelector('.drop-header');
        header.textContent = '+ ' + header.textContent.replace(/^[-+]\s*/, '');
      }
    });
  }
});
