import React from 'react';
import './App.css';
import RedBizModule from './RedBizModule/RedBizModule';
import FrameworkComponent from 'framework';

const consumerComponents = [
  {
    component: RedBizModule,
    name: "Red Biz Module",
    path: '/red'
  }
];

function App() {

  return (
    <div>
      <FrameworkComponent components={consumerComponents}/>
    </div>
  )
}

export default App;
