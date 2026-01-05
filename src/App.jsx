import './App.css'
import 'primeicons/primeicons.css';
import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
import { useEffect } from "react";


function App() {

useEffect(() => {
    const nameEl = document.querySelector(".name");
    if (!nameEl) return;

    nameEl.addEventListener("mousemove", (e) => {
      const rect = nameEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      nameEl.style.background = `radial-gradient(circle at ${x}px ${y}px,  rgb(79, 74, 74),rgb(134, 134, 183) 80%)`;
    });
  }, []);

  const skills = [
    { name: "JavaScript", icon:"./icons/java_script.png"},
    { name: "Java", icon: "./icons/java.png" },
    { name: "Python", icon: "./icons/python.png" },
    { name: "C#", icon: "./icons/csharp.png" },
    { name: "CSS", icon: "./icons/css_3.png" },
    { name: "HTML", icon: "./icons/html_5.png" },
    { name: "React", icon: "./icons/react.png" },
    { name: "Bootstrap", icon: "./icons/bootstrap.png" },
    { name: "MySQL", icon: "./icons/mysql.png" },
    { name: "SQL Server", icon: "./icons/mssql.png" },
    { name: "VS Code", icon: "./icons/vs_code.png" },
  ]

  const contact = [
    {name: "Whatsapp", icon:"./icons/whatsapp.png"},
    {name: "Email",icon:"./icons/email.png"},
    {name: "Linkedin", icon:"./icons/linkedin.png"}
  ]

  const items = [
    { label: 'Portfolio', className: 'left-item'},
    { label: 'Home', url:'#home' },
    { label: 'Skills', url:'#skills' },
    { label: 'Projects',url:'#project' },
    { label: 'Contact',url:'#contact' }
  ]

  const resume = (
    <div className="button">
       <a href="/Tee Yong Shiun Resume.pdf" download>
      <Button icon="pi pi-download" label="Download resume" />
      </a>
    </div>
  )

  return (
    <>

      <div className='nav'>
        <Menubar model={items} end={resume}  className='menubar '/>
      </div>

      <section id='home'>
        <div className='home'>
          <div className='intro'>
            <p className='p1'>Hello, I am <span className="name">Tee Yong Shiun</span>.</p>
            <p className='p2'>Please to meet you, this is my portfolio website</p>
            <p className='p3'>I have put my work and skills here, check around if you will</p>
          </div>

          <div className='image'>
            <img src="/TheSonOfMan.jpg" alt="Tee Yong Shiun" style={{border:"green 5px solid" , marginLeft: "100px", width: "300px", height: "300px" ,borderRadius: "50%" }} />
          </div>
        </div>
      </section>

       <section id='skills'>
        <div className='skills'>
          <p className='p4'>Skills</p>
          <section className="skills-container">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-item hvr-float-shadow">
                <img src={skill.icon} alt={skill.name} />
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <section id='project'>
        <div style={{width:'100%', height:'600px'}}>
        </div>
      </section>

      <section id="contact">
        <div className="contact">
          <p className="p5">Get in touch</p>
          <p className="p6">Feel free to contact</p>
          <div className="contact-content">
            <div className="contact-list">
              {contact.map((item) => (
                <div key={item.name} className="contact-item">
                  <img src={item.icon} alt={item.name} className="contact-icon" />
                  <span className="contact-text">
                    {item.name === "Whatsapp" && "+60 12-345 6789"}
                    {item.name === "Email" && (
                      <a href="mailto:johntee2343@email.com" rel="noopener noreferrer">
                        johntee2343@gmail.com
                      </a>
                    )}
                    {item.name === "Linkedin" && (
                      <a href="https://www.linkedin.com/in/tee-yong-shiun-914b23346/" target="_blank" rel="noopener noreferrer">
                        Tee Yong Shiun
                      </a>
                    )}
                  </span>
                </div>
              ))}
            </div>

            <div className="contact-form-section">
              <form className="contact-form">
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
  )
}

export default App
