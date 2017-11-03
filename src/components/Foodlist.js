import React from 'react'
import {Button, List} from 'semantic-ui-react'


export default class Foodlist extends React.Component {
    constructor(props) {
        super(props);
        this.updateFood = this.updateFood.bind(this);
    }
    updateFood(index, food, action) {
        this.props.onUpdateFood(this.props.name, index, food, action);
    }
    render() {
        return (
            <div>{this.props.foodlist.progress}
                <List divided relaxed>
                    {this.props.foodlist.foods.map((food, index) =>
                        <List.Item key={index}>
                            <List.Content>
                                <List.Header>{food.name}: {food.consumed}</List.Header>
                                <Button circular icon="minus" disabled={food.consumed <= 0} onClick={() => {this.updateFood(index, food.name, "decrease")}}/>
                                <Button circular icon="plus" onClick={() => {this.updateFood(index, food.name, "increase")}}/>
                            </List.Content>
                        </List.Item>
                    )}
                </List>
            </div>
        )
    }
}

