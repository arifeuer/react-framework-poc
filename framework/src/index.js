import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
import PurpleFwComponent from './components/PurpleFwComponent/PurpleFwComponent';
import FrameworkContainer from './components/FrameworkContainer/FrameworkContainer';
import FrameworkRouter from './router/FrameworkRouter';

const frameworkComponents = [
  {
    name: 'Purple FW Component',
    component: PurpleFwComponent,
    path: '/purple'
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
