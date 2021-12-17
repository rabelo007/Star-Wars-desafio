import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';



export default function Detail_dois({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Mestre Jedi'
  })

 return (
   <ScrollView style={styles.container}> 
       <Image
       source={require('../../assets/detail_dois.png')}
       style={styles.image}
       resizeMode="cover"
       />

       <View>
         <View>
           <Text style={[styles.title, { fontSize: 24 } ]}>PERSONAGEM</Text>
         </View>
         <View opacity={0.4}>
           <Text style={[styles.title, { fontSize: 30 } ]}>MESTRE JEDI</Text>
         </View>

         

         <View style={styles.textContent}>
          
           <Text style={styles.textContent}>
           "É um personagem fictício no universo de Star Wars, criado por George Lucas. Ele aparece em seis filmes da saga, todos os filmes da trilogia prequela e da original exceto pelo episódio 4, e também aparece no episódio 8. Frank Oz, célebre criador dos Muppets, é o responsável pela sua voz. Possui apenas 76 centímetros, mas foi um sábio Mestre Jedi que liderou o Conselho Jedi por anos" (Wikipédia, 2021).
           </Text>
           <Text style={styles.textList}>
             -Altura: 69 com 
           </Text>
           <Text style={styles.textList}>
             -Gênero: Masculino
           </Text>
           <Text style={styles.textList}>
             -Peso: 30 kg
           </Text>
          
         </View>
     
         <View style={styles.line} />

       </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image:{
    width: '100%'
  },
  title:{
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },
  dotContainer:{
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal:'2%'
  },
  textTitle:{
    fontSize: 22,
    marginVertical: '2%'
  },
  textList:{
    fontSize: 16,
    lineHeight: 25,
  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  }
});