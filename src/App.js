import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';


import Daily from './components/Daily';
import ThreeTimes from './components/ThreeTimes'
import OneTime from './components/OneTime'
import Never from './components/Never'

const foodlist = require('./data/dailyFoods.json')


class App extends Component {
    constructor(props) {
        super(props);
        this.handleConsumeFood = this.handleConsumeFood.bind(this);
    }
    handleConsumeFood() {
        alert('you ate some food');
    }
  render() {


    return (
      <div className="App">
          {/*//TODO create router*/}
          <Daily foodlist={foodlist.dailyFoods} onConsumeFood={this.handleConsumeFood}/>
          <ThreeTimes foodlist={foodlist.threeTimesWeeklyFoods}/>
          <OneTime foodlist={foodlist.onceAWeekFoods}/>
          <Never foodlist={foodlist.neverEatFoods}/>

      </div>
    );
  }
}

export default App;
