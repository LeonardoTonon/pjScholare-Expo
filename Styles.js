import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffff',
    },
    containerlogo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10
      },
      login: {
        flex:1,
        alignSelf: "flex-start",
        width: 400, 
        maxHeight: 350, 
        marginTop: 30,
        flex: 1,
        backgroundColor: "#f7f7f7",
        borderColor: "#f7f7f7"
      },
      containerforget: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: "#f7f7f7",
        marginBottom:30,
        marginTop:40,
        flexDirection:"row"
      },
      logoforget: {
        flex: 1,
        alignSelf: "center",
        width: 250, 
        maxHeight: 220,
        marginTop: 10, 
        flex: 1,
        backgroundColor: "#f7f7f7",
        borderColor: "#f7f7f7"
      },
      containerinputforget:{
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 10,
        paddingTop: 10,
        width: '100%',
        backgroundColor: "#FFFFFF"
      },
      backgroundforget:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f7f7',
      },
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 10,
        paddingBottom: 0,
        width: '100%',
        backgroundColor: "#FFFFFF"
    },
    input: {
        width: '90%',
        marginBottom: 15,
        fontSize: 16,
        borderRadius: 7,
        borderColor: "#646363",
        borderWidth: 1,
        padding: 10,
        fontFamily: ''
    },
    buttonSubmit: {
        backgroundColor: '#0e6ef7',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        fontFamily: ''
    },
    textSubmit: {
        color: '#fff',
        fontSize: 18,
        fontFamily: ''
    },
    textSimple: {
        flex: 1,
        color: '#000000',
        fontSize: 20,
        fontFamily: ''
    },

    button: {
        flex: 1,
        width: '90%',
        backgroundColor: '#0e6ef7',
        fontFamily: '',
        borderRadius: 7
    },

    textAdd: {
        color: '#000000',
        fontSize: 20,
        fontFamily: '',
        padding: 10
    },
    containerAdd: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 10

    },
    text: {
        fontSize: 16,
        marginTop: 5,
        alignSelf: "flex-start",
        paddingHorizontal: 20,
        paddingBottom: 5
    },
    containerText: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    buttonAdd: {
        backgroundColor: '#0e6ef7',
        width: '100%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        fontFamily: ''
    },
    forget: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        justifyContent: "center",
    }





})