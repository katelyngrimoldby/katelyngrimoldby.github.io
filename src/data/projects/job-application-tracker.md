---
technologies: ["React", "Express", "TypeScript"]
title: Job Application Tracker
image: ./images/job-tracker-desktop.jpg
live: https://job-tracker.fly.dev/
source: https://github.com/katelyngrimoldby/job-application-tracker
alt: dashboard of job application tracker in desktop mode
featured: true
---

All the way back in 2022, I began working on this job tracking website. I began this work as my final project for the University of Helsinki’s Open Data Structures courses, although it aligned at a time where I was looking for employment (at a time when any employment was getting difficult to find) so it became a project that I could use in practice.
When I first wrote the job tracker it was very simple: The database consisted of tables “users” and “jobs.” “Users” is fairly straightforward, while “jobs” contained everything: The actual information about the job, but also dates of each interview and who they were with; anything not contained in the set fields were to be put in the ‘notes’ section. On the frontend this was a WYSIWYG editor with basic formatting capabilities; sufficient, but not ideal. Fast forward to 2025 and I have overhauled this website, adding a dashboard (pictured above), separating interviews from applications, and even supporting pdf file upload and retrieval! Not so easily pictured is the improvement I made as a programmer. You can check out my [reflection](../articles/reflecting-on-the-job-application-tracker) to read about my process in building this project, or you can click the links above to take you to the live site or the source code.

In addition to the main technologies listed, I used Redis, PostgreSQL, Sequelize, Umzug, Bcrypt, and JWT to buid the backend; TipTap, Axios, Chart.js, and React Router to build the frontend; Jest, Vitest, and Cypress for automated testing. Additionally, Vite was used to bootstrap the frontend and Docker is used both for local database instances and to deploy the production build to Fly.io.
