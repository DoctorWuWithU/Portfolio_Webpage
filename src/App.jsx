import './App.css';
import 'primeicons/primeicons.css';

import { useEffect } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import emailjs from 'emailjs-com';


const skills = [
  { name: 'JavaScript', icon: './icons/java_script.png' },
  { name: 'Java', icon: './icons/java.png' },
  { name: 'Python', icon: './icons/python.png' },
  { name: 'C#', icon: './icons/csharp.png' },
  { name: 'CSS', icon: './icons/css_3.png' },
  { name: 'HTML', icon: './icons/html_5.png' },
  { name: 'React', icon: './icons/react.png' },
  { name: 'Bootstrap', icon: './icons/bootstrap.png' },
  { name: 'MySQL', icon: './icons/mysql.png' },
  { name: 'SQL Server', icon: './icons/mssql.png' },
  { name: 'VS Code', icon: './icons/vs_code.png' },
];

const contacts = [
  { name: 'Whatsapp', icon: './icons/whatsapp.png' },
  { name: 'Email', icon: './icons/email.png' },
  { name: 'Linkedin', icon: './icons/linkedin.png' },
];

const menuItems = [
  { label: 'Portfolio', className: 'left-item' },
  { label: 'Home', url: '#home' },
  { label: 'Skills', url: '#skills' },
  { label: 'Projects', url: '#project' },
  { label: 'Contact', url: '#contact' },
];

function App() {

  useEffect(() => {
    const nameEl = document.querySelector('.name');
    if (!nameEl) return;

    const handleMouseMove = (e) => {
      const rect = nameEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      nameEl.style.background = `
        radial-gradient(
          circle at ${x}px ${y}px,
          rgb(79, 74, 74),
          rgb(134, 134, 183) 80%
        )
      `;
    };

    nameEl.addEventListener('mousemove', handleMouseMove);
    return () => nameEl.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_9g0l87s',
      'template_zpm9z9k',
      e.target,
      'n0T2RJuHNEULDRqfV'
    ).then(
      () => {
        alert('Message sent successfully!');
        e.target.reset();
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.error(error);
      }
    );
  };

  const resumeButton = (
    <div className="button">
      <a href="/Tee Yong Shiun Resume.pdf" download>
        <Button icon="pi pi-download" label="Download resume" />
      </a>
    </div>
  );


  return (
    <>
      <div className="nav">
        <Menubar model={menuItems} end={resumeButton} className="menubar" />
      </div>

      <section id="home">
        <div className="home">
          <div className="intro">
            <p className="p1">
              Hello, I am <span className="name">Tee Yong Shiun</span>.
            </p>
            <p className="p2">Pleased to meet you, this is my portfolio website</p>
            <p className="p3">I have put my work and skills here — feel free to explore</p>
          </div>

          <div className="image">
            <img
              src="/port_pfp.jpg"
              alt="Tee Yong Shiun"
              style={{
                width: '350px',
                height: '350px',
                marginLeft: '130px',
                borderRadius: '50%',
                border: '5px solid green',
                objectFit: 'cover',
                objectPosition: 'right',
              }}
            />
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="skills">
          <p className="p4">Skills</p>

          <div className="skills-container">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-item hvr-float-shadow">
                <img src={skill.icon} alt={skill.name} />
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="project">
        <p className='p7'>Projects</p>

        <div className="container">
          {[
            { img: './Todolist.png', title: 'To Do List', tech: '(Python / JSON)' },
            { img: './Pdfmaker.png', title: 'PDF Maker', tech: '(Python)' },
            { img: './FinanceTracker.png', title: 'Finance Tracker', tech: '(Python / Pandas / Matplotlib)' },
            { img: './StudentInfo.png', title: 'Student Info Tracker', tech: '(Java / MySQL)' },
            { img: './Unit.png', title: 'Unit Converter', tech: '(React / JavaScript)' },
          ].map((project) => (
            <div key={project.title} className="card">
              <div className="slide slide1">
                <div className="content">
                  <div className="icon">
                    <img src={project.img} alt={project.title} />
                  </div>
                </div>
              </div>

              <a href={project.img} target="_blank" rel="noopener noreferrer">
                <div className="slide slide2">
                  <div className="content">
                    <h3>{project.title}</h3>
                    <p>{project.tech}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <div className="contact">
          <p className="p5">Get in touch</p>
          <p className="p6">Feel free to contact me</p>

          <div className="contact-content">
            
            <div className="contact-list">
              {contacts.map((item) => (
                <div key={item.name} className="contact-item">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="contact-icon"
                  />

                  <span className="contact-text">
                    {item.name === 'Whatsapp' && '+60 16-321 3201'}

                    {item.name === 'Email' && (
                      <a href="mailto:johntee2343@gmail.com">
                        johntee2343@gmail.com
                      </a>
                    )}

                    {item.name === 'Linkedin' && (
                      <a
                        href="https://www.linkedin.com/in/tee-yong-shiun-914b23346/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tee Yong Shiun
                      </a>
                    )}
                  </span>
                </div>
              ))}
            </div>

            <div className="contact-form-section">
              <form className="contact-form" onSubmit={sendEmail}>
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    placeholder="Moblie No."
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message here"
                    rows="6"
                    required
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 Tee Yong Shiun. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
