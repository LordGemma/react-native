import {COUNTER_CHANGE} from '../ActionTypes';

export const changeCount = (count) => ({
    type: COUNTER_CHANGE,
    payload: count
})