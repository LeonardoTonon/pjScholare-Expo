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
        width: 700, 
        height: 'auto', 
        backgroundColor: "#f8f8f8",
        borderColor: "#f8f8f8"
      },
      containerforget: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: "#f8f8f8",
        marginBottom:40,
        marginTop:40,
        //flexDirection:"row"
      },
      logoforget: {
        flex: 1,
        alignSelf: "center",
        width: 500, 
        height: 'auto',
        // marginTop: 10, 
        backgroundColor: "#f8f8f8",
        borderColor: "#f8f8f8"
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
        backgroundColor: '#f8f8f8',
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
    },
    buttonSubmit: {
        backgroundColor: '#0e6ef7',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
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

      backgroundloading: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
      },
      loadingContainer: {
        alignItems: "center",
        justifyContent:"center",
        top: '35%',
        //left: '50%',
        zIndex: 2,
      },
      
      loadingAnimation: {
        width: 200,
        height: 200,
      },

      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
      },
      modalMessage: {
        fontSize: 16,
        marginBottom: 15,
        textAlign: 'center',
      },
      modalButton: {
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'center',
      },
      modalButtonText: {
        color: '#000000',
        fontSize: 18,
        marginTop: 0,
        textDecorationLine: 'underline',
        alignSelf: 'center',
      },
})