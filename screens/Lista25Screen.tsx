import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'

export default function Lista25Screen() {

    const API_Tienda='https://fakestoreapi.com/products'
    const [data,setdata]= useState([])

    useEffect(() => {
   fetch(API_Tienda)
   .then(Response => Response.json())
   .then(datos => setdata(datos))

   console.log(data);
   
    }, [])

    type Producto={
        title: string,
        image: string,
        price:number,
        descrption: string
    }
    function informacion(producto:Producto){
        Alert.alert('Detalle','Descrpcion: ' + producto.descrption)
    }
  return (
    <View style={styles.container}>
      <Text>Lista25Screen</Text>
      <FlatList
      data ={data}
      renderItem={ ({item}:{item:Producto})=>

        <TouchableOpacity style={styles.item} onPress={()=> informacion(item)}>
         <Text>{item.title}</Text>
         <Image  source={{uri:item.image}}
         style={styles.img}/>
         
        </TouchableOpacity>
    
    
    }
      
      />
    </View>
  )
}

const styles = StyleSheet.create({
    
        container: {
            flex:1,
            backgroundColor:'#587e63',
            alignItems:'center',
            justifyContent:'center'
          
          },
          item:{
            backgroundColor:""
          },
          img:{
            width:100,
            height:100,
            resizeMode:"contain"
            
          }
    
    });
