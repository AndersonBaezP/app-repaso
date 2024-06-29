import { Alert, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Personajes2Screen() {
    const API_VINOS= 'https://api.sampleapis.com/wines/reds'
    const [data, setdata] = useState([])
    useEffect(() => {
      fetch(API_VINOS)
      .then(response => response.json())
      .then(datos=> setdata(datos))
      //console.log(data);      
    }, [])
    
    type Vino ={
        winery:string,
        image:string,
        rating:string
    }

    function informacion(producto :Vino){
        Alert.alert('CALIFICACION', 'Descripción: '+ producto.rating)
    } 
  return (
    <View>
      <Text>Personajes2Screen</Text>
      <FlatList



        data={data}
        renderItem={({item}:{item:Vino})=>
          <TouchableOpacity style={styles.item}  onPress={()=>informacion(item)}>
            <Text>{item.winery}</Text>
            <Image
            source={{uri:item.image}}
            style={styles.img}
            />
          </TouchableOpacity>
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