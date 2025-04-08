//
import Searchbox from './Searchbox'
import Infobox from './Infobox' 
import { useState } from 'react'

export default function Weatherapp(){

    let [weatherinfo,setweatherinfo]= useState({
        city:"bhopal",
        humidity:12,
        pressure : 1006,
        temp : 32.21 ,
        temp_max : 32.21 ,
        temp_min : 32.21 ,
        weather : "clear sky"
    })

    function updateinfo(newinfo){
        setweatherinfo(newinfo);
    }
    return (
        <>
        <Searchbox updateinfo={updateinfo} />
        <Infobox info={weatherinfo}/>
        </>
    );
}