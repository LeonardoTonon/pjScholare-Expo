import React, { useState, useEffect, useContext } from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity, Modal } from "react-native";
import Style from '../../Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EmailContext } from "../components/EmailContext";

function Home({ navigation }) {
  const { email } = useContext(EmailContext);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

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

  const handleLogout = async () => {
    try {
      await logout(); // Realizar o logout e encerrar a sessão atual
      navigation.navigate('Login'); // Redirecionar para a tela de login
    } catch (error) {
    }
  };

  // Efeito para verificar a sessão ao carregar a tela
  useEffect(() => {
    verifySession();
  }, []);

  return (
    <SafeAreaView style={Style.background}>
      <Modal visible={showModal} transparent>
        <View style={Style.modalContainer}>
          <View style={Style.modalContent}>
            <Text style={Style.modalMessage}>{modalMessage}</Text>
            <TouchableOpacity style={Style.modalButton} onPress={() => setShowModal(false)}>
              <Text style={Style.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
        <TouchableOpacity style={Style.buttonHome} onPress={() => navigation.navigate('Additional')}>
          <Text style={Style.textSubmit}>Escanear Gabarito</Text>
        </TouchableOpacity>
        <View style={Style.containerbutton}>
          <TouchableOpacity style={Style.buttonLogout} onPress={handleLogout}>
            <Text style={Style.textSubmit}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
