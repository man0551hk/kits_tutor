import React, {Component} from 'react'
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native'
import {Button, Text} from 'native-base'
import Modal from 'react-native-modal'

import MultiSlider from './slider'
import customMarker from './customMarker'
import SearchResult from './searchResult'
import SubjectDropDown from './subjectDropDown';

export default class kits_tutor extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      salary: '$50 - $400',
      startSalary: 0,
      endSalary: 0,
      year: 'P.1 - F.6',
      startYear: 0,
      endYear: 0,
      selectedSubject: '',
      isModalVisible: false
    });
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
      startYear: years[values[0]],
      endYear: years[values[1]],
      year: _years
    })
  }

  selectedItem = (selectedItems) => {
    this.setState({
      selectedSubject: selectedItems
    })
  }

  _showModal = () => this.setState({isModalVisible: true})

  _hideModal = () => this.setState({isModalVisible: false})



  render() {
    return (
      <View style={styles.container}>
        <Image source={require('.././images/job_setting.jpg')}/>

        <Text style={styles.text}>時薪 {this.state.salary}</Text>
        <MultiSlider
          values={[1, 35]}
          sliderLength={300}
          onValuesChange={this.salaryValuesChange}
          min={1}
          max={35}/>
        <Text style={styles.text}>年級 {this.state.year}</Text>
        <MultiSlider
          values={[0, 11]}
          sliderLength={300}
          onValuesChange={this.yearValuesChange}
          min={0}
          max={11}/>

        <View>
          <TouchableOpacity onPress={this._showModal}>
            <Text>請選擇科目</Text>
          </TouchableOpacity>
          <Modal isVisible={this.state.isModalVisible}>
            <SubjectDropDown
              closeMethod={this
              ._hideModal
              .bind()}
              setSelectedSubject={this.selectedItem.bind()}
              />
          </Modal>
          <Text>{this.state.selectedSubject}</Text>
        </View>
    
        <Button
          block
          onPress={() => {
          this
            .props
            .navigator
            .push({component: SearchResult})
        }}>

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
  dynamic: {
    alignSelf: "center",
    paddingVertical: 5
  }
})
