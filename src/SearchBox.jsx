
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import { colors } from '@mui/material';

export default function SearchBox({updateInfo}) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "670f6bc3984e4b8edaad6173c9c4c37c";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            //console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            }
            return result;
        }
        catch(err){
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
       try{
        event.preventDefault();
        let newInfo = await getWeatherInfo();
        console.log(newInfo);
        updateInfo(newInfo);
        setCity("");
       }
       catch(err){
        setError(true);
       }
    };

    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br />  <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p style={{color: "red"}}>"No such place exists!"</p>}
            </form>
        </div>
    );
}