import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function LoginScreen({navigation}:any) {
  return (
    <View style={styles.container}>
      <Text style ={{fontSize:40,color:'#181716'}}>Login</Text>
      <TextInput
      placeholder='Ingresar Nick'
      style={styles.imput}/>
      <TextInput
      placeholder='Inserte Contraseña'
      style={styles.imput}
      secureTextEntry={true}/>

      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('BottomTab')}>
        <View style={styles.fila}>
        <Text style={{fontSize:20}}>Ingresar</Text>
        <Image source ={require('../assets/image/image.png')}
        style={styles.img}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
backgroundColor:'#4EC5F1',
flex:1,
alignItems:'center',
justifyContent:'center'
  },

  imput:{
backgroundColor:'white',
height:50,
width:'80%',
borderRadius:20,
margin:10,
fontSize:15,

  },
  btn:{
backgroundColor:'hsl(355, 78%, 56%)',
width:'70%',
height:70,
borderRadius:48,
alignItems:'center',

  },
  img:{
    height:40,
    width:40
  },

  fila:{
    flexDirection:'row-reverse'
  }
})