import React from 'react';
import {Header, Label} from 'semantic-ui-react';
import Foodlist from './Foodlist'

export default class Never extends React.Component {
    render() {
        return (
            // TODO: remove style here
            <div style={{margin:30 + 'px'}}>
                <Header as='h1' icon text-align='center'>
                    <Label circular size="massive" color="red">!</Label>
                    <Header.Content>Banned!</Header.Content>
                </Header>
                <p>Never eat these foods</p>
                <Foodlist foods = {this.props.foodlist}/>
            </div>
        )
    }
}