import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import Style from '../../Styles';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 


function Additional({ navigation }) {
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