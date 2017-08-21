import React, { Component } from 'react'
import { StyleSheet, View, Image, SliderIOS } from 'react-native'
import { Button, Text, Picker, Item } from 'native-base'

import MultiSlider from './slider'
import customMarker from './customMarker'
import SearchResult from './searchResult'

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

  onValueChange2 = (value) => {
    this.setState({
      selected2: value
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <Image source={require('.././images/kitstutorlogo.jpg')} />
        <Image source={require('.././images/job_setting.jpg')} />
        <View style={{paddingTop:30, alignItems:'flex-start'}}>
            <Text style={styles.text}>時薪 {this.state.salary}</Text>
            <MultiSlider values={[1,35]} sliderLength={300} onValuesChange={this.salaryValuesChange} min={1} max={35}/>  
            <Text style={styles.dynamic}></Text> 
            <Text style={styles.text}>年級 {this.state.year}</Text>
            <MultiSlider values={[0,11]} sliderLength={300} onValuesChange={this.yearValuesChange} min={0} max={11}/>    
            <Text style={styles.dynamic}></Text>
            <Picker
              mode="dropdown"
              placeholder="請選擇補習科目"
              note={false}
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Item label="Wallet" value="key0" />
              <Item label="ATM Card" value="key1" />
              <Item label="Debit Card" value="key2" />
              <Item label="Credit Card" value="key3" />
              <Item label="Net Banking" value="key4" />
            </Picker>

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
