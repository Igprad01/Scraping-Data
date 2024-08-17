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

      fs.writeFileSync("data.json", JSON.stringify(data, null, 5));
        res.status(200).send(`data sudah ada`);
        console.log('data berhasil di send');
    } catch (error) {
        res.status(500).send(`${error.message}`);
        console.log(error.message);
    }

});


// nanti dibuat function untuk mengambil data tertentu aja dari scrap web











