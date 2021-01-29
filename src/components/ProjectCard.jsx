import React from "react";
import {
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  Card,
  CardText,
} from "react-mdl";

function ProjectCard(props) {
  const handleClick = (url) => {
    window.open(url);
  };
  return (
    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
      <CardTitle
        style={{
          background: `url(${props.imageUrl}) center / cover`,
          height: "175px"
        }}
      >
        <div
          style={{
            color: "#fff",
            background: "black",
            fontWeight: "bolder",
          }}
        >
          {props.name}
        </div>
      </CardTitle>
      <CardText style={{ textAlign: "justify", textJustify: "inter-word" }}>
        {props.desc}
      </CardText>
      <CardActions border>
        <Button onClick={() => handleClick(props.githubUrl)} colored>
          GitHub
        </Button>
        <Button onClick={() => handleClick(props.liveUrl)} colored>
          LiveDemo
        </Button>
      </CardActions>
      <CardMenu style={{ color: "#fff" }}>
        <IconButton name="share" />
      </CardMenu>
    </Card>
  );
}

export default ProjectCard;
