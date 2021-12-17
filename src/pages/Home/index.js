import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Shoes from '../../component/Shoes';

export default function Home() {
  const navigation = useNavigation();

 return ( 
   <View style={styles.container}> 
       <View style={styles.header}>
         <Image
         source={require('../../assets/banner.png')}
         style={styles.image}
         />

         <View style={styles.textContainer}>
           <Text style={styles.text}>STAR WARS</Text>
           <Text style={[styles.text, { color: '#CECECF'} ]}>•</Text>
           <Text style={[styles.text, { color: '#CECECF'} ]}>PERSONAGENS</Text>
           <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
             <MaterialIcons
             name="filter-list"
             size={24}
             color="#000"
             />
           </TouchableOpacity>
           </View>
       </View>

       <View style={styles.line}/>

       <ScrollView>
         <Text style={styles.text}>MAIS FAMOSOS</Text>

         <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
           <Shoes img={require('../../assets/1.png')} cost= "Humano ciborgue" onClick={()=> navigation.navigate('Detail') }>
             Darth Vader 
           </Shoes>
           <Shoes img={require('../../assets/2.png')} cost= "Yoda" onClick={()=> navigation.navigate('Detail_dois') }>
             Mestre Jedi 
           </Shoes>
         </View>

         <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
           <Shoes img={require('../../assets/3.png')} cost= "Humano" onClick={()=> alert('DETALHE PRESENTE APENAS NO DARTH VADER E MESTRE JEDI.')}>
           Luke Skywalker 
           </Shoes>
           <Shoes img={require('../../assets/4.png')} cost= "Humano" onClick={()=> alert('DETALHE PRESENTE APENAS NO DARTH VADER E MESTRE JEDI.')}>
             Han Solo 
           </Shoes>
         </View>

         <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
           <Shoes img={require('../../assets/5.png')} cost= "Wookiee" onClick={()=> alert('DETALHE PRESENTE APENAS NO DARTH VADER E MESTRE JEDI.')}>
           Chewbacca 
           </Shoes>
           <Shoes img={require('../../assets/6.png')} cost= "Humana" onClick={()=> alert('DETALHE PRESENTE APENAS NO DARTH VADER E MESTRE JEDI.')}>
           Leia Organa
           </Shoes>
         </View>

       </ScrollView>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8 
  },
  image:{
    width: '100%'
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  }
});