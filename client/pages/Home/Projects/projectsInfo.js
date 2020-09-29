import React from "react";

export default [
  {
    name: "Wakebird",
    description: (
      <>
        <p>
          A website for dragon boat team coaches to manage their teams with 70+
          users. The website allows coaches to create events and boat line-ups,
          manage their roster, view each individual's attendance, and much more.
          Team members can respond to events to let the coach know if they are
          attending, send emails to the team, receive reminders to respond to
          events, and much more.
        </p>
        <p>
          Wakebird was developed with a teammate from my dragon boat team. We
          have routine video conferences to plan sprints and discuss future
          plans. We review each other's PRs to maintain a high standard of code
          quality. This experience has pushed me to write better code, exposed
          me to new technologies, and improved my communication skills, and
          helped my ability to read and comprehend others{"'"} code.
        </p>
        <p>Currently, we are looking to expand our user base for 2021.</p>
      </>
    ),
    githubURL: null,
    demoURL: null,
    videoURL: null,
    startDate: null,
    endDate: null,
    technologies: [],
  },
  {
    name: "HTTP Server",
    description: (
      <>
        <p>
          Started at 8th Light, I have created a Java server from scratch. Since
          leaving 8th Light, I have been having weekly meetings with my mentors,
          who have acted as stakeholders and guided me on this project.
        </p>
        <p>
          The server can handle multiple HTTP request methods (GET, POST, PUT,
          DELETE) on different routes. It has a few pages as well as API end
          points. The page will serve up HTML and CSS files, while certain API
          endpoints can handle images.
        </p>
        <p>
          In addition to support from my mentors, I have looked into other
          server libraries, such as Express.js, to understand how others have
          tackled this challenge. This has given me a deeper understanding of
          the HTTP protocol, improved my proficiency in Java, and improved my
          ability to write programs with TDD.
        </p>
      </>
    ),
    githubURL: "https://github.com/k3ntako/HTTPServer",
    demoURL: "http://www.httpserver.k3ntako.com",
    videoURL: null,
    startDate: null,
    endDate: null,
    technologies: [],
  },
  {
    name: "Split-It",
    description: (
      <>
        <p>
          Split-It is an expense sharing CLI app inspired by Splitwise. It
          allows multiple people to track their expenses and calculate how much
          people owe each other.
        </p>
        <p>
          This was built at 8th Light as a part of the apprenticeship program.
          Typescript was an introduction to statically typed languages.
        </p>
      </>
    ),
    githubURL: "https://github.com/k3ntako/split-it",
    demoURL: null,
    videoURL: null,
    startDate: null,
    endDate: null,
    technologies: [],
  },
  {
    name: "Manabu",
    description: (
      <>
        <p>
          Manabu brings students’ studying needs into one place. It allows users
          to create flashcards, take notes, and set reminders. Additionally, the
          homepage offers the user upcoming reminders, the weather, and current
          news.
        </p>
        <p>This was built as my final project at Launch Academy.</p>
      </>
    ),
    githubURL: "https://github.com/k3ntako/Manabu",
    demoURL: "https://www.manabu.page",
    videoURL: null,
    startDate: null,
    endDate: null,
    technologies: [],
  },
  {
    name: "GameExploder",
    description: (
      <>
        <p>
          A website for discovering and reviewing video games. The goal was to
          help users make purchasing decisions and allow them to share their
          experiences.
        </p>
        <p>
          This was built with three other contributors as a part of Launch
          Academy's group project.
        </p>
      </>
    ),
    githubURL: "https://github.com/k3ntako/game-exploder",
    demoURL: "http://gameexploder.com",
    videoURL: null,
    startDate: null,
    endDate: null,
    technologies: [],
  },
  {
    name: "5th Dimension",
    description: (
      <>
        <p>
          5th Dimension uses the Google Books API to allow users to search for
          books. A user can view relevant information about each book, such as
          title, author, book cover, and a link to Google Books. The homepage
          offers users the top six books from the fiction New York Times Best
          Sellers list as inspiration. The user can activate dark mode from the
          nav bar for viewing at night, and localstorage caching reduces the
          number of calls to the NYTimes API.
        </p>
      </>
    ),
    githubURL: "https://github.com/k3ntako/5th-Dimension",
    demoURL: "https://fifth-dimension.herokuapp.com/search",
    videoURL: null,
    startDate: null,
    endDate: null,
    technologies: [],
  },
  {
    name: "5th Dimension CLI",
    description: (
      <>
        <p>
          This is a follow up to 5th Dimension, and allows the user to search
          and favorite Books from the Google Books API. The CLI interface
          challenged me to make different considerations.
        </p>
      </>
    ),
    githubURL: "https://github.com/k3ntako/5th-Dimension-CLI",
    demoURL: null,
    videoURL: null,
    startDate: null,
    endDate: null,
    technologies: [],
  },
  {
    name: "Clash Royale Elixir Counter",
    description: (
      <>
        <p>
          Clash Royale is a mobile real-time strategy game where players battle
          by playing cards with differing elixir costs. This website keeps track
          of the opponent's elixir count and the cards played to gain an
          advantage.
        </p>
        <p>
          I created this website to learn about{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">
            web components
          </a>{" "}
          and challenged myself to create a website without libraries like
          React, Angular and Vue. In addition to learning how to create web
          components, the process introduced new concepts such as the Shadow DOM
          and I familiarized myself with Selenium testing.
        </p>
        <p>
          Here is why someone might want to use this. Every few seconds, each
          player will gain an elixir that they can use to play a card. If a
          player knows that the opponent is low on elixir, the opponent might
          not be able counter a large attack.
        </p>
        <p>
          Because an API that this website depended was shutdown in early 2020,
          this website no longer functions as intended.
        </p>
      </>
    ),
    githubURL: "https://github.com/k3ntako/Clash-Royale-Elixir-Counter",
    demoURL: null,
    videoURL: null,
    vimeoVideoURL: "https://player.vimeo.com/video/381713144",
    startDate: null,
    endDate: null,
    technologies: [],
  },
  {
    name: "CafeTako",
    description: (
      <>
        <p>
          A website for finding and reviewing the best (or worst) cafes for
          studying. I noticed that neither Google nor Yelp offered consistent
          data on whether a cafe was suitable for doing work. A user can search
          for the cafes near them in our database and their results will be
          displayed on Google Maps. Currently, I have scrapped data for
          Starbucks around NYC and they can be reviewed.
        </p>
        <p>
          This project is currently in development, and there are areas needing
          improvement.
        </p>
      </>
    ),
    githubURL: "https://github.com/k3ntako/CafeTako",
    demoURL: "https://cafetako.herokuapp.com",
    videoURL: null,
    startDate: null,
    endDate: null,
    technologies: [],
  },
];
