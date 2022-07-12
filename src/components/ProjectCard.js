import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, githuburl, siteurl, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h3>{title}</h3>
          <span>{description}</span>
        <h4><a href={githuburl}><button>Visit Github</button></a></h4>
        <h4><a href={siteurl}><button>Visit Site</button></a></h4>
        </div>
      </div>
    </Col>
  )
}
