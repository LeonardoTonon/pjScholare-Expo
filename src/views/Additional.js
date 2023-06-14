import React, { useState, useEffect, useContext } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import Style from '../../Styles';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { EmailContext } from "../components/EmailContext";


function Additional({ navigation }) {
    const { email } = useContext(EmailContext);
    const verifySession = async () => {
        const apiUrl = 'https://scholare-production.up.railway.app/api/is_user_logged_in';
        try {
          const auth_token = await AsyncStorage.getItem('auth_token');
          const requestData = {
            email: email,
            auth_token: auth_token
          };
    
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
          });
    
          if (response.status === 200) {
            // Usuário logado, pode continuar navegando
          } else {
            // Usuário não logado, redirecionar para a tela de login
            const statusCode = response.status;
            let errorMessage = '';
    
            if (statusCode === 500) {
              errorMessage = 'Erro interno no servidor.';
            } else if (statusCode === 400) {
              errorMessage = 'Requisição inválida.';
            } else if (statusCode === 401) {
              errorMessage = 'Sessão encerrada. Por favor, faça o login novamente.';
              // Realizar o logout e encerrar a sessão atual
              await logout();
              navigation.navigate('Login');
            } else {
              errorMessage = 'Erro desconhecido.';
            }
    
            setModalMessage(errorMessage);
            setShowModal(true);
            navigation.navigate('Login');
          }
        } catch (error) {
        }
      };
    
      const logout = async () => {
        const logoutUrl = 'https://scholare-production.up.railway.app/api/mobile_logout';
        try {
          const auth_token = await AsyncStorage.getItem('auth_token');
          const requestData = {
            email: email,
            auth_token: auth_token
          };
    
          await fetch(logoutUrl, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
          });
    
          await AsyncStorage.removeItem('auth_token');
        } catch (error) {
        }
      };
    
      // Efeito para verificar a sessão ao carregar a tela
      useEffect(() => {
        verifySession();
      }, []);

    return (
        <SafeAreaView style={Style.containerAdd}>
            <Text style={Style.textAdd}>
                Siga as instruções abaixo:
            </Text>
            <View style={Style.containerText}>
                <Text style={Style.textsimpleadd}>
                <Entypo name="light-bulb" size={24} color="black" />  Garanta que você esteja em um ambiente bem iluminado.
                </Text>
                <Text style={Style.textsimpleadd}>
                <Entypo name="image" size={24} color="black" />  Fique atento ao foco da imagem.
                </Text>
                <Text style={Style.textsimpleadd}>
                <AntDesign name="camerao" size={24} color="black"/>  Abaixo está um exemplo do campo que deve ser capturado:
                </Text>
                <Image source={require('../assets/gabarito.png')} 
                style={Style.imageadd}
                />
            </View>
            <TouchableOpacity
                style={Style.buttonAdd}
                onPress={() => {
                    navigation.navigate('Cam')
                }}
            >
                <Text style={Style.textSubmit}>Escanear Gabarito</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Additional;