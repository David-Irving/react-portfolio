import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/love-project.png";
import projImg2 from "../assets/img/pantry-recipes.png";
import projImg3 from "../assets/img/portfolio-1.png";
import projImg4 from "../assets/img/weather-dashboard.png";
import projImg5 from "../assets/img/password-generator.png";
import projImg6 from "../assets/img/code-quiz.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Love at First Flight",
      description: "Travel Blog with SVG map",
      githuburl: "https://github.com/BlueAndyN/LoveatFirstFlight",
      siteurl: "https://fathomless-cliffs-99430.herokuapp.com/",
      imgUrl: projImg1,
    },
    {
      title: "Pantry Recipe Project",
      description: "API Calls into local database",
      githuburl: "https://github.com/AuraFly/Pantry_Recipes",
      siteurl: "https://fathomless-cliffs-99430.herokuapp.com/",
      imgUrl: projImg2,
    },
    {
      title: "Initial Portfolio",
      description: "Intro to HTML and CSS",
      githuburl: "https://david-irving.github.io/Portfolio/",
      siteurl: "https://github.com/David-Irving/Portfolio",
      imgUrl: projImg3,
    },
  ];
  
  const projects2 = [
    {
      title: "Weather Dashboard",
      description: "API calls",
      githuburl: "https://david-irving.github.io/WeatherDashboard/",
      siteurl: "https://github.com/David-Irving/WeatherDashboard",
      imgUrl: projImg4,
    },
    {
      title: "Password Generator",
      description: "Understanding Random Numbers",
      githuburl: "https://david-irving.github.io/PasswordGen/",
      siteurl: "https://github.com/David-Irving/PasswordGen",
      imgUrl: projImg5,
    },
    {
      title: "Coding Quiz",
      description: "Learning JS basics",
      githuburl: "https://david-irving.github.io/CodeQuiz/",
      siteurl: "https://github.com/David-Irving/CodeQuiz",
      imgUrl: projImg6,
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Throughout my time in the coding bootcamp provided by the University of Denver, I have learned different aspects about web development. The below projects are just a sample of some of the things i have either built myself, or collaborated on a team with to build and deploy.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>As I continue to grow and develop my skills, more projects will be added to show how I can push the boundaries of what is expected.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="design"></img>
    </section>
  )
}
