import React, { Component } from 'react';
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

        this.setState({
            [foodlist]: foodData
        })
    }

  render() {


    return (
      <div className="App">
          {/*//TODO create router*/}
          <Daily name="dailyFoods" foodlist={this.state.dailyFoods} onUpdateFood={this.handleUpdateFood}/>
          <ThreeTimes name="threeTimesWeeklyFoods" foodlist={this.state.threeTimesWeeklyFoods} onUpdateFood={this.handleUpdateFood}/>
          <OneTime name="onceAWeekFoods" foodlist={this.state.onceAWeekFoods} onUpdateFood={this.handleUpdateFood}/>
          <Never name="neverEatFoods" foodlist={this.state.neverEatFoods} onUpdateFood={this.handleUpdateFood}/>

      </div>
    );
  }
}

export default App;
