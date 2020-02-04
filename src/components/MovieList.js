import React from 'react';
import { connect } from 'react-redux';
import {updateTitle} from '../actions/actions'

class MovieList extends React.Component {

    state = {
        newTitleText: ''
    };

    updateTitle = (e) => {
        e.preventDefault();
        this.props.updateTitle(this.state.newTitleText);
    };
    handleChanges = e =>{
        this.setState({[e.target.name]: e.target.value});
    };

    render(){
    return (
            <div>
            <h1>{this.props.title}</h1>
            <input
                type="text"
                name="newTitleText"
                value={this.state.newTitleText}
                onChange={this.handleChanges}
            />
            <button onClick={this.updateTitle}>Update title</button>
            </div>
          )
     }
}

const mapStateToProps = state =>{
    return{
        title: state.title

    }
}

// export default MovieList; Not this way if we are connecting this component!
export default connect(mapStateToProps, {updateTitle})(MovieList)