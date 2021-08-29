import _ from 'lodash';
import {
    USERS_DATA,
    USER_DATA
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case USERS_DATA:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case USER_DATA:
            console.log("the payloadis",{...state, [action.payload.id]: action.payload});
            return { ...state, [action.payload.id]: action.payload };
            
            default:
            return state;
            
    }
}