//

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './Infobox.css'

export default function Infobox(){
    let info={
        city:"bhopal",
        humidity:12,
        pressure : 1006,
        temp : 32.21 ,
        temp_max : 32.21 ,
        temp_min : 32.21 ,
        weather : "clear sky"
    }

    return(
        <>
        <div className='Infobox'>
        <Card sx={{ maxWidth: 345,backgroundColor: '#242424',color:'whitesmoke',border: '1px solid white', borderRadius: 2  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
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