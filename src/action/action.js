const app_action = {}



app_action.save_movies_data = (data)=>{
    return{
        type:"save_movies_data",
        data:data
    }
}

app_action.save_tv_data = (data)=>{
    return{
        type:"save_tv_data",
        data:data
    }
}


export default app_action