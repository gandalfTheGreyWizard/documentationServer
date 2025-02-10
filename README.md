#### Setup

1. Clone the repository
2. Run `npm install`
3. `ln -s [path to docs directory] docs`  **create a softlink locally for navigation from server**
4. `ln -s [path to assets directory if any] public/assets` **create a softlink to host the assets included for your markdown like images**
4. Run `npm run start:dev`  **(for development)**
5. Run `npm run start`  **(for production)**
6. Open your browser and navigate to `http://localhost:8080/`
7. For opening a specific file use `http://localhost:8080/docs?name=[name of the file]`
