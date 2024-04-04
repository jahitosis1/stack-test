# ICS Reservation System - Frontend Repository

This will be our frontend repository eme eme short description eme eme.

## 🔗 Quick Links

### Project Related Information
- 🧭 [Sitemap](https://www.figma.com/file/X1j1CnOcMsxrWbV8MkXto6/Sitemap?type=whiteboard&node-id=0%3A1&t=FsAPLR9fig6DNFaO-1)
- 🖼️ [Wireframes]()
- 📄 [SRS](https://docs.google.com/document/d/16VGmOE0LgqLdZQySitdpTIna8wHQ5phU/edit?usp=sharing&ouid=112929084048602811983&rtpof=true&sd=true)

### Documentations
- [Backend API Documentation]()
- [Tailwind CSS Documentation](https://v2.tailwindcss.com/docs)
- [React Documentation](https://react.dev/)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [React Router Documentation](https://reactrouter.com/en/main)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)

## 💻 Setting up your Workspace

1. Install NodeJS to your local machine.

   - On macOS, install NodeJS using HomeBrew.
     ```
     brew install node
     ```
     - To install HomeBrew, follow install instructions [here](https://brew.sh/).
   - On Windows, download the installer [here](https://nodejs.org/en/).

2. Clone the repository using:
   - Using HTTPS:
     ```
     git clone https://github.com/CMSC-128-E8L/ics-room-reservation-frontend.git
     ```
   - Using SSH:
        ```
        git clone git@github.com:CMSC-128-E8L/ics-room-reservation-frontend.git
        ```
3. Change directory to the cloned repository.

   ```
   cd /path/to/ics-room-reservation-frontend
   ```

4. Install dependencies using:

   ```
   npm i
   ```

5. Run test server using:
   ```
   npm run dev
   ```

> [!TIP]
> You may encounter an error when trying to run the project locally. It may be related to the old version of NodeJS in your local machine. To update NodeJS, follow this [instruction](https://www.freecodecamp.org/news/how-to-update-node-and-npm-to-the-latest-version/).

## 🌳 Github Branching Guide

> [!IMPORTANT]
> **Do not** push to the `main` branch. All development progress will be pushed to their respective feature branches, then to the staging branches, then to the main branch.

### Feature Branches

- Feature branches will be created by the team leader.

### Branching From Feature Branch

- Create a branch from a feature branch with the following name convention:
  ```
  feature/<name>-<i>
  ```
- Index will be the number of times you have cloned the branch.
- Subsequent modification by the developer should be push to their personal branch. Again, **do not** push to the `main` branch.

### Pulling Changes To Feature Branches

- If you are done on the task assigned to you, create a pull request **to the** feature branch.
- Team leader will be the one approving the pull request to the feature branch.
