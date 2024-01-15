import express from "express";
import renderer from "./helpers/renderer";

const app = express();

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send(renderer());
});

app.listen(3000, () => {
    console.log("Started on PORT: 3000");
})