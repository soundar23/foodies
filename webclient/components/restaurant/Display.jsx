import React from 'react';
import {Grid} from 'semantic-ui-react';
import Cards from './cardDesign.jsx';

class DisplayComponent extends React.Component {
    constructor() {
        super();
    }
    //     removeid(id){
    //       var js=this.props.name;
    //       var index=function getIndex(id, js, resId) {
    //     for(var i = 0; i < js.length; i++) {
    //         if(js[i][resId] === id) {
    //             return i;
    //         }
    //     }
    //     return -1; //to handle the case where the value doesn't exist
    // }
    // delete js[i];
    // this.props.favch(js);
    //     }

    render()
    {

        let fav = this.props.fav;
        let delrender = this.props.rem;
        let uprender = this.props.upd;
        let jsarray = this.props.name.map(function(objs) {
            let statement = '';
            if (fav === 'fav') {
                statement = (<Cards className='card' id={objs.resId} name={objs.resname} image={objs.resImage} location={objs.location} cuisines={objs.Description} ratings={objs.Review} ratingcount={objs.Reviewcount} comment={objs.resComments} fav='fav' remove={delrender} update={uprender}/>);
            } else {
                statement = (<Cards className='card' id={objs.restaurant.id} name={objs.restaurant.name} image={objs.restaurant.featured_image} location={objs.restaurant.location.address} cuisines={objs.restaurant.cuisines} ratings={objs.restaurant.user_rating.aggregate_rating} ratingcount={objs.restaurant.user_rating.votes} comment=''/>);
            }
            return statement;
        });
        return (
            <div>
                <Grid centered columns={5}>
                    {jsarray}
                </Grid>
            </div>
        );
    }
}
module.exports = DisplayComponent;
