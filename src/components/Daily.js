import React, { Component } from 'react';
import {Header, Icon, Label} from 'semantic-ui-react';
import Foodlist from './Foodlist'

export default class Daily extends React.Component {
    render() {
        return (
            // TODO: remove style here
            <div style={{margin:30 + 'px'}}>
                <Header as='h1' icon text-align='center'>
                    <Label circular size="massive" color="green">7</Label>
                    <Header.Content>Daily Foods</Header.Content>
                </Header>
                <p>Eat these foods daily</p>
                <Foodlist foods = {this.props.foodlist}/>
            </div>
        )
    }
}