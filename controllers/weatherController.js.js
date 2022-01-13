const axios = require('axios');

exports.weatherController = async (req, res) =>{
    const city="Cologne";
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.APIWEATHERKEY}&units=metric`, {proxy: false});

        console.log(response);
        const tempInCelcius = response.data.main.temp;

        console.log(`The temperature today is ${tempInCelcius}`);
        
        return res.status(200).json({ message: "Weather data was Fetch", weatherResponse: response.data });
    } catch (error) {
        return res
      .status(400)
      .json({ message: "Something went wrong fetching Weather Data", error });
    }
}