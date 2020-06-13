import'./SeasonDisplay.css';
import React from 'react';

const SeasonConfig ={
    summer:{
        text: "Let's hit the beach",
        iconName: "sun"
    },
    winter:{
        text: "Burr! It's Cold",
        iconName: "snowflake"
    }
};
const getSeason = (lat,month) =>{
    if(month >2 && month < 9){
        return lat >0 ? 'summer': 'winter';
    }
    else{
        return lat >0 ? 'winter': 'summer';
    }

}

const SeasonDisplay = (props) =>{
    const Season = getSeason(props.lat,new Date().getMonth());
  const{text,iconName} = SeasonConfig[Season];
    console.log(Season);
    return(
        <div className={`season-display ${Season}`}>
            <i className = {`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className = {`icon-right massive ${iconName} icon`} />
            </div>

    );
};
export default SeasonDisplay;