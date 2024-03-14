# Documentation
The created app is about registration for football field/pitch to play. The registration is going through for one person who leaves the main information to reserve the field, namely, the phone to contact, the number of football players that are going to play, the duration time of play, and the date-time.

To run this project locally, several steps needed to be followed. The first action is installing the node_modules folder with all modules. The process goes by opening a new terminal where the ‘npm install’ needs to be written. After installing dependencies from the package.json, it can run with the ‘npm start’ command.

The dependencies list consists of body-parser, express, express-validator, nodemon, and pug modules.

This project is uploaded to GitHub with a public repository - https://github.com/00016328/football_field_registration/.

# Project structure
The structure of the project is simply followed as required. It is sorted with folders representing the logic and required name and content with needed files. Inside the root folder, there is a folder for styles named public. The reason for having only styles is that there was no need to use images and JavaScript for UI. Next, the data folder for mock_db.json file to store field reserves of clients. Views have a head.pug file for the head of HTML where the link to CSS and Axios is attached. The homepage and other pages are inside the layout folder inside. Controllers, routes, services, and validators folders have, respectively, the same logic with naming folders and files inside: clients, the user who wants to register the field, and the field itself referring to the football pitch.