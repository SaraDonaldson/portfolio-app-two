import { React, useState } from "react";
import "./projectsSummary.css";
import ProjectsSummaryCard from "./ProjectsSummaryCard";
import eventCardImage from "../Images/eventMatePreview.png";
import potat from "../Images/WeatherPreview.png";
import sudoku from "../Images/SudokuPreview.png";
import moodBoard from "../Images/MoodBoardPreview.png";
import DetailsModal from "./DetailsModal";
import EventBanner from "../Images/EventBanner.png";
import SudokuBanner from "../Images/SudokuBanner.png";
import MoodBoardBanner from "../Images/MoodboardBanner.png";
import WeatherBanner from "../Images/WeatherBanner.png";

function ProjectsSummary() {
  let [activeDataIndex, setActiveDataIndex] = useState(0);
  let [openModal, setOpenModal] = useState(false);

  let eventProjectName = "Event Mate";
  let sudokuName = "Sudoku";
  let moodBoardName = "Mood Board Maker";
  let weatherAppName = "Weather App";

  const projectDataArray = [
        { 
            bannerImage: EventBanner, 
            title: "Event Mate" ,
            introText:"Made with MUI, React, Ticketmaster API, Google API, Express.js and SQL. Ever been dying to go to an event, but none of your mates want to go? Event mate will match you with other users who want to go to the same events. Originally a group project, which is the repo linked below. The demo is a lite version of the event search feature and is coming soon.",
            githubLinkOne: "https://github.com/CodeOp-tech/final-project-FS23-EventMate",
            demoLinkOne: ""

        },

        {
            bannerImage: SudokuBanner,
             title: "Sudoku",
             introText:"Using React in the front end and Express and SQL in the back. The full app hasn't been deployed yet, but a lite front end demo version is available below.",
             githubLinkOne: "https://github.com/SaraDonaldson/portfolio-sudoku",
             demoLinkOne: "https://saradonaldson.github.io/portfolio-sudoku/"
        },
        {
            bannerImage:WeatherBanner,
            title: "Weather",
            introText: "Using the Open Weather API and React. Responsive conditional CSS, HTML, JavaScript.",
            githubLinkOne: "https://github.com/SaraDonaldson/portfolio-weather",
            demoLinkOne: "https://saradonaldson.github.io/portfolio-weather/",
        },

        {
            bannerImage: MoodBoardBanner,
            title: "Mood Board",
            introText: "Made with React JS. Add, resize and drag picture and text elements onto your mood board. Save your boards to view later. The original project code is available to view. A lite demo version is coming soon. ",
            githubLinkOne: "https://github.com/SaraDonaldson/mvp_moodboard",
            demoLinkOne: ""

        },
  ];

  function handleProjectModal(contentIndex) {
    console.log(contentIndex);
    setActiveDataIndex(contentIndex);
    setOpenModal(true);
  }

  return (
    <div className="projects-section">
      <div className="projects-head">
        <h1 className="projects-title">My Projects</h1>
      </div>

      <div className="projects-cards-container">
        <div className="projects-cards-grid">
          <ProjectsSummaryCard
            projectImage={eventCardImage}
            projectName={eventProjectName}
            handleProjectModal={handleProjectModal}
            modalContentIndex={0}
          />

          <ProjectsSummaryCard
            projectImage={sudoku}
            projectName={sudokuName}
            handleProjectModal={handleProjectModal}
            modalContentIndex={1}
          />

          <ProjectsSummaryCard
            projectImage={potat}
            projectName={weatherAppName}
            handleProjectModal={handleProjectModal}
            modalContentIndex={2}
          />

          <ProjectsSummaryCard
            projectImage={moodBoard}
            projectName={moodBoardName}
            handleProjectModal={handleProjectModal}
            modalContentIndex={3}
          />
        </div>
      </div>

      {openModal && (
        <div>
          <DetailsModal
            projectDataArray={projectDataArray}
            activeDataIndex={activeDataIndex}
            setActiveDataIndex={setActiveDataIndex}
            trigger={openModal}
            setTrigger={setOpenModal}
          />
        </div>
      )}
    </div>
  );
}

export default ProjectsSummary;
