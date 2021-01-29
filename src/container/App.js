import "./App.css";
import PortfolioHeader from "../components/PortfolioHeader";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "../components/Main.jsx";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

function App() {
  const picUrl = "https://github.com/arpita-sahakar/my-portfolio/blob/main/public/IMG_1925_cropped.jpg?raw=true";
  return (
    <div>
      <div>
        <div className="demo-big-content">
          <Layout>
            <Header
              className="header-color"
              title={
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  My Portfolio
                </Link>
              }
              scroll
            >
              <Nav />
            </Header>
            <Drawer
              title={
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  My Portfolio
                </Link>
              }
            >
              <Nav />
            </Drawer>

            <Content>
              <div className="page-content" />
              <Main pic={picUrl}/>
            </Content>
          </Layout>
        </div>
      </div>
    </div>
  );
}

export default App;
