import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Caricaturas from '../components/Caricaturas'


export default function PersonajesScreen() {
  const API_COFFE= 'https://api.sampleapis.com/coffee/hot'
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch(API_COFFE)
    .then(response=> response.json())
    .then(datos=>setdata(datos))
    // console.log(data)
  }, [])
  
  type Producto ={
    title:string,
    image:string,
    description:string
  }

   function informacion(producto: Producto){
    Alert.alert('INFORMACIÓN','Descripción: '+ producto.description)
   }
  return (
    <View style={styles.container}>
      <Text>PersonajesScreen</Text>
      <FlatList
        data={data}
        renderItem={({item}:{item:Producto})=>
          <Caricaturas data ={item}/>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1917f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    height:200,
    width:200,
    resizeMode:'contain'
  },
  item:{
    backgroundColor: 'white',
    margin:10,
    width:'100%'
    // flexDirection:'row'
  },
})