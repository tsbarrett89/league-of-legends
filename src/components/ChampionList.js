import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import ChampionCard from './ChampionCard'

const ChampionList = () => {
    const champions = useSelector(state => state.champions)

    useEffect(() => {
        axios.get('http://ddragon.leagueoflegends.com/cdn/10.6.1/data/en_US/champion.json')
            .then(res => {
                for(champion in res.data.data) {
                    useDispatch({ type: "ADD_CHAMPION", payload: res.data.data[champion] })
                }
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {champions.map(champion => {
                return <ChampionCard champion={champion} />
            })}
        </div>
    )
}

export default ChampionList