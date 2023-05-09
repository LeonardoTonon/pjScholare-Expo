import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

export default class Cam extends React.Component {
  state = {
    hasPermission: null,
    cameraRef: null,
  };

  async componentDidMount() {
    const { status } = await Camera.requestPermissionsAsync();
    this.setState({ hasPermission: status === 'granted' });
  }

  async takePicture() {
    if (this.state.cameraRef) {
      const { uri } = await this.state.cameraRef.takePictureAsync();
      console.log('Picture taken!', uri);
    }
  }

  render() {
    const { hasPermission } = this.state;
    if (hasPermission === null) {
      return <View />;
    } else if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.cameraContainer}>
        <Camera
            style={styles.camera}
            type={Camera.Constants.Type.back}
            ref={ref => {
            this.state.cameraRef = ref;
            }}
            // definindo o fundo como transparente
            // para evitar problemas com o background
            transparent
        />
        <View style={styles.capture}>
            <View style={styles.captureIcon}>
            <Ionicons name="md-scan-circle-sharp" size={100} color='#FFFFFF'/>
            </View>
        </View>
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
    }
  });