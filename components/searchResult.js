import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native'

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
        passProps:null
      }
    )
  }
 
  async getData() {
    var convert = require('xml-js');
    // var xml =
    // '<?xml version="1.0" encoding="utf-8"?>' +
    // '<markers>' +
    // ' <marker job_lng="114.14861" job_lat="22.33456" job_post_date="2017-08-25" job_number="25081706" job_hourrate="120" '+
    // ' job_district="長沙灣" job_stu_sex="男" job_address="昇悅居(近荔枝角MTR)" lat="22.33456" lng="114.14861" ' +
    // ' type="student" job_stu_secondary=""  job_stu_subject="補全科" ' +
    // ' job_time="逢星期一,五,每堂1.5hr" job_stu_level="升P.4" job_rate_type="/HR" />' + 

    // '<marker job_lng="0" job_lat="0" job_post_date="2017-08-25" job_number="25081705" job_hourrate="120" ' + 
    // ' job_district="黃大仙" job_stu_sex="女" job_address="新莆崗衍慶大廈" lat="0" lng="0" ' + 
    // ' type="student" job_stu_secondary=""  job_stu_subject="補英文" ' + 
    // ' job_time="一星期一堂,每堂1.5-2hr" job_stu_level="升F.2" job_rate_type="/HR" /> ' + 
    // '</markers>';
    // var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
    // let json = JSON.parse(result1)
    // alert(json.markers.marker[0]._attributes.job_lng)


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
            /> 
          )
        }
      }
    }
      return (
        <ScrollView>
          {this.state.isLoading && <View><Text>Loading...</Text></View>}
          {element }
        </ScrollView>
      )
    }
  }