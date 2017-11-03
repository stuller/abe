import React from 'react';
import {Header, Label} from 'semantic-ui-react';
import Foodlist from './Foodlist'
import CircularProgressbar from 'react-circular-progressbar';

export default class Daily extends React.Component {

    getStatusColor(statusPercentage) {
        var hue=((1-((100-statusPercentage)/100))*120).toString(10);
        return ["hsl(",hue,",100%,50%)"].join("");
    }

    render() {
        return (
            // TODO: remove style here
            <div style={{margin:30 + 'px'}}>
                <div style={{width: '60%', margin: '0 auto', color: this.getStatusColor(this.props.foodlist.progress)}}>
                    <CircularProgressbar
                        percentage={50}
                        textForPercentage={null}
                        backgroundPadding={25}
                        classForPercentage={(percent) => percent < 100 ? 'incomplete' : 'complete'}
                    />
                </div>
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