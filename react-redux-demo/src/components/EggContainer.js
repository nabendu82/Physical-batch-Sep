import React from 'react'
import { connect } from 'react-redux'
import { buyEgg } from '../redux/egg/eggActions'

const EggContainer = props => {
    return (
        <>
            <h2>Number of Eggs - {props.eggNumbers}</h2>
            <button onClick={props.eggBuy}>Buy Egg</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        eggNumbers: state.egg.numOfEggs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        eggBuy: () => dispatch(buyEgg())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EggContainer)