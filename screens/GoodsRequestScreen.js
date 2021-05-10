import React,{Component} from 'react';
import {View,Text,StyleSheet,KeyboardAvoidingView,TextInput,TouchableOpacity,Alert} from 'react-native';
import MyHeader from '../components/MyHeader.js';
import db from '../config';
import firebase from 'firebase';


export default class GoodsRequestScreen extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <View style = {{flex:1}}>
                <Text>Goods Request</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    keyBoardStyle : { 
        flex:1, 
        alignItems:'center', 
        justifyContent:'center' 
    }, 
    formTextInput:{ 
        width:"75%", 
        height:35, 
        alignSelf:'center', 
        borderColor:'#ffab91', 
        borderRadius:10, 
        borderWidth:1, 
        marginTop:20, 
        padding:10, 
    }, 
    button:{ 
        width:"75%", 
        height:50, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:10, 
        backgroundColor:"#ff5722", 
        shadowColor: "#000", 
        shadowOffset:{ width: 0, height: 8}, 
        shadowOpacity: 0.44, 
        shadowRadius: 10.32, 
        elevation: 16, 
        marginTop:20 
    }, 
    container:{ 
        flex : 1, 
        justifyContent: 'center' 
    }, 
    bookRequestStyle:{ 
        borderColor:"orange", 
        borderWidth:2, 
        justifyContent:'center', 
        alignItems:'center', 
        padding:10, margin:10 
    }, 
    receiveButton:{ 
        borderWidth:1, 
        borderColor:'orange', 
        backgroundColor:"orange", 
        width:200, 
        alignSelf:'center', 
        alignItems:'center', 
        justifyContent:'center', 
        height:30, 
        marginTop:10 
    }
})