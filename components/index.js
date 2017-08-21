import React, { Component } from 'react'
import { StyleSheet, View, Image, ScrollView } from 'react-native'
import { Button, Text, Picker, Item, Form, ListItem, CheckBox, Body } from 'native-base'
import SelectMultiple from 'react-native-select-multiple'

import MultiSlider from './slider'
import customMarker from './customMarker'
import SearchResult from './searchResult'
import SubjectDropDown from './subjectDropDown';

const fruits = ['Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears']
export default class kits_tutor extends Component {
constructor (props) {
    super(props)
    this.state = (
      {
        salary: '$50 - $400',
        startSalary: 0,
        endSalary: 0,
        year: 'P.1 - F.6',
        startYear: 0,
        endYear: 0,
        selectedSubject: ''
      }
    );
  }

  salaryValuesChange = (values) => {
    let start = 50 + (10 * values[0])
    let end = 50 + (10 * values[1])
    this.setState({
        salary: '$' + start + ' - ' + '$' + end,
        startSalary: start,
        endSalary: end
    })
  }

  yearValuesChange = (values) => {
    let years = [
        'P.1', 'P.2', 'P.3', 'P.4', 'P.5', 'P.6', 'F.1', 'F.2', 'F.3', 'F.4', 'F.5', 'F.6'
    ]
    let _years = years[values[0]] + ' - ' + years[values[1]]
    
    this.setState({
        startYear: years[values[0]],
        endYear: years[values[1]],
        year: _years
    })
  }

  onSelectionsChange = (selectedFruits) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedFruits })
  }

  render () {
    return (
      <View style={styles.container}> 
        <Image source={require('.././images/job_setting.jpg')} />

            <Text style={styles.text}>時薪 {this.state.salary}</Text>
            <MultiSlider values={[1,35]} sliderLength={300} onValuesChange={this.salaryValuesChange} min={1} max={35}/>  
            <Text style={styles.text}>年級 {this.state.year}</Text>
            <MultiSlider values={[0,11]} sliderLength={300} onValuesChange={this.yearValuesChange} min={0} max={11}/>    
           
            <View style={{height:200, paddingBottom:30}}>
            <SubjectDropDown/>
            </View>
            <Button block
            onPress={() => {this.props.navigator.push({
                component:SearchResult
            })}}
            >

            <Text>
                搜尋
            </Text>
            </Button>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  pad: {
    paddingBottom: 60
  },
  text: {
    alignSelf: "center",
    paddingVertical: 10
  },  
  dynamic:{
    alignSelf: "center",
    paddingVertical: 5
  }
})
