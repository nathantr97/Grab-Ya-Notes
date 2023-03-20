const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const api = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use("/api/notes", api);

app.use(express.static("public"));

app.get("/notes", (req, res)=> {
    res.sendFile(__dirname + "/public/notes.html"), function (error) {
        if (error) {
            res.status(500).send(error);
        }
    }
});

app.get("*", (req, res) => {
    res.sendFile(__dirname + `/public/index.html`),
        function (error) {
            if (error) {
                res.send(error);
            }
        };
});


app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
