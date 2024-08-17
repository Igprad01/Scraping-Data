import axios from "axios";
import express from 'express';
import fs from 'fs';

const app = express();
const port = 3000;

const url = '';

app.listen(port, () => {
    console.log(`localhost ${port}`);
});

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(url);
        const data = response.data;

        fs.writeFileSync("data.json", JSON.stringify(data, null, 1));
        res.status(200).send(`data sudah ada`);
    } catch (error) {
        res.status(500).send(`${error.message}`);
    }

});


// nanti dibuat function untuk mengambil data tertentu aja dari scrap web











