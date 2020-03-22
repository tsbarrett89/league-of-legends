import React from 'react'
import { connect } from 'react-redux'

import { fetchChampions } from '../actions'
import ChampionCard from './ChampionCard'

const ChampionList = props => {
    props.fetchChampions()

    return (
        <div>
            {props.champions.map(champion => {
                return <ChampionCard champion={champion} />
            })}
        </div>
    )
};

const mapStateToProps = state => {
    return { champions: state.champions }
}

export default connect(mapStateToProps, { fetchChampions })(ChampionList)