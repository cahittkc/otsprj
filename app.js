const express = require("express");
const helmet = require("helmet");
const config = require("./config")
const loaders = require("./loaders")
const { LessonRoutes ,UserRoutes} = require("./api-routes")

config();
loaders();




const app = express();
app.use(express.json());
app.use(helmet());


app.get("/", (req, res) => {
    res.status(200).send({
        message: 'rest api ayakta...'
    });
});


app.listen(process.env.APP_PORT, () => {
    console.log("Sunucu ayağa kalktı...");
    app.use("/lessons",LessonRoutes);
    app.use("/users",UserRoutes);
});
