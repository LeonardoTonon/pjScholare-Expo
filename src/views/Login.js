import React from "react";
import { View, TouchableOpacity, KeyboardAvoidingView, Image, TextInput, Text } from "react-native";
import Style from '../../Styles';

function Login ({navigation}) {
    return (
        <KeyboardAvoidingView style={Style.background}>
            <View style={Style.containerlogo} >
                <Image source={require('../assets/login.png')} 
                 resizeMode = "center"
                 style={Style.login}
                />
            </View>
            <View style={Style.container}>
              <Text style={Style.text} >
                E-mail
              </Text>
                <TextInput style={Style.input}
                    placeholder="Digite seu e-mail"
                    placeholderTextColor="#706f6f"
                    autoCorrect={false}
                    onChangeText={() => { }}
                />
                <Text style={Style.text} >
                Senha
                </Text>
                <TextInput style={Style.input}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#706f6f"
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={() => { }}
                />
                <TouchableOpacity style={Style.buttonSubmit}
                    onPress={() => {
                      navigation.navigate('Home');
                    }}>
                    <Text
                        style={Style.textSubmit}>
                        Acessar
                    </Text>
                </TouchableOpacity>
                <View style={Style.forget}>
                  <TouchableOpacity
                    onPress={() => {
                    navigation.navigate('Forget');
                    }}
                  >
                    <Text style={{fontWeight:"bold"}}>
                      Esqueceu sua senha?
                    </Text>
                  </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Login;
