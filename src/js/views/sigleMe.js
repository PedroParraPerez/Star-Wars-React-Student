import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Description } from "../component/description";

export const SingleMe = props => {
    const {store, actions} = useContext(Context)
	
    const {type, theid} = useParams()
    console.log(type + theid)
useEffect(()=>{
    if(type === "character"){
        
        actions.addPerson(theid)
    }else{
        actions.addPlanet(theid)
    }
},[])
   
	return (
		<>
        {type == "character" ? <Description name={store.dataSingle.name} label1="Name" label2="Birth Year" label3="Hair Color" label4="Eye Color" label5="Height" label6="Mass"
       data1={store.dataSingle.name} data2={store.dataSingle.birth_year} data3={store.dataSingle.hair_color} data4={store.dataSingle.eye_color} data5={store.dataSingle.height} data6={store.dataSingle.mass}/> 
       : <Description name={store.dataSingle.name} label1="Name" label2="Climate" label3="Diameter" label4="Gravity" label5="Population" label6="Terrain"
       data1={store.dataSingle.name} data2={store.dataSingle.climate} data3={store.dataSingle.diameter} data4={store.dataSingle.gravity} data5={store.dataSingle.population} data6={store.dataSingle.terrain} />}
		
		</>
	);}

SingleMe.propTypes = {
	match: PropTypes.object
};
