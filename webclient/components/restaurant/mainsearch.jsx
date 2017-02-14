import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'semantic-ui-react'
import {Container, Header} from 'semantic-ui-react'
import {Input} from 'semantic-ui-react'
import {Divider} from 'semantic-ui-react'

class Child1Component extends React.Component {
    constructor() {
        super();
        this.state = {
            cusine: "",
            rcity: ""
        }
    }
    changecity(e)
    {
        this.setState({rcity: e.target.value});
    }
    changecusine(e)
    {
        this.setState({cusine: e.target.value});
    }
    f() {
        this.props.handle(this.state.rcity, this.state.cusine);
    }
    // change()
    // {
    // 	var a=this.refs.rid.x;
    // 	var b=this.refs.cusine.x;
    // 	this.setState({cusine:a,rid:b});
    // 	this.props.handle(a,b);
    // }

    render() {
        return (
            <Container textAlign="center">
                <Input focus placeholder='Search Location...' ref="rcity" onChange={this.changecity.bind(this)}/>
                <Input focus placeholder='Search Cusines...' ref="cusine" onChange={this.changecusine.bind(this)}/>
                <Button primary onClick={this.f.bind(this)}>Search</Button>
                <Divider/>
            </Container>
        );
    }
}
// export default Child1Component;
export default Child1Component;
