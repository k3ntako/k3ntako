import React from 'react';

const Javascript = <>
  <h2>Javascript</h2>
  <h4>Front-End</h4>
  <p><b>React</b>, <b>React-Router</b>, <b>Prop-Types</b>, <b>Redux</b>, <b>Workbox</b>, <b>Foundation</b>, and <b>React-Bootstrap</b></p>

  <h4>Other</h4>
  <p><b>Mongoose</b>, <b>Sequelize</b>, <b>Babel</b>, and <b>Webpack</b></p>

  <h4>Testing</h4>
  <p><b>Chai</b>, <b>Mocha</b>, <b>Jest</b>, and <b>Enzyme</b></p>
</>

const Ruby = <>
  <h2>Ruby</h2>
  <p><b>Ruby on Rails</b>, <b>Active Record</b>, <b>Devise</b>, <b>Carrierwave</b>, and <b>fog-aws</b></p>
  <h4>Testing</h4>
  <p><b>RSpec</b> and <b>Capybara</b></p>
  <h4>Webscraping</h4>
  <p><b>Nokogiri</b>: scraped Starbucks store location data for use in <a href="https://github.com/k3ntako/CafeTako" target="_blank">CafeTako</a>. It was also used for a mini-project at Launch Academy.</p>
</>

const Database = <>
  <h2>Database</h2>
  <h4>PostgreSQL</h4>
  <p><b>Active Record</b> (Ruby on Rails) and <b>Sequelize</b> (Express.js)</p>

  <h4>MongoDB</h4>
  <p><b>Mongoose</b>, <b>MongoDB Compass</b> (GUI), and <b>Robo 3T</b> (GUI).</p>
</>

const Other = <>
  <h2>Other</h2>
  <p><b>HTML</b>, <b>CSS</b>, <b>Git</b>, <b>Github</b>, and <b>Heroku</b></p>
  <p>I have been working with <b>HTML</b> and <b>CSS</b> as a hobby since middle school. I have gained a great appreciation for design in the process.</p>
  <h4>Third Party APIs</h4>
  <p><b>SendGrid</b>, <b>Google Books</b>, <b>Google Maps</b>, <b>Dark Sky</b>, <b>MBTA</b> (Boston transit), <b>News API</b></p>
</>

const Swift = <>
  <h2>Swift</h2>
  <p>
    I took an online course through <a href="https://www.appbrewery.co/" target="_blank">The App Brewery</a> and built some side projects.
  </p>
  <p>
    After work hours at <b>Memorial Sloan Kettering Cancer Center</b>, I worked on an iPad app where the lab technicians could enter the data into.
    The goal was to bypass the old system that transferred data from a piece of paper to a spreadsheet to the database.
    Unfortunately, without the authorized access to the database's APIs, I was unable to persist the information on the database.
  </p>
</>

const Python = <>
  <h2>Python</h2>
  <p>Similar to R, I learned <b>Python</b> through workshop lessons at Vassar College prior to competing in <a href="http://pages.vassar.edu/datafest/" target="_blank">DataFest</a>, a data analysis and visualization competition.</p>
  <p>
    After graudating Vassar College, I continued my learning and took the "Using Python for Research" course on edX
    (<a href="https://courses.edx.org/certificates/2fa54582c2b042799b5852641cff039d" target="_blank">certificate</a>).
  </p>
</>

const R = <>
  <h2>R</h2>
  <p>I learned <b>R</b> through workshops priors to Vassar College's <a href="http://pages.vassar.edu/datafest/" target="_blank">DataFest</a>, a data analysis and visualization competition.</p>
  <p>
    After Vassar, I created a <a href="https://github.com/k3ntako/HouseSearch" target="_blank">program</a> that would <b>scrape</b> Zillow, an online real estate website, and output an HTML file.
  </p>
  <p>
    Outside of work hours at <b>Memorial Sloan Kettering</b>, I used R to parsed our lab technicians{"'"} Excel files. Inconsistencies in the spreadsheets made it impractical to implement the program, but it was a vital learninng experience.
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
