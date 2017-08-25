import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native'



export default class SearchResult extends Component {
    constructor(props) {
      super(props)
    }

    GoToSubmit() { 
        this.props.jumpSubmit()
    }

    render () {
        return(
        <TouchableOpacity onPress = {() => this.GoToSubmit()}>
        <View style={ this.props.index % 2 ===0 ? styles.itemContainer: styles.itemContainer2} >
            <View style={styles.container}>
                <View style={styles.left}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
            </View>
            <View style={styles.left}>
                <Text>{this.props.job_stu_subject}</Text>
            </View>
            <View style={styles.left}>
                <Text>{this.props.job_time}</Text>
            </View>
            <View style={styles.left}>
                <Text>{this.props.job_stu_sex} {this.props.job_stu_level}</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.left}>
                    <Text>${this.props.job_hourrate}{this.props.job_rate_type}</Text>
                </View>
                <View style={styles.right}>
                    <Text>{this.props.job_post_date}</Text>
                </View>                
            </View>
        </View>
        </TouchableOpacity>
        )
    }
}  

const styles = StyleSheet.create({
    itemContainer: {
        borderBottomColor: '#F5A9A9',
        borderBottomWidth: 1
    },
    itemContainer2: {
        borderBottomColor: '#F5A9A9',
        borderBottomWidth: 1,
        backgroundColor: '#E0E6F8'
    },    
    container: {
        flexDirection:'row',
        flex:1
    },    
    left: {
        margin:5,
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    right: {
        margin:5,
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    title: {
        fontWeight:'bold'
    }
})