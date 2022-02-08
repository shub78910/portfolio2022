import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service } from "./types";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA's using <b>HTML</b>, <b>CSS</b> and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about: "Build and handle API's, database, server using <b>ExpressJS</b>",
  },
  {
    Icon: AiOutlineApi,
    title: "Internship",
    about:
      "Currently interning at a company based in Pune as a <b>software developer intern.</b>",
  },
  {
    Icon: MdDeveloperMode,
    title: "Read and host reading sessions",
    about:
      "I like to read and therefore have been hosting reading sessions on a discord server.",
  },
];

export const projects: IProject[] = [
  {
    name: "devPlays",
    description:
      "A video library app with almost all features from YouTube. Uses the MERN stack, JWT based auth and bcrypt for password encryption.",
    image_path: "/assets/devplays.png",
    deployed_url: "https://devplays-shub78910.herokuapp.com",
    github_url: "https://github.com/shub78910/devPlays",
    key_techs: ["MongoDB", "Express", "Node", "ReactJS"],
  },
  {
    name: "Chat app clone",
    image_path: "/assets/chat_app.png",
    deployed_url: "https://chat-app-clone-shub78910.web.app/",
    github_url: "https://github.com/shub78910/Chat-App-clone",
    description:
      "A web app where in a user can login through google and chat with people in already made communities.",
    key_techs: ["React", "Firebase"],
  },
  {
    name: "Shopping cart",
    image_path: "/assets/cart_redux.png",
    deployed_url: "https://redux-cart-shub78910.netlify.app/",
    github_url: "https://github.com/shub78910/cart-redux",
    description:
      "A shopping cart made with React. Built this extensively to get better with redux and state management. The cart also automatically applies discounts which are mentioned at the top.",
    key_techs: ["React", "Redux"],
  },

  {
    name: "Hangman",
    image_path: "/assets/hangman.png",
    deployed_url: "https://shub78910.github.io/Hangman/",
    github_url: "https://github.com/shub78910/Hangman",
    description:
      "This is tiny game built using React. The reason I built this game was to improve my logical thinking. Although looks pretty simple, but a learnt few really small yet significant things while building this one. Basically you have to guess the correct movie name, based on the hint given. Instructions to play the game are given too! Hope you have your movie library ready, cuz imma test it. Hop in to play the game!",
    key_techs: ["React"],
  },

  {
    name: "Flip the card memory game",
    image_path: "/assets/flip_card.png",
    deployed_url: "https://flip-card-memory-shub78910.netlify.app/",
    github_url: "https://github.com/shub78910/Flip-the-card-memory-game",
    description: "Flip the cards and try to match the cartoons!",
    key_techs: ["React"],
  },

  {
    name: "Music player",
    image_path: "/assets/music_player.png",
    deployed_url: "https://music-player-shub78910.netlify.app/",
    github_url: "https://github.com/shub78910/music-player",
    description:
      "A simple music player web app, which will play songs, which i've already feeded in them. Will try to add API to it soon. Right now, a basic music player with bare minimum features. Made to get more comfortable with Javascript and its operations.",
    key_techs: ["HTML", "CSS", "Javascript"],
  },

  {
    name: "Notes App",
    image_path: "/assets/make_notes.png",
    deployed_url: "https://make-notes-shub78910.netlify.app/",
    github_url: "https://github.com/shub78910/make-notes-app",
    description:
      "Ofcourse, one note making web app must be on a developer portfolio. So, here's the notes app, which lets you maintain your notes. All the data is saved in the local Storage and not on any other server. Few basic features to edit and delete. Made with the intention to learn and get familiar with localStorage.",
    key_techs: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "TicTacToe",
    image_path: "/assets/tictactoe.png",
    deployed_url: "https://lmm1x.csb.app/",
    github_url: "https://github.com/shub78910/TicTacToe-game",
    description:
      "No better way to get started with building logic, than to make small games with not much, but few edge cases here and there. Made with the intention of getting better with React hooks. Make sure you enter your and your names in the beginning.",
    key_techs: ["React"],
  },
];
