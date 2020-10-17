import {ADD_MOVIES, ADD_FAVOURITE} from '../actions';

const initialDataState={
    
}

export default function data (state=initialDataState,action){
    
    switch(action.type){
        case ADD_DATA:
            return{
                ...state,
                list:action.movies
            }
        case REMOVE_DATA:
            return{
                ...state,
                checkList:[action.movie, ...state.checklist]
                
            }
        default :
         return state;        
    }
}