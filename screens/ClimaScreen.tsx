import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function ClimaScreen() {

  const [ciudad, setciudad] = useState('')
  const [temperatura, settemperatura] = useState(0)

  function mensaje(){
    Alert.alert('mensaje', 'El clima de ' +ciudad+ ' es de ' +temperatura)
  }
  return (
    <ImageBackground source={{uri:"https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-cute-wallpapers-cats-wallpapers-hd-4k-wallpapers-desktop-wallpapers-hd-image_2562853.jpg"}}
    style={styles.container}>

      <Text style={{color:'#0df2c9',fontSize:50 }}>Clima</Text>

      <TextInput 
      placeholder='Ingrese Ciudad'
      placeholderTextColor={'white'}
      style={styles.imput}
      onChangeText={(texto )=> setciudad(texto)}/>

      <TextInput
      placeholder='Ingrese Clima'
      placeholderTextColor={'White'}
      style={styles.imput}
      onChangeText={(texto )=>settemperatura(+texto )}
      keyboardType='numeric'/>

      <Button title='Aceptar' color={'green'} onPress={mensaje}/>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
},
imput:{
backgroundColor:'#666',
height:50,
width: '80%',
marginBottom:10,
borderRadius:40,
paddingHorizontal:25,
fontSize:20,
color:'white'

}
})