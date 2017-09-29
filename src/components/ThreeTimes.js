import React, { Component } from 'react';
import {Header, Icon, Label} from 'semantic-ui-react';
import Foodlist from './Foodlist'

export default class ThreeTimes extends React.Component {
    render() {
        return (
            // TODO: remove style here
            <div style={{margin:30 + 'px'}}>
                <Header as='h1' icon text-align='center'>
                    <Label circular size="massive" color="olive">3</Label>
                    <Header.Content>3x Foods</Header.Content>
                </Header>
                <p>Eat these foods 3x a week</p>
                <Foodlist foods = {this.props.foodlist}/>
            </div>
        )
    }
}