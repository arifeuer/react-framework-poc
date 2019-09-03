import React from 'react';
import './App.css';
import RedBizModule from './RedBizModule/RedBizModule';
import ExampleComponent from 'framework';

const consumerComponents = [
  {
    component: RedBizModule,
    name: "Red Biz Module"
  },
  {
    component: RedBizModule,
    name: "Red Biz Module"
  }
];

function App() {
  return consumerComponents.map(consumerComponent =>
      <div>
        <ExampleComponent name={consumerComponent.name} component={<consumerComponent.component />} />
      </div>
  );
}

export default App;
