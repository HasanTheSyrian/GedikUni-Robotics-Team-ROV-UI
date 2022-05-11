# GedikUni-Robotics-Team-ROV-UI


### A repository for one of Gedik Univeristy's robotics teams' ROV interface. 
 
 ---
 
 #### Installation process:
 
 1- Make sure you have [Node.js](https://nodejs.org/en/) installed.

 2- If you're using VSCode, make sure to download: [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass).

 3- Install Electron globally by running:

 ```
 $ npm install -g electron
 ```

 4- Open the directory in your terminal and run:

 ```
 $ npm install
 ```
 
 5- Finally run
 
 ```
 $ npm start
 ```

 6- To make sure everything works, click on "Watch Sass".
 Then, go to `./index.html` and try removing one of the Tailwind classes `<... class="underline" ...>`. If the application changes it means TailwindCSS works. 
 
 If you do not see "Watch Sass" go to one of the Sass files at `/Project/Styling/` and it should appear in the bottom corner.
 
 Next, go to `./Project/Styling/index.scss` and make some changes, if the application changes that means SASS/SCSS works.
 
 This is a temporary use of the Sass extention, I will implement the Sass CLI later.
 ---
 
 When you run `npm start` you're compiling the program and creating a directory called `public` which has the finilized css the browser uses after Sass and TailwindCSS finish compiling.
 
 
