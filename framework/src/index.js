import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
import PurpleFwModule from './components/PurpleFwModule/PurpleFwModule';
import FrameworkRouter from './router/FrameworkRouter';
import BlueFwModule from './components/BlueFwModule/BlueFwModule';

const frameworkComponents = [
  {
    name: 'Purple FW Module',
    component: PurpleFwModule,
    path: '/purple'
  },
  {
    name: 'Blue FW Module',
    component: BlueFwModule,
    path: '/blue'
  }
];

export default class FrameworkComponent extends Component {
  // static propTypes = {
  //   text: PropTypes.string
  // }



  render() {
    const combinedComponents = this.props.components.concat(frameworkComponents);

    return (
      <FrameworkRouter components={combinedComponents} />
    );

  }
}
