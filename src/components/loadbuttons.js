import React from "react";
import "../App.css"
import { Link} from "react-router-dom";



class LoadButton extends React.Component {

    render() {
        return (
            <div>
                <div className="load_btn shadow">
                    <Link to="/movies"><button className="btn btn-sm btn-secondary mx-2 px-3">Movies</button></Link>
                    <Link to="/tvserials"><button className="btn btn-sm btn-secondary mx-2">TV Shows</button></Link>
                </div>

            </div>
        )
    }
}


export default LoadButton;
