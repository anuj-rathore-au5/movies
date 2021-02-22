import React from "react";
import axios from "axios";





class TvDetail extends React.Component {



    async componentDidMount() {

        var api_url = `https://api.themoviedb.org/3/tv/${this.props.match.params.id}?api_key=f9d1005ca58118d4796adae0cc4d68ab&language=en-US`
        var show_details = await axios(api_url)
        console.log('this is detils of show',show_details) 
    }


    render() {

        return (
            <div>
                <p>
                    hello this is tv serial
                </p>
            </div>
        )

    }






}


export default TvDetail