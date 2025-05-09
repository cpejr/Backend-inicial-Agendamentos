import startDB from "./mongodb.js";

class Loaders {
  start() {
    startDB();
  }
}

export default new Loaders();
