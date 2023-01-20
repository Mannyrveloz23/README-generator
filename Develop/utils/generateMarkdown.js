// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0 License':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'BSD 3-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'BSD 2-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
    case 'Eclipse Public License 1.0':
      return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    case 'The MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'; 
    case 'none':
      return '';
    default:
      return 'Invalid license selected.';
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache 2.0 License':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'Boost Software License 1.0':
      return 'https://www.boost.org/LICENSE_1_0.txt';
    case 'BSD 3-Clause License':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'BSD 2-Clause License':
      return 'https://opensource.org/licenses/BSD-2-Clause';
    case 'Eclipse Public License 1.0':
      return 'https://opensource.org/licenses/EPL-1.0';
    case 'The MIT License':
      return 'https://opensource.org/licenses/MIT)';
    case 'none':
      return '';   
    default:
      return 'Invalid license selected.';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case 'Apache 2.0 License':
      return 'The application is covered under the following license:'
    case 'Boost Software License 1.0':
      return 'The application is covered under the following license:'
    case 'BSD 3-Clause License':
      return 'The application is covered under the following license:'
    case 'BSD 2-Clause License':
      return 'The application is covered under the following license:'
    case 'Eclipse Public License 1.0':
      return 'The application is covered under the following license:'
    case 'The MIT License':
      return 'The application is covered under the following license:'
    case 'nonw':
      return ''
    default:
      return 'invalid license selected';
              
  }


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**
  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Github](#github)

  ## License

  ${renderLicenseSection(data.license)}  
  ${data.license}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}

  ## Test
  ${data.test}

  ## Github
  ${data.github}   
  <${data.repository}>
 
  
`;
}

module.exports = generateMarkdown;
