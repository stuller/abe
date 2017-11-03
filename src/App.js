import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';


import Daily from './components/Daily';
import ThreeTimes from './components/ThreeTimes'
import OneTime from './components/OneTime'
import Never from './components/Never'

const data = require('./data/dailyFoods.json')


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            dailyFoods: data.dailyFoods,
            threeTimesWeeklyFoods: data.threeTimesWeeklyFoods,
            onceAWeekFoods: data.onceAWeekFoods,
            neverEatFoods: data.neverEatFoods
        }
        this.handleUpdateFood = this.handleUpdateFood.bind(this);
    }
    handleUpdateFood(foodlist, index, food, action) {
        let foodData = this.state[foodlist];
        if(action === "increase") {
            foodData.foods[index].consumed++;
        } else if (action === "decrease" && foodData.foods[index].consumed > 0) {
            foodData.foods[index].consumed--;
        }
        let progress = 0;
        for (let i=0; i < foodData.foods.length; i++) {
            if(foodData.foods[i].consumed >= foodData.foods[i].min) {
                progress++;
            }
        }
        foodData.progress = progress/foodData.foods.length;
        this.setState({
            [foodlist]: foodData
        })
    }

  render() {


    return (
      <div className="App">
          <Grid columns={4} divided>
              <Grid.Row>
                  <Grid.Column><Daily name="dailyFoods" foodlist={this.state.dailyFoods} onUpdateFood={this.handleUpdateFood}/></Grid.Column>
                  <Grid.Column><ThreeTimes name="threeTimesWeeklyFoods" foodlist={this.state.threeTimesWeeklyFoods} onUpdateFood={this.handleUpdateFood}/></Grid.Column>
                  <Grid.Column><OneTime name="onceAWeekFoods" foodlist={this.state.onceAWeekFoods} onUpdateFood={this.handleUpdateFood}/></Grid.Column>
                  <Grid.Column><Never name="neverEatFoods" foodlist={this.state.neverEatFoods} onUpdateFood={this.handleUpdateFood}/></Grid.Column>
              </Grid.Row>
          </Grid>
      </div>
    );
  }
}

export default App;
