import React from 'react';
import './Teams.css';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Teams = (props) => {
    console.log(props.team);
    const { strTeam, strTeamBadge, strSport, idTeam } = props.team;

    return (
        <div className="teams-container">
            <div className="card team-card col-md">
                <img className="card-top" src={strTeamBadge} alt="Team Badge"/>
                <div className="card-body text-center">
                    <h2 className="card-title">{strTeam}</h2>
                    <p className="card-text">Sports Type : {strSport}</p>
                    <Link to={`/team/${idTeam}`}>
                        <button className="btn btn-primary">
                        Explore <FontAwesomeIcon icon = {faArrowCircleRight} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Teams;