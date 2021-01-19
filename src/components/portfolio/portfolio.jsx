import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./portfolio.scss";
//Assets
import Arrow from "../../assets/portfolio/arrow.svg";
import Preview1 from "../../assets/portfolio/project01/preview1.png";
import Preview2 from "../../assets/portfolio/project02/preview.png";
import Preview3 from "../../assets/portfolio/project03/preview.png";
import Preview4 from "../../assets/portfolio/project04/preview.png";
import Preview5 from "../../assets/portfolio/project05/preview.png";
import Preview6 from "../../assets/portfolio/project06/preview.png";
import Preview7 from "../../assets/portfolio/project07/preview.png";
import Preview8 from "../../assets/portfolio/project08/preview.png";


//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      projects: [
        {
          id: "1",
          preview: Preview1,
          
        },
        {
          id: "2",
          preview: Preview2,
          
        },
        {
          id: "3",
          preview: Preview3,
          
        },
        {
          id: "4",
          preview: Preview4,
          
        },
        {
          id: "5",
          preview: Preview5,
          
        },
        {
          id: "6",
          preview: Preview6,
          
        },
        {
          id: "7",
          preview: Preview7,
          
        },
        {
          id: "8",
          preview: Preview8,
          
        }
      ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
      pickedFilterDropdown: "NEWEST"
    };
  }

  // FIRST LOAD
  componentDidMount() {
    this.filterGallery("all");
  }

  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({ filterResult: result, pickedFilter: target, pickedFilterDropdown: "NEWEST" });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if(event) {
      this.setState({ filterMenuActive: true });
    }else {
      this.setState({ filterMenuActive: false });
    }
  }

  // FILTER DROP DOWN HANDLER
  

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <ProjectBox preview={project.preview} key={project.id} title={project.title} tag={project.tag} />
      ));
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    // PORTFOLIO FILTER DROPDOWN MENY RENDER
    let filterDroppDown = null;
    if(this.state.filterMenuActive) {
      filterDroppDown = (
        <div className="portfolio__filter-menu shadow">
          <p className="font12" onClick={() => this.filterDropDownHandler("NEWEST")}>
            NEWEST
          </p>
          <p className="font12" onClick={() => this.filterDropDownHandler("OLDEST")}>
            OLDEST
          </p>
        </div>
      );
    }

    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="AREA OF EXPERTISE." />

          <Masonry breakpointCols={portfolioBreakpoints} className="my-masonry-grid" columnClassName="mint__gallery">
            {projectsRender}
          </Masonry>
          <Row className="flex-center padding40">
            <Button label="HAVE WORK FOR US?" target={"contact"} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Portfolio;
