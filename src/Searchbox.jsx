//
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from 'react';

export default function Searchbox(){
    const api_url="https://api.openweathermap.org/data/2.5/weather"
    const api_key="aaf4df8bab81634bd87a09eec6f14c35";
    let [city,setcity]=useState("");
    
    function handlechange(e){
        setcity(e.target.value)    
    }

    function handlesubmit(e){
        e.preventDefault();
        console.log(city);
        setcity("")
    }

    async function apicall(){
        let response=await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
        let responsejson=await response.json();
        console.log(responsejson);
        let result={
            city:city,
            temp:responsejson.main.temp,
            temp_max:responsejson.main.temp_max,
            temp_min:responsejson.main.temp_min,
            humidity:responsejson.main.humidity,
            pressure:responsejson.main.pressure,
            weather:responsejson.weather[0].description
        }
        console.log(result);
    }


    return(
        <>
        <h2>Weather Application</h2>
        <form onSubmit={handlesubmit}>

        
          {/* <TextField id="city"  label="Enter City Name" variant="filled" required value={city} onChange={handlechange} /> */}
    <TextField
    id="city"
    label="Enter City Name"
    variant="filled"
    required
    value={city}
    onChange={handlechange}
    sx={{
      input: { color: 'white' }, // text inside input
      label: { color: '#1976d2' },
      '& .MuiInputLabel-root': { color: 'white' }, // unfocused label
      '& .MuiInputLabel-root.Mui-focused': { color: '#1976d2' }, // focused label
    }}
  />

        <br /><br />
        <Button variant="contained" type='submit' onClick={apicall}>submit</Button>
        </form>
        <br /><br />
        </>
    );
}