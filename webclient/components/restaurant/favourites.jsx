import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display.jsx'

class FavComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            favarray: []
        };
        this.getRestaurant();
    }
    // change(arr)
    // {
    //   this.setState({favarray:arr});
    // }
    getRestaurant() {

        $.ajax({

            url: "http://localhost:8080/restaurant/findrestaurant",
            type: 'GET',
            success: function(data) {
                console.log('Successfully got fav JSON from Zomato' + JSON.stringify(data));
                this.setState({favarray: data});
            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });

    }
    removeFavCard(id) {
        var favArray = this.state.favarray;
        var arr = [];
        for (var obj of favArray) {
            if (obj.resId != id) {
                arr.push(obj);
            }
        }
        this.setState({favarray: arr});
    }
    updateFavComments(id, comments) {
        var favArray = this.state.favarray;
        for (var obj of favArray) {
            if (obj.resId == id) {
                obj.resComments = comments;
            }
        }
        this.setState({favarray: favArray});
    }

    render()
    {
        return (<Display name={this.state.favarray} fav="fav" rem={this.removeFavCard.bind(this)} upd={this.updateFavComments.bind(this)}/>);
    }
}

module.exports = FavComponent;
