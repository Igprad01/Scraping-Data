const axios = require('axios');
const fs = require('fs');
const cheerio = require('cheerio');

const url = 'https://www.octaveclothing.com/men';

const ScrapData = async () => {
    try {
        const response = await axios.get(url);
        const data = response.data;

        const Load = cheerio.load(data);

        const ScrapData = []

        Load('.product-card').each((index, element) => {
              const title = Load(element).find('h6').text().trim();
              const price = Load(element).find('span').first().text().trim();

              ScrapData.push({
                title,
                price,
              });
        }); 

        

      fs.writeFileSync("data.json", JSON.stringify(ScrapData, null, 5));
        console.log('data berhasil di send');
    } catch (error) {
        console.log(error.message);
    }
};

ScrapData();