import React from "react";
import "../App.css";
import { Link } from "react-router-dom";



class MoviesList extends React.Component {

    render() {
        return (
            <div>
                <div className="movies_list">
                    <Link to={`/movies/${this.props.data.id}`}>
                        <div className="m-3 shadow">
                            <img src={`http://image.tmdb.org/t/p/w200//${this.props.data.poster_path}`}
                                width="100%"
                                height="100%"
                                className="poster">
                            </img>
                        </div>
                    </Link>
                </div>

            </div>
        )
    }
}


export default MoviesList;
