/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const dimesiones = Dimensions.get('screen');
// const {height, width} = dimesiones;
const styles = StyleSheet.create({
  image:{
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
    borderRadius: 40,
    alignSelf: 'center'
  },
  
  sectionTitle: {
    fontSize: 25,
    fontWeight: '600',
    color: Colors.white,
  },
  sectionTitleB: {
    fontSize: 20,
    fontWeight: '600',
    color: '#747d8c',
  },
  sectionSubTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.white,
    display: 'flex',
    justifyContent: 'center'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    textAlign: 'justify'
    
  },

  sectionContainerA: {
    marginTop: 5,
    paddingHorizontal: 15,
    padding: 20,
    margin: 10,
    borderRadius:5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    
  },

    sectionContainerB: {
      paddingHorizontal: 15,
      padding: 20,
      margin: 10,
      borderRadius:5,
      flex: 0,
      justifyContent: 'center',
      alignItems: 'stretch',
  },

  sectionContainerC: {
    marginTop: 0,
    paddingHorizontal: 15,
    padding: 0,
    marginLeft: 10,
    borderRadius:5,
    flex: 0,
    alignItems: 'stretch',
  },
  sectionContainerD: {
    marginTop: 0,
    paddingHorizontal: 15,
    padding: 5,
    margin: 10,
    borderRadius:5,
    flex: 4,
    alignItems: 'stretch',
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#a4b0be',

  },
  sectionContainerA_left: {
    padding: 6,
    flex: 2,
  },
  sectionContainerA_right: {
    padding: 6,
    flex: 1
  },

  sectionContainerCol: {
    padding: 6,
    flex: 1
  },
 
});


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
     <SafeAreaView style={styles.container}>
     
       <View style={styles.sectionContainerA}>
         <View style={styles.sectionContainerA_left}> 
            <Text style={styles.sectionTitle}>Jean González</Text> 
            <Text style={styles.sectionSubTitle}>32</Text>
         
         </View>
         <View  style={styles.sectionContainerA_right}>
            <Image 
                style={styles.image}
                resizeMode='center'
                source={{uri: 'https://i.picsum.photos/id/866/200/200.jpg?hmac=i0ngmQOk9dRZEzhEosP31m_vQnKBQ9C19TBP1CGoIUA'}}
              />
         </View>
         
                  
       </View>
       <View style={styles.sectionContainerB}>
         <Text style={styles.sectionTitleB}>Bio</Text> 
         <Text style={styles.sectionDescription}>Desarrollador Informático</Text> 
       </View>
       <View style={styles.sectionContainerC}>
         <Text style={styles.sectionTitleB}>Descripción</Text> 
       </View>
       <View style={styles.sectionContainerD}>
          <View style={styles.sectionContainerCol}>
            <Text style={styles.sectionDescription}>La tarea consiste en que vean la imagen e intenten desarrollar un componente (pueden hacerlo directamente en el App.js), que mantenga el mismo estilo (o similar) al de las imagenes que les estoy entregando. No es obligación hacerlo, pero es importante para que puedan ir soltando la mano al diseñar componentes.</Text>  
          </View> 
          <View style={styles.sectionContainerCol}>
            <Text style={styles.sectionDescription}>  
Cualquier duda me las indican. PROFE, NO TENGO IDEA COMO HIZO LAS COLUMNAS, ALGO ASI QUEDO</Text>
          </View>
       </View>
       
     </SafeAreaView>
    </>
  );
};

export default App;
