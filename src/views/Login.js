import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, KeyboardAvoidingView, Image, TextInput, Text, Modal, Button } from "react-native";
import LottieView from 'lottie-react-native';
import Style from '../../Styles';

function Login({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Home');
    }, 10000);
  };

  return (
    <KeyboardAvoidingView style={Style.background}>
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
          onChangeText={() => { }}
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
          onChangeText={() => { }}
        />
        <TouchableOpacity
          style={Style.buttonSubmit}
          onPress={handleLogin}
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
