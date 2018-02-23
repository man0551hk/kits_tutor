import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button} from 'native-base'

export default class SubmitForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mobile: '',
      tutor_name: '',
      brief: '',
      request_salary: '',
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday:''
    }
  }

  sendRequest() {
    var details = {
      'job_number': this.props.job_number,
      'case_content1': this.props.job_district + ' ' + this.props.job_address + this.props.job_stu_level + ' ' + this.props.job_stu_sex + ' ' + 
      this.props.job_stu_subject + ' ' + this.props.job_time + ' $' + this.props.job_hourrate + ' ' + this.props.job_rate_type,
      'mobile': this.state.mobile !== undefined ? this.state.mobile : 0,
      'tutor_name': this.state.tutor_name !== undefined ? this.state.tutor_name : '',
      'brief': this.state.brief !== undefined ? this.state.brief : '',
      'request_salary':  this.state.request_salary !== undefined ? this.state.request_salary : '',
      'monday': this.state.monday !== undefined ? this.state.monday : '',
      'tuesday': this.state.tuesday !== undefined ? this.state.tuesday : '',
      'wednesday': this.state.wednesday !== undefined ? this.state.wednesday : '',
      'thursday': this.state.thursday !== undefined ? this.state.thursday : '',
      'friday': this.state.friday !== undefined ? this.state.friday : '',
      'saturday': this.state.saturday !== undefined ? this.state.saturday : '',
      'sunday': this.state.sunday !== undefined ? this.state.sunday : ''
    }
    var formBody = []
    for (var property in details) {
      var encodedKey = encodeURIComponent(property)
      var encodedValue = encodeURIComponent(details[property])
      formBody.push(encodedKey + "=" + encodedValue)
    }
    formBody = formBody.join("&")

    fetch('http://www.liveforce-production.com/kits_tutor_mobile/tutorSumitJob1.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    }).then(
      response => response.text()
    ).then((response) => {
      // alert(response)
    }).done()
  }

  render () {
    return (
      <Content style={styles.container}>
        <View style={{paddingLeft:14, paddingTop: 20}}>
          <Text style={styles.bold}>
            個案內容
          </Text>
          <Text style={styles.caseFont}>
            {this.props.job_district}
            {this.props.job_address}
          </Text>
          <Text style={styles.caseFont}>
            {this.props.job_stu_level}
            {this.props.job_stu_sex}
          </Text>
          <Text style={styles.caseFont}>
            {this.props.job_stu_subject}
          </Text>
          <Text style={styles.caseFont}>
            {this.props.job_time}
          </Text>
          <Text style={styles.caseFont}>
            $
            {this.props.job_hourrate}
            {this.props.job_rate_type}
          </Text>
        </View>
        <Form style={{paddingRight:17}}>
          <Item>
            <Input
              keyboardType='phone-pad'
              onChangeText={mobile => this.setState({mobile: mobile})}
              style={styles.input}
              placeholder='手提電話' />
          </Item>
          <Item>
            <Input
              onChangeText={tutor_name => this.setState({tutor_name: tutor_name})}
              style={styles.input}
              placeholder='導師姓名' />
          </Item>
          <Item>
            <Input
              onChangeText={brief => this.setState({brief: brief})}
              style={styles.input}
              placeholder='個人簡介'  multiline={true} style={{height:200}}/>
          </Item>   
          <Item>
            <Input
              onChangeText={request_salary => this.setState({request_salary: request_salary})}
              style={styles.input}
              placeholder='要求薪金'/>
          </Item>
          <Text style={{paddingLeft:17, paddingTop:10}}>
          填入自己許可的時間有助增加受聘的機會
          </Text>  
          <Item>
            <Input
              onChangeText={monday => this.setState({monday: monday})}
              style={styles.input}
              placeholder='星期一'/>
          </Item>       
          <Item>
            <Input
              onChangeText={tuesday => this.setState({tuesday: tuesday})}
              style={styles.input}
              placeholder='星期二'/>
          </Item>     
          <Item>
            <Input
              onChangeText={wednesday => this.setState({wednesday: wednesday})}
              style={styles.input}
              placeholder='星期三'/>
          </Item>     
          <Item>
            <Input
            onChangeText={thursday => this.setState({thursday: thursday})}
              style={styles.input}
              placeholder='星期四'/>
          </Item>     
          <Item>
            <Input
            onChangeText={friday => this.setState({friday: friday})}
              style={styles.input}
              placeholder='星期五'/>
          </Item>     
          <Item>
            <Input
              onChangeText={saturday => this.setState({saturday: saturday})}
              value={this.state.saturday}
              style={styles.input}
              placeholder='星期六'/>
          </Item>     
          <Item>
            <Input
            onChangeText={sunday => this.setState({sunday: sunday})}
              style={styles.input}
              placeholder='星期日'/>
          </Item>                                                                  
        </Form>
        <View style={{paddingLeft:17, paddingRight:17, paddingTop:10, paddingBottom: 30}}>
          <Button block primary onPress={() => this.sendRequest()}><Text>應徵</Text></Button>
        </View>
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  bold: {
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    fontSize: 23,
    paddingBottom:10
  },
  dynamic: {
    alignSelf: 'center',
    paddingVertical: 5
  },
  input: {
    borderBottomColor: '#F5A9A9',
    borderBottomWidth: 1
  },
  caseFont: {
    fontSize:20,
    color: 'red'
  }
})
