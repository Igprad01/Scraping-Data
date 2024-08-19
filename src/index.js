import axios from "axios";
import fs from 'fs';


const url = 'https://www.octaveclothing.com/men';

const ScrapData = async () => {
    try {
        const response = await axios.get(url);
        const data = response.data;

        

      fs.writeFileSync("data.json", JSON.stringify(data, null, 5));
        console.log('data berhasil di send');
    } catch (error) {
        console.log(error.message);
    }
}

export default ScrapData()












