import React from "react";
import "../App.css";
import axios from "axios";
import { connect } from "react-redux";
import app_action from "../action/action";
import TvList from "./tvlist";




class TvBox extends React.Component {

    state = {
        page: 1
    }


    async componentDidMount() {

        var api_url = "https://api.themoviedb.org/3/discover/tv?api_key=f9d1005ca58118d4796adae0cc4d68ab&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false"
        var tv_data = await axios(api_url)
        // movies_data = movies_data.json()
        console.log(tv_data, "this is tv data")
        this.props.dispatch(app_action.save_tv_data(tv_data.data.results))

    }

    async componentDidUpdate(prevprops, prevstate) {

        var api_url = `https://api.themoviedb.org/3/discover/tv?api_key=f9d1005ca58118d4796adae0cc4d68ab&language=en-US&sort_by=popularity.desc&page=${this.state.page}&timezone=America%2FNew_York&include_null_first_air_dates=false`
        var tv_data = await axios(api_url)
        // movies_data = movies_data.json()
        console.log(tv_data, "this is tv data")
        this.props.dispatch(app_action.save_tv_data(tv_data.data.results))
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
        console.log('this is tv serial')
        return (
            <div>
                <div className="movies_box">
                    {this.props.tv.map((tv) => <TvList data={tv}></TvList>)}
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
        tv: state.tvshows
    }
}

export default connect(mapstatetoprop)(TvBox);
