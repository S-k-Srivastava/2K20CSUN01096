// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrainScheduleList from './components/TrainScheduleList';
import TrainScheduleCard from './components/TrainScheduleCard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TrainScheduleList} />
        <Route path="/train/:id" component={TrainScheduleCard} />
      </Switch>
    </Router>
  );
};

export default App;
