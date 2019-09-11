import React from 'react';

const Javascript = <>
  <h2>Javascript</h2>
  <p>Experience building <strong>React</strong> websites with both <strong>Express.js</strong> and <strong>Ruby on Rails</strong>.</p>
  <p><strong>Tested</strong> both front- and back-ends using libraries such as <strong>Chai</strong>, <strong>Mocha</strong>, <strong>Jest</strong>, and <strong>Enzyme</strong>.</p>
  <h4>React</h4>
  <p><strong>React-Router</strong>, <strong>Prop-Types</strong>, and <strong>Redux</strong> are the fundamentals of reliable React development.</p>
  <p><strong>Foundation</strong> and <strong>React-Bootstrap</strong> for quick development.</p>

  <h4>Other</h4>
  <p><strong>Babel</strong> and <strong>Webpack</strong> for backwards compatibility and bundling.</p>
  <p><strong>Mongoose</strong> to query and manipulate MongoDB.</p>
  <p>This website utilizes <strong>Sequelize</strong> to query manipulate the PostgreSQL database.</p>
</>

const Ruby = <>
  <h2>Ruby</h2>
  <p><strong>Ruby on Rails</strong> along with <strong>Active Record</strong> to build robust websites with a <strong>PostgreSQL</strong> database.</p>
  <h4>Webscraping</h4>
  <p><strong>Nokogiri</strong> to scrape Starbucks store location data in Z-Scrapper for use in CafeTako. It was also used for a mini-project at Launch Academy (no demo).</p>
  <p>Testing with <strong>RSpec</strong>.</p>
</>

const Database = <>
  <h2>PostgreSQL</h2>
  <p>Managed relational databases to provide information to the front-end via controllers.</p>
  <p><strong>Active Record</strong> to interact with the database and validate the information.</p>
  <p>This website utilizes <strong>Sequelize</strong> to query manipulate the PostgreSQL database.</p>

  <h3>MongoDB</h3>
  <p>No-SQL database for quick and flexible development</p>
  <p><strong>Mongoose</strong> to query and manipulate MongoDB.</p>
</>

const Other = <>
  <h3>Git and Github</h3>
  <h3>Communication</h3>
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
    Unfortunately, without the authorized access to their APIs I was unable to persist the information on the database.
    Shortly after, I had to leave my position to move back to Boston to care for a sick family member.
  </p>
  <p>
    Swift is a language that I hope to relearn in the future.
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
    As mentioned in the Swift section, a large inefficiency at my lab at <strong>Memorial Sloan Kettering</strong> we faced was data entry.
    As a side project, I tried to parse their Excel files to output a new Excel document formatted for upload to our database.
    It was largely successful, however, inconsistencies in formatting and merged cells, as well as human error made my project unfeasible.
    We needed reliable data, so I made the decision not to use the program.
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
