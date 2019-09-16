import React from 'react';

const Javascript = <>
  <h2>Javascript</h2>
  <h4>Front-End</h4>
  <p><strong>React</strong>, <strong>React-Router</strong>, <strong>Prop-Types</strong>, <strong>Redux</strong>, <strong>Workbox</strong>, <strong>Foundation</strong>, and <strong>React-Bootstrap</strong></p>

  <h4>Other</h4>
  <p><strong>Mongoose</strong>, <strong>Sequelize</strong>, <strong>Babel</strong>, and <strong>Webpack</strong></p>

  <h4>Testing</h4>
  <p><strong>Chai</strong>, <strong>Mocha</strong>, <strong>Jest</strong>, and <strong>Enzyme</strong></p>

</>

const Ruby = <>
  <h2>Ruby</h2>
  <p><strong>Ruby on Rails</strong>, <strong>Active Record</strong>, <strong>Devise</strong>, <strong>Carrierwave</strong>, <strong>fog-aws</strong>, <strong>RSpec</strong>, and <strong>Capybara</strong></p>
  <h4>Webscraping</h4>
  <p><strong>Nokogiri</strong>: scraped Starbucks store location data for use in <a href="https://github.com/k3ntako/CafeTako" target="_blank">CafeTako</a>. It was also used for a mini-project at Launch Academy.</p>
</>

const Database = <>
  <h2>PostgreSQL</h2>
  <p><strong>Active Record</strong> (Ruby on Rails) and <strong>Sequelize</strong> (Express.js)</p>
  <p>I am new to <strong>Sequelize</strong>, as this website is my first experience with it. So far, it has been similar to Mongoose (ORM for MongoDB) and I find it very intuitive.</p>

  <h3>MongoDB</h3>
  <p><strong>Mongoose</strong>, <strong>MongoDB Compass</strong> (GUI), and <strong>Robo 3T</strong> (GUI).</p>
</>

const Other = <>
  <h2>Other</h2>
  <p><strong>HTML</strong>, <strong>CSS</strong>, <strong>Git</strong>, <strong>Github</strong>, and <strong>Heroku</strong></p>
  <p>I have been working with <strong>HTML</strong> and <strong>CSS</strong> as a hobby since middle school. I have gained a great appreciation for design in the process.</p>
</>

const Swift = <>
  <h2>Swift</h2>
  <p>
    Building an iOS app has been a fascination of mine for a long time.
    I took an online course through <a href="https://www.appbrewery.co/" target="_blank">The App Brewery</a> and built some side projects.
  </p>
  <p>
    While working at <strong>Memorial Sloan Kettering Cancer Center</strong>, our lab technicians would take measurements of tumor growth on a piece of paper.
    That information was put in an Excel sheet and then into a database.
    During my free time (after work and weekends), I built an iPad app that they could enter the data into.
    Unfortunately, without the authorized access to the database's APIs I was unable to persist the information on the database.
    Shortly after, I had to leave my position to move back to Boston to for a family emergency, so I was unable to continue on this project.
  </p>
  <p>
    Swift is a language that I hope to work on   in the future.
  </p>
</>

const Python = <>
  <h2>Python</h2>
  <p>Similar to R, I learned <strong>Python</strong> through workshop lessons at Vassar College prior to competing in <a href="http://pages.vassar.edu/datafest/" target="_blank">DataFest</a>, a data analysis and visualization competition.</p>
  <p>
    After graudating Vassar College, I continued my learning and took the "Using Python for Research" course on edX
    (<a href="https://courses.edx.org/certificates/2fa54582c2b042799b5852641cff039d" target="_blank">certificate</a>).
  </p>
</>

const R = <>
  <h2>R</h2>
  <p>Similar to Python, I learned <strong>R</strong> through workshop lessons at Vassar College prior to competing in <a href="http://pages.vassar.edu/datafest/" target="_blank">DataFest</a>, a data analysis and visualization competition.</p>
  <p>
    I continued to work with R after graduating from Vassar College. I created a program that would <strong>scrape</strong> Zillow, an online real estate website.
    The information that was retreived would be outputed into an HTML file formatted as a table.
  </p>
  <p>
    As mentioned in the Swift section, a large obstacle at my lab at <strong>Memorial Sloan Kettering</strong> was data entry.
    As a side project, I parsed their Excel files to output a new Excel document formatted for upload to our database.
    Inconsistencies in formatting as well as human error made my project unfeasible. Our research required reliable and accurate data, so I made the decision not to use the program.
    Though I was unable to use the program to speed up my workflow, it was a valuable learning experience.
  </p>
</>

export {
  Javascript,
  Ruby,
  Database,
  Other,
  Swift,
  Python,
  R,
}
