import React from "react";
import "../App.css"
import { Link } from "react-router-dom";



class TvList extends React.Component {

    render() {
        return (
            <div>
                <div className="movies_list">
                    <Link to={`/tvserials/${this.props.data.id}`}>
                        <div className="m-3 shadow">
                            <img src={`http://image.tmdb.org/t/p/w200//${this.props.data.poster_path}`}
                                width="100%"
                                height="100%"
                                className="">
                            </img>

                        </div>
                    </Link>
                </div>

            </div>
        )
    }
}


export default TvList;
