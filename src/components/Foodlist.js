import React from 'react'
import {Button, List} from 'semantic-ui-react'


export default class Foodlist extends React.Component {
    constructor(props) {
        super(props);
        this.consumeFood = this.consumeFood.bind(this);
    }
    consumeFood() {
        this.props.onConsumeFood();
    }
    render() {
        return (
            <div>
                <List divided relaxed>
                    {this.props.foods.map((food, index) =>
                        <List.Item key={index}>
                            <List.Content>
                                <List.Header>{food.name}: {food.consumed}</List.Header>
                                <Button circular icon="plus" onClick={this.consumeFood}/>
                            </List.Content>
                        </List.Item>
                    )}
                </List>
            </div>
        )
    }
}

