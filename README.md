# Student REST API

A simple Express.js REST API used to demonstrate a Jenkins Declarative Pipeline.

## Requirements

- Node.js and npm
- Git
- Jenkins with the Git and Pipeline plugins
- A Windows Jenkins agent for the `bat` commands in the supplied Jenkinsfile

## Run locally

Open a terminal in this project folder and run:

```bash
npm install
npm test
npm run build
npm start
```

Open these API endpoints in a browser:

- `http://localhost:3000/`
- `http://localhost:3000/api/students`
- `http://localhost:3000/api/students/1`

## Jenkins setup

1. Push all project files to a GitHub repository.
2. In Jenkins, select **New Item**, enter a job name, and select **Pipeline**.
3. Under **Pipeline**, choose **Pipeline script from SCM**.
4. Choose **Git**, enter the repository URL, set the branch to `*/main`, and set Script Path to `Jenkinsfile`.
5. Save and click **Build Now**.
6. Open the build and check **Console Output**.
7. After a successful build, find the archived files under **Build Artifacts**.

The Jenkinsfile runs checkout, dependency installation, tests, build, and artifact archiving.

Note: This Jenkinsfile uses Windows `bat` commands. For a Linux Jenkins agent, replace each `bat` with `sh`.
