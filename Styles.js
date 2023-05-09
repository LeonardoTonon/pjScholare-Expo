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
        backgroundColor: "#f7f7f7",
        borderColor: "#f7f7f7"
      },
        containerhome: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 10,
        paddingBottom: 0,
        width: '100%',
    },
        logohome: {
        flex: 1,
        alignSelf: "flex-start",
        width: 250, 
        maxHeight: 220,
        marginTop: 70 
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
        borderRadius: 20,
        fontFamily: ''
    },
    textSubmit: {
        color: '#fff',
        fontSize: 18,
        fontFamily: ''
    },
    texthome: {
        color: '#000000',
        fontSize: 20,
        fontWeight:"bold"
    },
    textsimple: {
        color: '#000000',
        fontSize: 16,
        paddingTop: 40,
        paddingBottom:100
    },

    button: {
        flex: 1,
        width: '90%',
        backgroundColor: '#0e6ef7',
        fontFamily: '',
        borderRadius: 7
    },

    textAdd: {
        alignItems: "flex-start",
        color: '#000000',
        fontSize: 19,
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
    
    textsimpleadd: {        
        fontSize: 18,
        marginTop: 5,
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        paddingBottom: 5,
        paddingTop:10
    },

    containerText: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    buttonAdd: {
        alignSelf: "center",
        backgroundColor: '#0e6ef7',
        width: '80%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    forget: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        justifyContent: "center",
    },

    buttonHome: {
        backgroundColor: '#0e6ef7',
        width: '80%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    containerbutton: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 10,
        paddingTop: 25,
        width: '100%',
    },

    buttonLogout: {
        backgroundColor: '#fe3a3b',
        width: '50%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },

    imageadd: {
        flex: 1,
        alignSelf: "center",
        width: 320, 
        maxHeight: 320,
        marginTop: 20, 
        borderColor: "#000000",
        borderWidth:1
      },
})