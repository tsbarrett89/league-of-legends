import React from 'react'

const ChampionCard = props => {
    
    return (
        <div>
            <h3>{props.champion.name}</h3>
            <img src={props.champion.image.sprite} />
        </div>
    )
}

export default ChampionCard