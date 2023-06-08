import React from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import Style from '../../Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Home({ navigation }) {

    // const getToken = async () => {
    //     try {
    //       const token = await AsyncStorage.getItem('token');
    //       console.log('token guardado');
    //       return token;
    //     } catch (error) {
    //      console.log('Erro ao obter o token:', error); 
    //       return null;
    //     }
    //   };
      
    return (
        <SafeAreaView style={Style.background}>
            <View style={Style.logohome} >
                <Image source={require('../assets/logo3.png')} />
            </View>
            <View style={Style.containerhome}>
                <Text style={Style.texthome}>
                    Seja bem-vindo a nossa plataforma!
                </Text>
                <Text style={Style.textsimple}>
                    Acesse o botão para efetuar a correção.
                </Text>
                <TouchableOpacity style={Style.buttonHome}
                    onPress={() => {
                        navigation.navigate('Additional')
                    }}>
                    <Text style={Style.textSubmit}>Escanear Gabarito</Text>
                </TouchableOpacity>
                <View style={Style.containerbutton}>
                <TouchableOpacity style={Style.buttonLogout}
                    onPress={() => {
                        navigation.navigate('Login')
                    }}>
                    <Text style={Style.textSubmit}>Sair</Text>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    )
}

export default Home;