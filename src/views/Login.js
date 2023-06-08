import React, { useState } from "react";
import { View, TouchableOpacity, KeyboardAvoidingView, Image, TextInput, Text, Modal, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import Style from '../../Styles';

function Login({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const apiUrl = 'https://f1ce-177-215-76-129.ngrok-free.app/api/mobile_login'; 
    setLoading(true);

    const requestData = {
      email: email,
      password: password
    };

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
      .then(response => {
        if (response.status === 200) {
          return response.json(); // Alteração aqui
        } else if (response.status === 500) {
          setModalMessage('Erro ao fazer login. Por favor, verifique suas informações e tente novamente.');
          setShowModal(true);
        }
      })
      .then(data => {
        console.log(data);
        AsyncStorage.setItem('token', data.token); 
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log('Erro na chamada da API:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <KeyboardAvoidingView style={Style.background}>
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

      {loading && (
        <View style={Style.backgroundloading}>
          <View style={Style.loadingContainer}>
            <LottieView
              source={require('../assets/loading.json')}
              autoPlay
              loop
              style={Style.loadingAnimation}
            />
          </View>
        </View>
      )}

      <View style={Style.containerlogo}>
        <Image
          source={require('../assets/login.png')}
          resizeMode="center"
          style={Style.login}
        />
      </View>

      <View style={Style.container}>
        <Text style={Style.text}>
          E-mail
        </Text>
        <TextInput
          style={Style.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#706f6f"
          autoCorrect={false}
          onChangeText={text => setEmail(text)}
        />

        <Text style={Style.text}>
          Senha
        </Text>
        <TextInput
          style={Style.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#706f6f"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />

        <TouchableOpacity
          style={Style.buttonSubmit}
          onPress={() => {
            navigation.navigate('Home');
          }}
          // onPress={handleLogin}
          disabled={loading}
        >
          <Text style={Style.textSubmit}>
            Acessar
          </Text>
        </TouchableOpacity>

        <View style={Style.forget}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Forget');
            }}
          >
            <Text style={{ fontWeight: "bold" }}>
              Esqueceu sua senha?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Login;
