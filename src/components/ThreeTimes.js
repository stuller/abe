import React from 'react';
import {Header, Label} from 'semantic-ui-react';
import ProgressCircle from './ProgressCircle/ProgressCircle';
import Foodlist from './Foodlist'


export default class ThreeTimes extends React.Component {
    render() {
        return (
            // TODO: remove style here
            <div style={{margin:10 + 'px'}}>
                <ProgressCircle progress={this.props.foodlist.progress}/>
                <div style={{ width: '100%', padding: '10%', position: 'absolute', top: '0', left: '0', marginTop: '30px' }}>
                    <Header as='h1' icon text-align='center'>
                        <Label circular size="massive" color="olive">3</Label>
                        <Header.Content>3x Foods</Header.Content>
                    </Header>
                    <p>Eat 3 a week</p>
                </div>
                <Foodlist name={this.props.name} foodlist = {this.props.foodlist} onUpdateFood={this.props.onUpdateFood}/>
            </div>
        )
    }
}