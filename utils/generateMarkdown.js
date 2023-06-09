function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
  
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `+ [License](#license)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## license

    This project is licensed under ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ReadMe Generator
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

## Table Of Contents

*[Installation](#installation)

*[Usage](#usage)
${renderLicenseLink(data.license)}

*[Constributions](#contributions)

*[Test](#test)

*[Questions](#questions)

  ## Installation

  To install you will need to run the following:

  ${data.install}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributions 

  ${data.contributions}

  ## Test

  Run the following command to run tests:

  ${data.test}

  ## Questions

  If you have any questions regarding the repo or want to contact me directly etc, 
  you can reach me at ${data.email}.
  You can see more work and projects on [${data.github}](https://github.com/${data.github}/).
  
`;
}

module.exports = generateMarkdown;
