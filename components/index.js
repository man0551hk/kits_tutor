import React, {Component} from 'react'
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native'
import {Button, Text} from 'native-base'
import Modal from 'react-native-modal'

import MultiSlider from './slider'
import customMarker from './customMarker'
import SearchResult from './searchResult'
import SubjectDropDown from './subjectDropDown';
import LocationDropDown from './locationDropDown';
export default class kits_tutor extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      salary: '$50 - $400',
      startSalary: 50,
      endSalary: 400,
      year: 'P.1 - F.6',
      startYear: '0',
      endYear: '11',
      selectedSubject: [],
      selectedSubjectText: '請選擇科目',
      selectedLocation: [],
      selectedLocationText: '請選擇地區',
      isModalVisible: false,
      isLocationModalVisible: false,
      yearDefault: [0, 11]
    });
  }

  reset = () => {
    this.setState({
      salary: '$50 - $400',
      startSalary: 50,
      endSalary: 400,
      year: 'P.1 - F.6',
      startYear: '0',
      endYear: '11',
      selectedSubject: [],
      selectedSubjectText: '請選擇科目',
      selectedLocation: [],
      selectedLocationText: '請選擇地區',
      isModalVisible: false,
      isLocationModalVisible: false,
      yearDefault: [0, 11]
    })
  }

  salaryValuesChange = (values) => {
    let start = 50 + (10 * values[0])
    let end = 50 + (10 * values[1])
    this.setState({
      salary: '$' + start + ' - $' + end,
      startSalary: start,
      endSalary: end
    })
  }

  yearValuesChange = (values) => {
    let years = [
      'P.1',
      'P.2',
      'P.3',
      'P.4',
      'P.5',
      'P.6',
      'F.1',
      'F.2',
      'F.3',
      'F.4',
      'F.5',
      'F.6'
    ]
    let _years = years[values[0]] + ' - ' + years[values[1]]

    this.setState({
      startYear: values[0],
      endYear: values[1],
      year: _years
    })
  }

  selectedItem = (selectedItems) => {
    if (selectedItems.length > 0) {
      this.setState(
        {
          selectedSubject: [],
          selectedSubjectText: '請選擇科目'
        }
      )
      this.setState({
        selectedSubject: selectedItems,
        selectedSubjectText: selectedItems.join(',')
      })
    }
    else {
      this.setState(
        {
          selectedSubject: [],
          selectedSubjectText: '請選擇科目'
        }
      )
    }
  }

  selectedLocationItem = (selectedLocationItems) => {
    if (selectedLocationItems.length > 0) {    
      this.setState(
        {
          selectedLocation: [],
          selectedLocationText: '請選擇地區'
        }
      )

      this.setState({
        selectedLocation: selectedLocationItems,
        selectedLocationText: selectedLocationItems.join(',')
      })
    }
    else {
      this.setState(
        {
          selectedLocation: [],
          selectedLocationText: '請選擇地區'
        }
      )
    }
  }


  _showModal = () => this.setState({isModalVisible: true})

  _hideModal = () => this.setState({isModalVisible: false})

  _showLocationModal = () => this.setState({isLocationModalVisible: true})
  
  _hideLocationModal = () => this.setState({isLocationModalVisible: false})

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('.././images/job_setting.jpg')}/>

        <Text style={styles.text}>時薪 {this.state.salary}</Text>
        <MultiSlider
          id = "salary_slider"
          values={[1, 35]}
          sliderLength={300}
          onValuesChange={this.salaryValuesChange}
          min={1}
          max={35}/>
        <Text style={styles.text}>年級 {this.state.year}</Text>
        <MultiSlider
          id = "year_slider"
          values={this.state.yearDefault}
          sliderLength={300}
          onValuesChange={this.yearValuesChange}
          min={0}
          max={11}/>

        <View style={{paddingBottom:30}}>
          <TouchableOpacity onPress={this._showModal}>
            <Text>{this.state.selectedSubjectText}</Text>
          </TouchableOpacity>
          <Modal isVisible={this.state.isModalVisible}>
            <SubjectDropDown
              closeMethod={this
              ._hideModal
              .bind()}
              setSelectedSubject={this.selectedItem.bind()}
              />
          </Modal>
        </View>
        <View>
          <TouchableOpacity onPress={this._showLocationModal}>
            <Text>{this.state.selectedLocationText}</Text>
          </TouchableOpacity>
          <Modal isVisible={this.state.isLocationModalVisible}>
            <LocationDropDown
              closeMethod={this
              ._hideLocationModal
              .bind()}
              setSelectedLocation={this.selectedLocationItem.bind()}
              />
          </Modal>
        </View>


        <View style={{width:320,paddingTop:30}}>
        <Button 
          block
          onPress={() => {
          this
            .props
            .navigator
            .push(
              {
                component: SearchResult, 
                passProps:{
                  startYear: this.state.startYear,
                  endYear: this.state.endYear,
                  startSalary: this.state.startSalary,
                  endSalary: this.state.endSalary,
                  selectedLocation: this.state.selectedLocation,
                  selectedSubject: this.state.selectedSubject,
                  navigator: this.props.navigator
                }
              }
            )
        }}>

          <Text>
            搜尋
          </Text>
        </Button>
        </View>
        <View style={{width:320,paddingTop:30}}>
          <Button block success onPress={ () => this.reset()}>
            <Text>重設</Text>
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
  dynamic: {
    alignSelf: "center",
    paddingVertical: 5
  }
})
