import React from 'react'
import { buyChicken } from '../redux/chicken/chickenActions';
import { useDispatch, useSelector } from 'react-redux'

const HookChickenContainer = () => {
    const numOfChickens = useSelector(state => state.chicken.numOfChickens);
    const dispatch = useDispatch();

    return (
        <>
            <h2>Number of Hook Chicken - {numOfChickens}</h2>
            <button onClick={() => dispatch(buyChicken())}>Buy Hook Chicken</button>
        </>
    )
}

export default HookChickenContainer