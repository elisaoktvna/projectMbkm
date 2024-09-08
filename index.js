import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import KategoriRoute from "./routes/KategoriRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(KategoriRoute);

app.listen(5000, ()=> console.log('server up and running...'));