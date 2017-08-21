'use strict'
import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Button, Text } from 'native-base'
import MultipleChoice from 'react-native-multiple-choice'

export default class SubjectDropDownd extends Component {
  constructor (props) {
    super(props)
  }

  closeModal () {
    this.props.closeMethod()
  }

  setSelectedSubject (items) {
	//this.props.setSelectedSubject(items)
  }

  subjects = [ '中文','英文',
										'數學',
										'數學(M1)',
										'數學(M2)',
										'物理',
										'化學',
										'生物',
										'中史',
										'西史',
										'地理',
										'中國文學',
										'英國文學',
										'經濟',
										'會計(BAFS)',
										'通識',
										'普通話',
										'英文會話',
										'日文',
										'全科'		  ]

  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
		  <ScrollView>
        <MultipleChoice
          options={this.subjects}
		selectedOptions={[]}
          maxSelectedOptions={3}
          onSelection={(option) => this.setSelectedSubject(option)} />
		  </ScrollView>
        <Button primary block onPress={() => this.closeModal()}>
          <Text>
            確定
          </Text>
        </Button>
      </View>
    )
  }
}
