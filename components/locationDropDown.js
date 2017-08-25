'use strict'
import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Button, Text } from 'native-base'
import MultipleChoice from 'react-native-multiple-choice'

let objItems = []
export default class LocationDropDownd extends Component {
  constructor (props) {
    super(props)
  }

  closeModal () {
    this.props.setSelectedLocation(objItems)
    objItems = []
    this.props.closeMethod()
  }

  setSelectedLocation (items) {
	  objItems.push(items)
  }

  subjects = [ '上水', '粉嶺', '大圍',
'沙田', 
'大埔', 
'元朗', 
'天水圍', 
'屯門', 
'東涌', 
'長洲', 
'青衣', 
'荃灣', 
'葵涌', 
'馬鞍山', 
'深井', 
'離島', 
'九龍城', 
'何文田', 
'土瓜灣', 
'紅磡', 
'九龍塘', 
'樂富', 
'黃大仙', 
'鑽石山', 
'彩虹', 
'牛頭角', 
'九龍灣', 
'觀塘', 
'秀茂坪', 
'藍田', 
'油塘', 
'將軍澳', 
'坑口', 
'寶林', 
'西貢', 
'港島南', 
'西環', 
'半山', 
'上環', 
'灣仔', 
'銅鑼灣', 
'跑馬地', 
'大坑', 
'天后', 
'北角', 
'太古', 
'西灣河', 
'筲簧灣', 
'杏花村', 
'柴灣', 
'小西灣', 
'赤柱'

]

  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
		  <ScrollView>
        <MultipleChoice
          options={this.subjects}
		selectedOptions={[]}
          maxSelectedOptions={3}
          onSelection={(option) => this.setSelectedLocation(option)} />
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
