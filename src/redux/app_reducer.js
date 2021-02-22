import { createStore } from "redux";

let initial_state = {
    movies_data:[],
    tvshows:[]
}


const appreducer = (state = initial_state,action)=>{
    console.log(action,"this is action")
    var statecopy = {...state}
    switch(action.type){

        case "save_movies_data":
            statecopy.movies_data = action.data
            console.log(statecopy,'state before return')
            return statecopy

        case "save_tv_data":
            statecopy.tvshows = action.data
            return statecopy

        default:
            return statecopy
    }
}



var store = createStore(appreducer)

export default store;


