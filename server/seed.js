const { models, sequelize } = require('./models');
const Project  =  models.Project;

const seedData = [
  {
    name: "Wakebird",
    description: "A website for dragon boat team coaches to manage their team. The website allows coaches to create events and boat line-ups, manage their roster, view each individual's attendance, and much more. A team member can respond to events to let the coach know if they are attending the event, send emails to the team, get reminders to respond to events and much more.\n\nWakebird was developed with a teammate from my dragon boat team. We have routine video conferences to discuss future plans. I review his PRs to assure prevent bugs and maintain a high standard of code quality. This experience has pushed me to write better code, exposed me to best new technologies, as well as improved my communication skills and my ability to read and comprehend others' code.",
    githubURL: "https://github.com/mighty-speed-krush/Mighty-Speed-Krush",
    demoURL: "https://vimeo.com/337669750",
    videoURL: null,
    startDate: null,
    endDate: null,
    technologies: []
  },{
    name: "CafeTako",
    description: "A website for finding and reviewing the best (or worst) cafes for studying. I noticed that neither Google nor Yelp offered consistent data on whether a cafe was suitable for doing work. Currently, I have scrapped data for Starbucks around NYC and they can be reviewed. This project is currently in development, and there are areas needing improvement.",
    githubURL: "https://github.com/k3ntako/CafeTako",
    demoURL: "https://cafetako.herokuapp.com",
    videoURL: null,
    startDate: null,
    endDate: null,
    technologies: []
  },{
    name: "Manabu",
    description: "Manabu tries to bring a students studying needs into one place. It allows users to create flashcards, take notes, and set reminders. Additionally, the homepage offers the user with the upcoming reminders, weather, and current news. This was built as my final project at Launch Academy.",
    githubURL: "https://github.com/k3ntako/Manabu",
    demoURL: "https://www.manabu.page",
    videoURL: null,
    startDate: null,
    endDate: null,
    technologies: []
  },{
    name: "GameExploder",
    description: "A website built to review video games. This was built with three other contributors as a part of Launch Academy's group project.",
    githubURL: "https://github.com/k3ntako/game-exploder",
    demoURL: "http://gameexploder.com",
    videoURL: null,
    startDate: null,
    endDate: null,
    technologies: []
  },{
    name: "5th Dimension",
    description: "5th Dimension utilizes the Google Books API Family to search for books.",
    githubURL: "https://github.com/k3ntako/5th-Dimension",
    demoURL: "https://fifth-dimension.herokuapp.com/search",
    videoURL: null,
    startDate: null,
    endDate: null,
    technologies: []
  }
]

const seedDatabase = async () => {
  for( let i = 0; i < seedData.length; i++ ){
    await Project.create(seedData[i]);
  }
}

module.exports = {
  seedDatabase
}
