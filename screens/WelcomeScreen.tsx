import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, ScrollView } from 'react-native';
import Caricaturas from '../components/Caricaturas';

export default function WelcomeScreen() {
  const imageUrl = require('../assets/yo.jpeg');
  const materias = [
    { id: '1', nombre: 'Desarrollo web' },
    { id: '2', nombre: 'Base de datos' },
    { id: '3', nombre: 'moviles II' },
    { id: '4', nombre: 'Mantenimiento pc' },
    { id: '5', nombre: 'Vinculacion' },
    { id: '6', nombre: 'Investigacion' },
    
  ];

  const API_COFFE= 'https://api.sampleapis.com/movies/horror'
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch(API_COFFE)
    .then(response=> response.json())
    .then(datos=>setdata(datos))
    // console.log(data)
  }, [])
  
  type Producto ={
    title:string,
    posterUrl:string,
    description:string
  }

  type materias={
    title:string,
    name:string
  }

   function informacion(producto: Producto){
    Alert.alert('INFORMACIÓN','Descripción: '+ producto.description)
   }
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Conoceme!!</Text>
      <Image source={imageUrl} style={styles.image} />
      <Text style={styles.text}><Text style={styles.bold}>Nombre: </Text>Anderson Baez</Text>
      <Text style={styles.header}>MATERIAS</Text>
      
      <View style={styles.container}>
      <FlatList
        data={materias}
        horizontal={true}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.nombre}</Text>
          </View>
        )}
      />
    </View>


      <View style={styles.container}>
      <Text style={styles.header}>PELICULAS</Text>
      <FlatList
        data={data}
        renderItem={({item}:{item:Producto})=>
          <Caricaturas data ={item}/>
        }
      />
      </View>
      

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    borderRadius:6,
    margin:5,
    marginVertical: 3,
    marginHorizontal: 3,
    elevation: 1,
    
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    textAlign: 'center', 
  },
  bold: {
    fontWeight: 'bold',
    color: '#007BFF',
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
  itemContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 3,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
});
