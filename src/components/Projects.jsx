import React from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  Card,
  CardText,
} from "react-mdl";
import { useState } from "react";
import "../container/App.css";

function Projects() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (tabId) => {
    setActiveTab(tabId);
  };

  const toggle = () => {
    if (activeTab === 0) {
      return (
       
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "175px",
                background:
                  "url(https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png) center / cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex modi
              cumque eum, totam non molestias cum repellendus rem tempore ipsum
              obcaecati reiciendis autem distinctio praesentium? Delectus
              deleniti possimus suscipit sequi!
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "175px",
                background:
                  "url(https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png) center / cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex modi
              cumque eum, totam non molestias cum repellendus rem tempore ipsum
              obcaecati reiciendis autem distinctio praesentium? Delectus
              deleniti possimus suscipit sequi!
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "175px",
                background:
                  "url(https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png) center / cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex modi
              cumque eum, totam non molestias cum repellendus rem tempore ipsum
              obcaecati reiciendis autem distinctio praesentium? Delectus
              deleniti possimus suscipit sequi!
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (activeTab === 1) {
      return (
        <div>
          <h1> This is MongoDb</h1>
        </div>
      );
    } else if (activeTab === 2) {
      return (
        <div>
          <h1> This is JQuery</h1>
        </div>
      );
    } else if (activeTab === 3) {
      return (
        <div>
          <h1> This is Express</h1>
        </div>
      );
    }
  };
  return (
    <div className="category-tabs">
      <Tabs activeTab={activeTab} onChange={handleChange} ripple>
        <Tab>React</Tab>
        <Tab>MongoDb</Tab>
        <Tab>JQuery</Tab>
        <Tab>Express</Tab>
      </Tabs>

     
        <Grid id="proGrid">
          <Cell col={12}>
            <div className="content">{toggle()}</div>
          </Cell>
        </Grid>

    </div>
    
  );
}

export default Projects;
