import React from 'react';
import {Header, Label} from 'semantic-ui-react';
import Foodlist from './Foodlist'

export default class OneTime extends React.Component {
    render() {
        return (
            // TODO: remove style here
            <div style={{margin:30 + 'px'}}>
                <Header as='h1' icon text-align='center'>
                    <Label circular size="massive" color="yellow">1</Label>
                    <Header.Content>1x Foods</Header.Content>
                </Header>
                <p>Eat these foods 1x a week</p>
                <Foodlist foods = {this.props.foodlist}/>
            </div>
        )
    }
}