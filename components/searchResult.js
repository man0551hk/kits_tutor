import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'



export default class SearchResult extends Component {
  constructor(props) {
    super(props)
  
  }

  componentDidMount() {
    this.getData().done();
  }
 
  async getData() {
    const parseString = require('react-native-xml2js').parseString;

    await fetch('http://www.kits-tutor.com/2015/phpgetadvcontentbig5.php', {
        method: "GET",
        headers: {
          'Accept': 'application/xml',
          'Content-Type': 'application/xml',
        }
      }
    )
    .then((response) => alert(response))
    .done();
      
  }

    render () {
      return (
        <View>
        </View>
      )
    }
  }