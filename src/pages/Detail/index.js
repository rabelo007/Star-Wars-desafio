import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';


export default function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Darth Vader'
  })

 return (
   <ScrollView style={styles.container}> 
       <Image
       source={require('../../assets/detail.png')}
       style={styles.image}
       resizeMode="cover"
       />

       <View>
         <View>
           <Text style={[styles.title, { fontSize: 24 } ]}>Personagem</Text>
         </View>
         <View opacity={0.4}>
           <Text style={[styles.title, { fontSize: 30 } ]}>Darth Vader</Text>
         </View>

         

         <View style={styles.textContent}>
         
           <Text style={styles.textContent}>
           "Darth Vader, nascido como Anakin Skywalker, é um dos personagens centrais da série de filmes Star Wars (Guerra nas Estrelas), tendo sido um dos protagonistas, juntamente com Obi-Wan Kenobi, da trilogia prequel (mas se tornando o vilão secundário no terceiro filme após a morte do General Grievous), um dos antagonistas principais da trilogia original ao lado do Imperador Palpatine (porém acaba se redimindo no final), e um anti-herói póstumo na trilogia de sequência, sendo que suas ações ainda afetam o universo de Star Wars, sendo para o bem ou para o mal, principalmente quando se trata de seu neto, Ben Solo, o Kylo Ren, que tem por Vader uma admiração cega, e deseja mais do que tudo ser como ele" (Wikipédia, 2021).
           </Text>
           <Text style={styles.textList}>
             -Altura: 2.02 m
           </Text>
           <Text style={styles.textList}>
             -Gênero: Masculino
           </Text>
           <Text style={styles.textList}>
             -Peso: 200 kg
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