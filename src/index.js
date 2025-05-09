import dotenv from "dotenv";
import app from "./App.js";
import Loaders from "./Loaders/index.js";

dotenv.config();
Loaders.start();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log("Server running!"));
