import React from 'react';
import {Input, Button, Card, Image} from 'semantic-ui-react';
import {Rating} from 'semantic-ui-react';
class Cards extends React.Component {
    constructor() {
        super();
        this.state = {
            rcomment: '',
            addbcolor: '',
            updatebcolor: ''
        }
    }
    changecomment(e)
    {
        this.setState({rcomment: e.target.value});

    }
    addRestaurant() {
        console.log(this.props.id);

        $.ajax({

            url: 'http://localhost:8080/restaurant/addrestaurant',
            type: 'POST',
            data: {
                'resId': this.props.id,
                'resname': this.props.name,
                'Description': this.props.cuisines,
                'location': this.props.location,
                'Review': this.props.ratings,
                'Reviewcount': this.props.ratingcount,
                'resImage': this.props.image,
                'resComments': this.props.comment
            },
            success: function(data) {
                console.log('Successfully got JSON from Zomato' + JSON.stringify(data));
                this.setState({addbcolor: 'added'});
            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });

    }

    deleterestaurant()
    {
        $.ajax({

            url: 'http://localhost:8080/restaurant/deleterestaurant',
            type: 'DELETE',
            data: {
                'resId': this.props.id
            },
            success: function(data) {
                console.log('Successfully got JSON from Zomato' + JSON.stringify(data));
                this.props.remove(this.props.id);
            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });

    }
    updaterestaurant()
    {
        $.ajax({

            url: 'http://localhost:8080/restaurant/updaterestaurant',
            type: 'PUT',
            data: {
                'resId': this.props.id,
                'resComments': this.state.rcomment
            },
            success: function(data) {
                console.log('Successfully got JSON from Zomato' + JSON.stringify(data));
                this.props.update(this.props.id, this.state.rcomment);
                this.setState({updatebcolor: 'updated'});
            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });
    }

    render()
    {
        let but = '';
        let text = '';
        let com = '';
        if (this.props.fav === 'fav') {
            if (this.props.comment !== '') {
                but = (
                    <div>
                        <Button color='teal' onClick={this.deleterestaurant.bind(this)}>unfavourites</Button>
                        <Button color='red' onClick={this.updaterestaurant.bind(this)}>Edit Comment</Button>
                    </div>
                );

            } else {
                but = (
                    <div>
                        <Button color='teal' onClick={this.deleterestaurant.bind(this)}>unfavourites</Button>
                        <Button color='teal' onClick={this.updaterestaurant.bind(this)}>Add Comment</Button>
                    </div>
                );

            }
            text = (
                <div><Input focus placeholder='Add Comments...' onChange={this.changecomment.bind(this)} disabled={false}/></div>
            );
            com = (
                <div>
                    <Card.Description>
                        <b>Comment:</b>{this.props.comment}</Card.Description>
                </div>
            )
        } else {
            if (this.state.addbcolor == 'added') {
                but = (
                    <div>
                        <Button color='red' onClick={this.deleterestaurant.bind(this)}>unfavourites</Button>
                    </div>
                );
            } else {
                but = (
                    <div>
                        <Button color='teal' onClick={this.addRestaurant.bind(this)}>Add to Favourites</Button>
                    </div>
                );
            }
        }

        return (
            <Card>
                <Image src={this.props.image} alt='Image not available' className='cardimage'/>
                <Card.Content>
                    <Card.Header className='head'>{this.props.name}</Card.Header>
                    <Card.Meta className='cus'>Cuisines:{this.props.cuisines}</Card.Meta>
                    <Card.Description className='desc'>Address:{this.props.location}</Card.Description>
                    {com}
                </Card.Content>
                <Card.Content extra>
                    <a className='rate'>
                        <Rating icon='star' defaultRating={this.props.ratings} maxRating={5}/> {this.props.ratings}/5 {this.props.ratingcount}
                        ratings
                    </a>
                    <div className='empty'>
                        {text}
                    </div>
                    <div className='btn'>
                        {but}
                    </div>

                </Card.Content>
            </Card>
        )
    }
}
module.exports = Cards;
