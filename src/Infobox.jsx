//

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './Infobox.css'

export default function Infobox({info}){
    
  const hot_url="https://c02.purpledshub.com/uploads/sites/41/2023/05/start-of-summer-7e03a77.jpg";
  const cold_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShtFSRRTp3OEqePz3Z6C0NsAwoKq4vrQCoNg&s";
  const rain_url="https://cdn.girls.buzz/images/girls.buzz.max-1440x900.webp";
    return(
        <>
        <div className='Infobox'>
        <Card sx={{ maxWidth: 345,backgroundColor: '#242424',color:'whitesmoke',border: '1px solid white', borderRadius: 2  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity>120 ? rain_url : info.temp>15 ? hot_url : cold_url}
          alt="weather img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'white' }} component={"span"}>
            <p> Temperature: {info.temp}&deg;C</p> 
            <p> Humidity: {info.humidity}</p> 
            <p> Max Temperature: {info.temp_max}&deg;C</p>
            <p> Min Temperature: {info.temp_min}&deg;C </p>
            <p>Pressure: {info.pressure} </p>
            <p>{info.weather} </p>  
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
        </>
    );
}