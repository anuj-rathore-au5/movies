import React from "react";
import "../App.css";
import MoviesList from "./movieslist";
import axios from "axios";
import { connect } from "react-redux";
import app_action from "../action/action";




class MoviesBox extends React.Component {

    state = {
        page: 1
    }

    async componentDidMount() {

        var api_url = `https://api.themoviedb.org/3/discover/movie?api_key=f9d1005ca58118d4796adae0cc4d68ab&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.state.page}`
        var movies_data = await axios(api_url)
        // movies_data = movies_data.json()
        console.log(movies_data, "this is movies data")
        this.props.dispatch(app_action.save_movies_data(movies_data.data.results))

    }

    async componentDidUpdate(prevprops, prevstate) {

        var api_url = `https://api.themoviedb.org/3/discover/movie?api_key=f9d1005ca58118d4796adae0cc4d68ab&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.state.page}`
        var movies_data = await axios(api_url)
        // movies_data = movies_data.json()
        console.log(movies_data, "this is movies data")
        this.props.dispatch(app_action.save_movies_data(movies_data.data.results))
    }


    nextpage = () => {
        this.setState({
            page: this.state.page + 1
        })
    }

    prevpage = () => {
        if (this.state.page > 1) {
            this.setState({
                page: this.state.page - 1

            })
        }

    }




    render() {
        console.log('this is moveie')
        return (
            <div>
                <div className="movies_box">
                    {this.props.movies.map((movie) => <MoviesList data={movie}></MoviesList>)}
                </div>
                <div className="nav_btn">
                    <button className="btn btn-sm btn-outline-secondary px-3 m-4"
                        onClick={() => this.prevpage()}>Previous</button>
                    <div className="m-5">
                        <p className="m-2">Page:{this.state.page}</p>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary px-4 m-4"
                        onClick={() => this.nextpage()}>Next</button>
                </div>
            </div>
        )
    }
}

const mapstatetoprop = (state) => {
    return {
        movies: state.movies_data
    }


}

export default connect(mapstatetoprop)(MoviesBox);
