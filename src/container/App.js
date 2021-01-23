import "./App.css";
import PortfolioHeader from "../components/PortfolioHeader";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "../components/Main.jsx";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <div className="demo-big-content">
          <Layout>
            <Header className="header-color" title="Title" scroll>
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </div>
    </div>
  );
}

export default App;
