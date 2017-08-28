import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, TextInput } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button} from 'native-base'

export default class SubmitForm extends Component {
  constructor (props) {
    super(props)
    this.state = (
      {
        mobile: ''
      }
    )
  }

  saveMobile (text) {
    this.setState(
      {
        mobile: text
      }
    )
  }

  render () {
    return (
      <Content style={styles.container}>
        <View style={{paddingLeft:17}}>
          <Text style={styles.bold}>
            個案內容
          </Text>
          <Text>
            {this.props.job_district}
            {this.props.job_address}
          </Text>
          <Text>
            {this.props.job_stu_level}
            {this.props.job_stu_sex}
          </Text>
          <Text>
            {this.props.job_stu_subject}
          </Text>
          <Text>
            {this.props.job_time}
          </Text>
          <Text>
            $
            {this.props.job_hourrate}
            {this.props.job_rate_type}
          </Text>
        </View>
        <Form style={{paddingRight:17}}>
          <Item>
            <Input
              keyboardType='phone-pad'
              onChangeText={(text) => this.saveMobile(text)}
              value={this.state.mobile}
              style={styles.input}
              placeholder='手提電話' />
          </Item>
          <Item>
            <Input
              onChangeText={(text) => this.saveMobile(text)}
              value={this.state.mobile}
              style={styles.input}
              placeholder='導師姓名' />
          </Item>
          <Item>
            <Input
              onChangeText={(text) => this.saveMobile(text)}
              value={this.state.mobile}
              style={styles.input}
              placeholder='個人簡介'  multiline={true} style={{height:200}}/>
          </Item>   
          <Item>
            <Input
              onChangeText={(text) => this.saveMobile(text)}
              value={this.state.mobile}
              style={styles.input}
              placeholder='要求薪金'/>
          </Item>
          <Text style={{paddingLeft:17, paddingTop:10}}>
          填入自己許可的時間有助增加受聘的機會
          </Text>  
          <Item>
            <Input
              onChangeText={(text) => this.saveMobile(text)}
              value={this.state.mobile}
              style={styles.input}
              placeholder='星期一'/>
          </Item>       
          <Item>
            <Input
              onChangeText={(text) => this.saveMobile(text)}
              value={this.state.mobile}
              style={styles.input}
              placeholder='星期二'/>
          </Item>     
          <Item>
            <Input
              onChangeText={(text) => this.saveMobile(text)}
              value={this.state.mobile}
              style={styles.input}
              placeholder='星期三'/>
          </Item>     
          <Item>
            <Input
              onChangeText={(text) => this.saveMobile(text)}
              value={this.state.mobile}
              style={styles.input}
              placeholder='星期四'/>
          </Item>     
          <Item>
            <Input
              onChangeText={(text) => this.saveMobile(text)}
              value={this.state.mobile}
              style={styles.input}
              placeholder='星期五'/>
          </Item>     
          <Item>
            <Input
              onChangeText={(text) => this.saveMobile(text)}
              value={this.state.mobile}
              style={styles.input}
              placeholder='星期六'/>
          </Item>     
          <Item>
            <Input
              onChangeText={(text) => this.saveMobile(text)}
              value={this.state.mobile}
              style={styles.input}
              placeholder='星期日'/>
          </Item>    
                                                                                      
        </Form>
        <View style={{paddingLeft:17, paddingRight:17, paddingTop:10}}>
        <Button block primary ><Text>應徵</Text></Button>
        </View>   
      </Content>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80
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
  }
})
