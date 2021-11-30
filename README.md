# npm-workspace-example
This is a basic setup using npm workspaces and typescript references for building and running express and react apps

Steps:
  1) Clone the repo
  2) Run npm i
  3) Run npm run start:back and npm run start:front in separate terminals (if npm run start:back is failing the first time, just run it again)
  4) Or run npm run start:all
  5) The front is served on localhost:3000
  6) Play with the array-utils file, change the -1 into a positive number and save. Undo an save. And so on.
     First you'll see the commons libraries re-building then the server and the frontend.
  7) You now have a sweet mono-repo setup! Build something awesome with it! :)
