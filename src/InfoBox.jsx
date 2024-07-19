import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    //const INIT_URL = "https://images.unsplash.com/photo-1705077689363-76d4424a13c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlciUyMGljb258ZW58MHx8MHx8fDA%3D";
    let HOT_URL = "https://images.unsplash.com/photo-1485395578879-6ba080c9cdba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VubnklMjBkYXl8ZW58MHx8MHx8fDA%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1549136430-c2e0aadfc69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25vd2ZhbGx8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8";

    return(
        <div className="InfoBox">
            <h2>Weather Info</h2>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity > 80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 20 ? <WbSunnyIcon/> : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temprature: <b>{info.temp}&deg;C</b></p>
            <p>Humidity: <b>{info.humidity}</b></p>
            <p>Min Temparature: <b>{info.tempMin}&deg;C</b></p>
            <p>Max Temparature: <b>{info.tempMax}&deg;C</b></p>
            <p>The weather can be described as <b>{info.weather}</b> and feels like <b>{info.feelsLike}&deg;C</b></p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    );
}