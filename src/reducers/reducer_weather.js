import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action){
    //console.log('Action received', action);
    switch(action.type){
       // 或者写成
       // [action.payload.data, ...state]
        case FETCH_WEATHER:
          return state.concat([action.payload.data]);
    }
    return state;
}