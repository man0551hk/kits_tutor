import React, { Component } from 'react'
import { AppRegistry, Text, View, ScrollView, NavigatorIOS, StyleSheet } from 'react-native'
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base'
import PropTypes from 'prop-types'

import Index from './components/index'

export default class kits_tutor extends Component {
  render () {
    return (
      <NavigatorIOS 
      initialRoute={{ component: Index, title: 'Kits Tutor', passProps: null, index:0 }} 
      renderScene={(route, navigator) => {

        let Component = route.component;
        return <Component {...route.params} navigator={navigator} />
      }}
      style={{flex: 1}} />
    )
  }
}

AppRegistry.registerComponent('kits_tutor', () => kits_tutor)
