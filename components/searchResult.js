import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Image } from 'react-native'
import {Button} from 'native-base'

import SearchResultItem from './searchResultItem'
import SubmitForm from './submitForm'

let element = []
export default class SearchResult extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      xmlJson: null,
      isLoading: true
    })
  }

  componentDidMount() {
    this.getData().done();
  }

  jumpSubmit() {
    this
    .props
    .navigator
    .push(
      {
        component: SubmitForm, 
        passProps:null,
        Title: 'Apply Form'
      }
    )
  }
 
  async getData() {
    var convert = require('xml-js');
    fetch('http://www.kits-tutor.com/2015/phpgetadvcontentbig5.php')
        .then(response => 
          response.text()
        )
        .then((response) => {
          if(response) {
            var result1 = convert.xml2json(response, {compact: true, spaces: 4});
            let json = JSON.parse(result1)
            this.setState({
              xmlJson:json,
              isLoading:false
            })
          }
        }).done()
  }

  render () {
    element = []
    if(this.state.xmlJson) {
      const thisJson = this.state.xmlJson
      const startYear = this.props.startYear
      const endYear = this.props.endYear
      const startSalary = this.props.startSalary
      const endSalary = this.props.endSalary
      for (var i = 0; i < thisJson.markers.marker.length; i++ ) {
        let job_number = thisJson.markers.marker[i]._attributes.job_number
        let job_hourrate = thisJson.markers.marker[i]._attributes.job_hourrate
        let job_district = thisJson.markers.marker[i]._attributes.job_district
        let job_address = thisJson.markers.marker[i]._attributes.job_address
        let job_lng = thisJson.markers.marker[i]._attributes.job_lng
        let job_lat = thisJson.markers.marker[i]._attributes.job_lat
        let job_post_date = thisJson.markers.marker[i]._attributes.job_post_date
        let job_stu_sex = thisJson.markers.marker[i]._attributes.job_stu_sex
        let job_stu_subject = thisJson.markers.marker[i]._attributes.job_stu_subject
        let job_time = thisJson.markers.marker[i]._attributes.job_time
        let job_stu_level = thisJson.markers.marker[i]._attributes.job_stu_level
        let job_rate_type = thisJson.markers.marker[i]._attributes.job_rate_type

        if (job_hourrate >= startSalary && job_hourrate <= endSalary) {
          element.push( <SearchResultItem key={job_number} title={job_district + job_address} 
            job_district={job_district}
            job_address={job_address}
            job_number={job_number} 
            job_hourrate={job_hourrate} 
            job_lng={job_lng}
            job_lat={job_lat}
            job_post_date={job_post_date}
            job_stu_sex={job_stu_sex}
            job_stu_subject={job_stu_subject}
            job_time={job_time}
            job_stu_level={job_stu_level}
            job_rate_type={job_rate_type}
            index={i}
            jumpSubmit={this.jumpSubmit.bind()}
            navigator={this.props.navigator}
            /> 
          )
        }
      }
    }
      return (
        <ScrollView>
          {/* <View><Button onPress={()=>this.jumpSubmit()}><Text>test</Text></Button></View> */}
          {this.state.isLoading && <View style={{ flex: 1,paddingTop: 60,alignItems: 'center'}}><Image source={require('.././images/loading.gif')}/></View>}
          {element }
        </ScrollView>
      )
    }
  }