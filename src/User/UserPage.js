import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getArtist } from "../action/actions";



const UserPage = (props) => {

useEffect(() => {
    props.getArtist(props.id)
    
}, [] )

return (
            <div className="App">
            <h1>Artist Info</h1>
            <h4>{props.name}</h4>
            <h4>{props.popularity}</h4>
            </div>
    )
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    popularity: state.popularity,
    isFetching: state.isFetching,
    error: state.error
  };
};

const mapDispatchToProps = {
    getArtist,
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
