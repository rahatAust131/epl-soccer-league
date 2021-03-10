import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { faCalendarPlus, faFighterJet, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./TeamInfo.css";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const TeamInfo = () => {
    const { teamId } = useParams();
    const [teamInfo, setTeamInfo] = useState([]);
    
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${ teamId }`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamInfo(data.teams[0]));
    });

    const { strTeamBanner, strDescriptionEN, intFormedYear, strGender, strTeam,
        strSport, strTeamBadge, strCountry } = teamInfo;

    return (
        <div className = "bg-primary">
            <img src={strTeamBanner} style={{width : '100%'}} alt="Team Banner"/>
            <div className="mt-5 mb-5 d-flex justify-content-center align-items-space-center container">  
                <div>
                    <div className="card-body">
                        <h2 className="card-title">{strTeam}</h2>
                        <p className="card-text"> <FontAwesomeIcon icon = {faCalendarPlus} /> Founded : {intFormedYear}</p>
                        <p className="card-text"> <FontAwesomeIcon icon = {faFlag} /> Country : {strCountry}</p>
                        <p className="card-text"><FontAwesomeIcon icon ={faFutbol} /> Sports Type : {strSport}</p>
                        <p className="card-text"><FontAwesomeIcon icon = {faMars} /> Gender : {strGender}</p>
                    </div>
                </div>
                <div>
                    <img src={strTeamBadge} alt=""/>
                </div>
            </div>
            <div className="container fluid">
                <p><small>{strDescriptionEN}</small></p>
                <p><small>{strDescriptionEN}</small></p>
                <FontAwesomeIcon icon = {faTwitter} />
            </div>
        </div>
    );
};

export default TeamInfo;