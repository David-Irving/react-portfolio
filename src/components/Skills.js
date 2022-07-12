import business from "../assets/img/business-analysis.png";
import logistics from "../assets/img/logistics.webp";
import projectm from "../assets/img/projectmgmt.jpeg";
import webd from "../assets/img/webdevelopment.jpeg";
import html5 from "../assets/img/html5.jpeg";
import css from "../assets/img/css.jpeg";
import mongo from "../assets/img/mongo.jpeg";
import express from "../assets/img/express.png";
import react from "../assets/img/react.png";
import node from "../assets/img/node.webp";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Below are some of the skills I have gained through my career track and scholoraly efforts.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={projectm} alt="Project Management" />
                                <h5>Project Management</h5>
                            </div>
                            <div className="item">
                                <img src={logistics} alt="Logistics Management" />
                                <h5>Logistics</h5>
                            </div>
                            <div className="item">
                                <img src={business} alt="Business Analytics" />
                                <h5>Business Analytics</h5>
                            </div>
                            <div className="item">
                                <img src={webd} alt="Web Development" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={html5} alt="HTML" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="CSS" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={mongo} alt="Mongo" />
                                <h5>Mongo</h5>
                            </div>
                            <div className="item">
                                <img src={express} alt="Express" />
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="React" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Node" />
                                <h5>Node</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="design" />
    </section>
  )
}
