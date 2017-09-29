import React from 'react'
import {List} from 'semantic-ui-react'


export default class Foodlist extends React.Component {
    render() {
        return (
            <div>
                <List divided relaxed>
                    {this.props.foods.map((food) =>
                        <List.Item key={food.name}>
                            <List.Content>
                                <List.Header>{food.name}</List.Header>
                            </List.Content>
                        </List.Item>
                    )}
                </List>
            </div>
        )
    }
}

