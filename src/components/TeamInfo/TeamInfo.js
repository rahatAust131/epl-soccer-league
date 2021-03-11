import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { faCalendarPlus, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./TeamInfo.css";
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const TeamInfo = () => {
    const { teamId } = useParams();
    const [teamInfo, setTeamInfo] = useState([]);
    
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${ teamId }`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamInfo(data.teams[0]));
    }, [url]);

    const { strTeamBanner, strDescriptionEN, strDescriptionES, intFormedYear, strGender, strTeam,
        strSport, strTeamBadge, strCountry, strFacebook, strInstagram, strYoutube, strTwitter } = teamInfo;
    
    

    return (
        <div>
            <img className="banner-img" src={strTeamBanner} alt="Team Banner"/>
            <div className="mt-3 d-flex justify-content-center align-items-space-center container team-info-container">  
                <div className="mb-3">
                    <div className="card-body">
                        <h2 className="card-title">{strTeam}</h2>
                        <p className="card-text"> <FontAwesomeIcon icon = {faCalendarPlus} /> Founded : {intFormedYear}</p>
                        <p className="card-text"> <FontAwesomeIcon icon = {faFlag} /> Country : {strCountry}</p>
                        <p className="card-text"><FontAwesomeIcon icon ={faFutbol} /> Sports Type : {strSport}</p>
                        <p className="card-text"><FontAwesomeIcon icon = {faMars} /> Gender : {strGender}</p>
                    </div>
                </div>
                <div>
                    <img className="team-badge-img" src={strTeamBadge} alt=""/>
                </div>
            </div>
            <div className="container team-info-container p-3 mb-3">
                <p className="description-para"><small>{strDescriptionEN}</small></p>
                <p className="description-para"><small>{strDescriptionES}</small></p>
                <div className="d-flex justify-content-center">
                    <h2 className="icons">    
                        <a href={strFacebook}><FontAwesomeIcon icon = {faFacebook} /></a>
                    </h2>
                    <h2 className="icons">
                        <a href={strTwitter}><FontAwesomeIcon icon = {faTwitter} /></a>
                    </h2>
                    <h2 className="icons">
                        <a href={strInstagram}><FontAwesomeIcon icon = {faInstagram} /></a>
                    </h2>
                    <h2 className="icons">
                        <a href={strYoutube}><FontAwesomeIcon icon = {faYoutube} /></a>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default TeamInfo;