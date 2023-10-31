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
            bannerImage: SudokuBanner,
             title: "Sudoku",
             introText:"Play a sudoku game and check your answers. Made using React, Express and SQL.  A single game demo is live and playable. Just click the link to see it. A demo of the original full scale app is coming in November. Skills include: component architecture, raw CSS styling, state management, deployment, local storage.",
             githubLinkOne: "https://github.com/SaraDonaldson/portfolio-sudoku",
             demoLinkOne: "https://saradonaldson.github.io/portfolio-sudoku/"
        },
        {
            bannerImage:WeatherBanner,
            title: "Weather",
            introText: "Type in your location and see the current weather. Made using React.js and the Open Weather API. Click the link to see the live demo.  Skills include: consuming REST APIs, response handling, API authentication.",
            githubLinkOne: "https://github.com/SaraDonaldson/portfolio-weather",
            demoLinkOne: "https://saradonaldson.github.io/portfolio-weather/",
        },

        {
            bannerImage: MoodBoardBanner,
            title: "Mood Board",
            introText: "Create a mood board including pictures and text, with the ability to drag and resize items. Made using React, React Router, Express, SQL and React RND. Click the link to see an interactive front end only demo. The full version will be deployed in November 2023, but you can see the original repo. Skills include: Backend Routes, Database Schema design, API requests, middleware, response handling, state management, CSS styling, component and app architecture, collaboration.",
            githubLinkOne: "https://github.com/SaraDonaldson/mvp_moodboard",
            demoLinkOne: "https://saradonaldson.github.io/mood-board-demo/"

        },
        { 
          bannerImage: EventBanner, 
          title: "Event Mate" ,
          introText:"Find a friend to go to an event with you. Search events in your city and add them to your list to find others who also want to go. Match with these people and chat to decide if you'd like to go together. Made using React, Ticketmaster API, Google API, Express.js, MUI, SQL and web sockets. Click the link for a demo of the event search feature, or on checkout the code in the original repo for a view of the larger app. Skills include: backend routes, database schema design,  API requests and authentication, middleware, response handling, state management, CSS styling, component and app architecture, collaboration, continuous development.",
          githubLinkOne: "https://github.com/CodeOp-tech/final-project-FS23-EventMate",
          demoLinkOne: "https://saradonaldson.github.io/portfolio-events-search/"

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
            projectImage={sudoku}
            projectName={sudokuName}
            handleProjectModal={handleProjectModal}
            modalContentIndex={0}
          />

          <ProjectsSummaryCard
            projectImage={potat}
            projectName={weatherAppName}
            handleProjectModal={handleProjectModal}
            modalContentIndex={1}
          />

          <ProjectsSummaryCard
            projectImage={moodBoard}
            projectName={moodBoardName}
            handleProjectModal={handleProjectModal}
            modalContentIndex={2}
          />
            <ProjectsSummaryCard
            projectImage={eventCardImage}
            projectName={eventProjectName}
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
