import React from "react";
import axios from "axios";





class MovieDetail extends React.Component {


    async componentDidMount() {

        var api_url = `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=f9d1005ca58118d4796adae0cc4d68ab&language=en-US`
        var show_details = await axios(api_url)
        console.log('this is detils of movie',show_details) 
    }




    render() {

        return (
            <div>
                <p>
                    hello this is movie details
                </p>
            </div>
        )

    }






}


export default MovieDetail