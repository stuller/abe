import React from 'react';
import {Header, Label} from 'semantic-ui-react';
import Foodlist from './Foodlist'
import ProgressCircle from './ProgressCircle/ProgressCircle';
import CircularProgressbar from 'react-circular-progressbar';

export default class Daily extends React.Component {

    render() {
        return (
            // TODO: remove style here
            <div style={{margin:10 + 'px'}}>
                <ProgressCircle progress={this.props.foodlist.progress}/>
                <div style={{ width: '100%', padding: '10%', position: 'absolute', top: '0', left: '0', marginTop: '30px' }}>
                    <Header as='h1' icon text-align='center'>
                        <Label circular size="massive" color="green">7</Label>
                        <Header.Content>Daily Foods</Header.Content>
                    </Header>

                    <p>Eat daily</p>
                </div>


                <Foodlist name={this.props.name} foodlist = {this.props.foodlist} onUpdateFood={this.props.onUpdateFood}/>
            </div>
        )
    }
}