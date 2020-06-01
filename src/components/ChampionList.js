import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchChampions } from '../actions'
import ChampionCard from './ChampionCard'

const ChampionList = props => {
    useEffect(() => {props.fetchChampions()}, [])

    return (
        <div className="champs-container">
            {props.champions.map(champion => {
                return <ChampionCard key={champion.key} champion={champion} />
            })}
        </div>
    )
};

const mapStateToProps = state => {
    return { champions: state.champions }
}

export default connect(mapStateToProps, { fetchChampions })(ChampionList)