import React from "react";
import { View, TouchableOpacity, Image, TextInput, Text, KeyboardAvoidingView } from "react-native";
import Style from '../../Styles';


function Forget({navigation}) {
    return (
       <KeyboardAvoidingView style={Style.backgroundforget}>
        <View style={Style.containerforget} >
                <Image source={require('../assets/forget.png')} 
                 resizeMode = "center"
                 style={Style.logoforget}
                />
            </View>
            <View style={Style.containerinputforget}>
            <Text style={Style.text} >
                E-mail
              </Text>
                <TextInput style={Style.input}
                    placeholder="Digite seu e-mail"
                    placeholderTextColor="#706f6f"
                    autoCorrect={false}
                    onChangeText={() => { }}
                />
                <TouchableOpacity style={Style.buttonSubmit}
                    onPress={() => {
                      navigation.navigate('');
                    }}>
                    <Text
                        style={Style.textSubmit}>
                        Enviar e-mail
                    </Text>
                </TouchableOpacity>
            </View>
       </KeyboardAvoidingView>     
      );
}

export default Forget;