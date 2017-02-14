import React from 'react';
import ReactDOM from 'react-dom';
import Child1Component from './restaurant/index.jsx';

class MainComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            jsonarray: []
        };
    }
    render()
    {
        return (
            <div ><Child1Component.Child1 handle={this.getResturantcityFromZomato.bind(this)}/>
                <Child1Component.Child2 name={this.state.jsonarray}/>
            </div>
        );
    }
    getResturantcityFromZomato(rcity, cusine)
    {

        $.ajax({

            url: "https://developers.zomato.com/api/v2.1/locations?query=" + rcity,
            type: 'GET',
            beforeSend: function(request) {
                request.setRequestHeader("user-key", "4e338054b2e8a2669cd43842eda23c44");
            },
            success: function(data) {
                console.log('Successfully got JSON from Zomato' + data);
                console.log(data.location_suggestions[0].city_id);
                this.getResturantDataFromZomato(data.location_suggestions[0].city_id, cusine);
            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });

    }
    getResturantDataFromZomato(rid, cusine)
    {

        $.ajax({

            url: "https://developers.zomato.com/api/v2.1/search?entity_id=" + rid + "&entity_type=city&q=" + cusine + "&count=10",
            type: 'GET',
            beforeSend: function(request) {
                request.setRequestHeader("user-key", "4e338054b2e8a2669cd43842eda23c44");
            },
            success: function(data) {
                console.log('Successfully got JSON from Zomato' + data);
                this.setState({jsonarray: data.restaurants});
            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });

    }

}

module.exports = MainComponent;
