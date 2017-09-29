import React, { Component } from 'react';
import {Router, Route} from 'react-router';
import './App.css';
import 'semantic-ui-css/semantic.min.css';


import Daily from './components/Daily';
import ThreeTimes from './components/ThreeTimes'
import OneTime from './components/OneTime'
import Never from './components/Never'

const foodlist = require('./data/dailyFoods.json')


class App extends Component {
  render() {


    return (
      <div className="App">
          {/*//TODO create router*/}
          <Daily foodlist={foodlist.dailyFoods}/>
          <ThreeTimes foodlist={foodlist.threeTimesWeeklyFoods}/>
          <OneTime foodlist={foodlist.onceAWeekFoods}/>
          <Never foodlist={foodlist.neverEatFoods}/>

      </div>
    );
  }
}

export default App;
