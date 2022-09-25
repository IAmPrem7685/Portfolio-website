import { Col } from "react-bootstrap";

export const SkillCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={9} sm={5} md={3}>
      <div className="skill-grid-item">
        <img src={imgUrl} />
      </div>
    </Col>
  );
};
