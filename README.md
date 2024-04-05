QA Automation Coding Test
This is my submission for the test. I am not able to make endpoints that are provided from an API with a url, if that is what is required. Instead, I've put them into function bodies that throws exceptions. Due to my current coding capabilities, I hope this is okay.

Prerequisites
- Node.js
The system requires Node.js to run the project. You can install it here - https://nodejs.org/en/download

Installation and Usage:

The following are the steps to clone the repository and run the mocha test scripts. The mocha module is already installed locally in the project repository.

1. Clone the repository using the git command:

   If your computer has 'git' installed, open the Terminal (or Windows Powershell) and type in the following command into the terminal. You may want to change to your desired directories before doing so.

       git clone https://github.com/m-delamore/QA-Automation-Coding-Test.git

   Otherwise, you can go here https://github.com/m-delamore/QA-Automation-Coding-Test and download the zip file.

2. With the Terminal still open, navigate to the directory where the project was cloned/installed in the terminal using the cd command:

       cd QA-Automation-Coding-Test

3. When you are in the project folder, you can run the test scripts with the following command:

       npx mocha testEndpoints.js
