import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';

export default class CameraScreen extends Component {
  state = {
    hasPermission: null,
    loading: false,
    showModal: false,
    modalMessage: '',
    animationLoaded: false,
    responseCode: null,
  };

  async componentDidMount() {
    const { status } = await Camera.requestCameraPermissionsAsync();
    this.setState({ hasPermission: status === 'granted' });
  }

  handlePicture = async () => {
    if (this.state.cameraRef) {
      this.setState({ loading: true });
      const photo = await this.state.cameraRef.takePictureAsync();
      this.uploadPicture(photo);
    }
  };

  uploadPicture = async (photo) => {
    const apiUrl = 'https://jhax8x3b6a.execute-api.us-east-1.amazonaws.com/tmp-lambda-efs';

    const formData = new FormData();
    formData.append('photo', {
      uri: photo.uri,
      type: 'image/jpeg',
      name: 'photo.jpg',
    });

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const responseJson = await response.json();
      const statusCode = response.status;

      this.setState({ loading: false, responseCode: statusCode });

      if (statusCode === 200) {
        this.showModalByStatusCode(200, responseJson.message);
      } else if (statusCode === 500) {
        this.showModalByStatusCode(500, responseJson.message);
      }
    } catch (error) {
      this.setState({ loading: false });
      console.error(error);
    }
  };

  showModalByStatusCode = (statusCode, message) => {
    let modalMessage = '';

    if (statusCode === 200) {
      modalMessage = message;
      this.setState({ showModal: true, modalMessage });
    } else if (statusCode === 500) {
      this.setState({ showModal: true, modalMessage });
    }
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { hasPermission, loading, showModal, modalMessage, animationLoaded, responseCode } = this.state;
    if (hasPermission === null) {
      return <View />;
    } else if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.cameraContainer}>
          {/* Modal in case of 200 */}
          <Modal visible={showModal && responseCode === 200} transparent animationType="fade" onRequestClose={this.closeModal}>
            <View style={styles.modalContainer}>
              <AntDesign name="checkcircle" size={60} color="green" style={{ marginTop: 30 }} />
              <Text style={styles.modaltitle}>Correção realizada com sucesso!</Text>
              <Text style={styles.modalText}>Nome do Aluno:</Text>
              <Text style={styles.modalText}>Turma:</Text>
              <Text style={styles.modalText}>Nota: {modalMessage}</Text>
              <TouchableOpacity onPress={this.closeModal}>
                <Text style={styles.closeButton}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          {/* Modal in case of 500 */}
          <Modal visible={showModal && responseCode === 500} animationType="slide" transparent={true} onRequestClose={this.closeModal}>
            <View style={styles.modalerrorContainer}>
              <View style={styles.modalerrorContent}>
                <AntDesign name="closecircle" size={40} color="red" style={{ marginTop: 10 }} />
                <Text style={styles.modalerrortitle}>Erro ao escanear a foto!</Text>
                <Text style={styles.modaerrorlText}>Por favor, tente novamente.</Text>
                <TouchableOpacity onPress={this.closeModal}>
                  <Text style={styles.closeerrorButton}>Fechar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <Camera
            style={styles.camera}
            type={Camera.Constants.Type.back}
            ref={(ref) => {
              this.state.cameraRef = ref;
            }}
          >
            <View style={styles.capture}>
              <TouchableOpacity style={styles.captureIcon} onPress={this.handlePicture}>
                <Ionicons name="md-scan-circle-sharp" size={100} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </Camera>

          {loading && (
            <View style={styles.loadingContainer}>
              <LottieView
                style={styles.loadingAnimation}
                source={require('../assets/loading.json')}
                autoPlay
                loop
                onAnimationFinish={() => this.setState({ animationLoaded: true })}
              />
              <Text style={styles.loadingText}>Carregando...</Text>
            </View>
          )}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  capture: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  captureIcon: {
    width: 100,
    height: 100,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  modalText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    textAlign: 'right',
    marginHorizontal: 20,
  },
  modaltitle: {
    color: '#000000',
    fontSize: 21,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 50,
    marginHorizontal: 20,
    marginBottom: 50,
  },
  closeButton: {
    color: '#000000',
    fontSize: 18,
    marginTop: 120,
    textDecorationLine: 'underline',
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  loadingAnimation: {
    width: 200,
    height: 200,
  },
  loadingText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 20,
  },
  modalerrorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalerrorContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalerrrorText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeerrorButton: {
    color: '#000000',
    fontSize: 18,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  modalerrortitle: {
    color: '#000000',
    fontSize: 19,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
  },
});
