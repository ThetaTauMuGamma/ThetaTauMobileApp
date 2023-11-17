import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Dimensions, ScrollView, Image } from 'react-native';
import Navbar from "../components/navbar"
import Brother from "../components/brother"
import Extra from "../components/extra"
import BrotherData from "../data/brotherData.json"
const Brothers = () => {

  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}></Text>
        <SafeAreaView>
            <Text style={styles.title}>BROTHERS</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
              <View style={{flex: 1, height: 2, backgroundColor: '#501315'}} />
                <View style={{alignItems: 'center', width: '60%', backgroundColor: '#501315', marginBottom: 10}}>
                  <Text style={{color: 'white', fontSize: 25, paddingVertical: 5}}>E-Board</Text>
                </View>
              <View style={{flex: 1, height: 2, backgroundColor: '#501315'}} />
            </View>
            <Image style={styles.logo} source={require('../assets/theta_tau_coa.png')} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[0].description} linkedin={BrotherData.brotherData[0].linkedin} name={BrotherData.brotherData[0].name} title={BrotherData.brotherData[0].title} imageSource ={require("../assets/aryaman_ghosh.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[1].description} linkedin={BrotherData.brotherData[1].linkedin} name={BrotherData.brotherData[1].name} title={BrotherData.brotherData[1].title} imageSource ={require("../assets/gabriel.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[2].description} linkedin={BrotherData.brotherData[2].linkedin} name={BrotherData.brotherData[2].name} title={BrotherData.brotherData[2].title} imageSource ={require("../assets/Marissa_Gabbamonte.jpeg")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[3].description} linkedin={BrotherData.brotherData[3].linkedin} name={BrotherData.brotherData[3].name} title={BrotherData.brotherData[3].title} imageSource ={require("../assets/yuanjie.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[4].description} linkedin={BrotherData.brotherData[4].linkedin} name={BrotherData.brotherData[4].name} title={BrotherData.brotherData[4].title} imageSource ={require("../assets/3Karen_Cheng.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[5].description} linkedin={BrotherData.brotherData[5].linkedin} name={BrotherData.brotherData[5].name} title={BrotherData.brotherData[5].title} imageSource ={require("../assets/daniel_klein.png")} />

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
              <View style={{flex: 1, height: 2, backgroundColor: '#501315'}} />
                <View style={{alignItems: 'center', width: '60%', backgroundColor: '#501315', marginBottom: 10}}>
                  <Text style={{color: 'white', fontSize: 25, paddingVertical: 5}}>Active Brothers</Text>
                </View>
              <View style={{flex: 1, height: 2, backgroundColor: '#501315'}} />
            </View>

            <Brother style={styles.brother} bio={BrotherData.brotherData[6].description} linkedin={BrotherData.brotherData[6].linkedin} name={BrotherData.brotherData[6].name} title={BrotherData.brotherData[6].title} imageSource ={require("../assets/3Lior_Adjudanpor.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[7].description} linkedin={BrotherData.brotherData[7].linkedin} name={BrotherData.brotherData[7].name} title={BrotherData.brotherData[7].title} imageSource ={require("../assets/matthew_amato.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[8].description} linkedin={BrotherData.brotherData[8].linkedin} name={BrotherData.brotherData[8].name} title={BrotherData.brotherData[8].title} imageSource ={require("../assets/3William_Bizier.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[9].description} linkedin={BrotherData.brotherData[9].linkedin} name={BrotherData.brotherData[9].name} title={BrotherData.brotherData[9].title} imageSource ={require("../assets/lydia.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[10].description} linkedin={BrotherData.brotherData[10].linkedin} name={BrotherData.brotherData[10].name} title={BrotherData.brotherData[10].title} imageSource ={require("../assets/eliseD.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[11].description} linkedin={BrotherData.brotherData[11].linkedin} name={BrotherData.brotherData[11].name} title={BrotherData.brotherData[11].title} imageSource ={require("../assets/daniel_galdamez.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[13].description} linkedin={BrotherData.brotherData[13].linkedin} name={BrotherData.brotherData[13].name} title={BrotherData.brotherData[13].title} imageSource ={require("../assets/max_gustin.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[14].description} linkedin={BrotherData.brotherData[14].linkedin} name={BrotherData.brotherData[14].name} title={BrotherData.brotherData[14].title} imageSource ={require("../assets/jph.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[20].description} linkedin={BrotherData.brotherData[20].linkedin} name={BrotherData.brotherData[20].name} title={BrotherData.brotherData[20].title} imageSource ={require("../assets/edward.png")}/>
            <Brother style={styles.brother} bio={BrotherData.brotherData[17].description} linkedin={BrotherData.brotherData[17].linkedin} name={BrotherData.brotherData[17].name} title={BrotherData.brotherData[17].title} imageSource ={require("../assets/anna_kane.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[22].description} linkedin={BrotherData.brotherData[22].linkedin} name={BrotherData.brotherData[22].name} title={BrotherData.brotherData[22].title} imageSource ={require("../assets/bella.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[31].description} linkedin={BrotherData.brotherData[31].linkedin} name={BrotherData.brotherData[31].name} title={BrotherData.brotherData[31].title} imageSource ={require("../assets/jenny.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[32].description} linkedin={BrotherData.brotherData[32].linkedin} name={BrotherData.brotherData[32].name} title={BrotherData.brotherData[32].title} imageSource ={require("../assets/hao_zhu.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[19].description} linkedin={BrotherData.brotherData[19].linkedin} name={BrotherData.brotherData[19].name} title={BrotherData.brotherData[19].title} imageSource ={require("../assets/jeffrey_kou.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[25].description} linkedin={BrotherData.brotherData[25].linkedin} name={BrotherData.brotherData[25].name} title={BrotherData.brotherData[25].title} imageSource ={require("../assets/adrian_sin.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[26].description} linkedin={BrotherData.brotherData[26].linkedin} name={BrotherData.brotherData[26].name} title={BrotherData.brotherData[26].title} imageSource ={require("../assets/rrucha_singh.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[27].description} linkedin={BrotherData.brotherData[27].linkedin} name={BrotherData.brotherData[27].name} title={BrotherData.brotherData[27].title} imageSource ={require("../assets/justin_siwa.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[28].description} linkedin={BrotherData.brotherData[28].linkedin} name={BrotherData.brotherData[28].name} title={BrotherData.brotherData[28].title} imageSource ={require("../assets/chloe_tullius.png")} />
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
              <View style={{flex: 1, height: 2, backgroundColor: '#501315'}} />
                <View style={{alignItems: 'center', width: '60%', backgroundColor: '#501315', marginBottom: 10}}>
                  <Text style={{color: 'white', fontSize: 25, paddingVertical: 5}}>Psi Beta</Text>
                </View>
              <View style={{flex: 1, height: 2, backgroundColor: '#501315'}} />
            </View>
            <Brother style={styles.brother} bio={BrotherData.brotherData[15].description} linkedin={BrotherData.brotherData[15].linkedin} name={BrotherData.brotherData[15].name} title={BrotherData.brotherData[15].title} imageSource ={require("../assets/3Bushra_Khan.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[12].description} linkedin={BrotherData.brotherData[12].linkedin} name={BrotherData.brotherData[12].name} title={BrotherData.brotherData[12].title} imageSource ={require("../assets/3Abel_George.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[16].description} linkedin={BrotherData.brotherData[16].linkedin} name={BrotherData.brotherData[16].name} title={BrotherData.brotherData[16].title} imageSource ={require("../assets/3Ryan_Khan.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[18].description} linkedin={BrotherData.brotherData[18].linkedin} name={BrotherData.brotherData[18].name} title={BrotherData.brotherData[18].title} imageSource ={require("../assets/3Lana_Kim.jpg")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[21].description} linkedin={BrotherData.brotherData[21].linkedin} name={BrotherData.brotherData[21].name} title={BrotherData.brotherData[21].title} imageSource ={require("../assets/3Muhtasim_Mushfiq.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[23].description} linkedin={BrotherData.brotherData[23].linkedin} name={BrotherData.brotherData[23].name} title={BrotherData.brotherData[23].title} imageSource ={require("../assets/3Carlos_Pedraza.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[24].description} linkedin={BrotherData.brotherData[24].linkedin} name={BrotherData.brotherData[24].name} title={BrotherData.brotherData[24].title} imageSource ={require("../assets/3Quentin_Rotoli.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[29].description} linkedin={BrotherData.brotherData[29].linkedin} name={BrotherData.brotherData[29].name} title={BrotherData.brotherData[29].title} imageSource ={require("../assets/3Michael_VanAuken.png")} />
            <Brother style={styles.brother} bio={BrotherData.brotherData[30].description} linkedin={BrotherData.brotherData[30].linkedin} name={BrotherData.brotherData[30].name} title={BrotherData.brotherData[30].title} imageSource ={require("../assets/3Mathew_Yeung.png")} />
            

            <Extra />
        </SafeAreaView>
        </ScrollView>
      <Navbar />
    </View>
    

  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    scrollContent: {
      flexGrow: 1,
      paddingBottom: 80, // set a paddingBottom value greater than the navbar height
      marginBottom: 10
    },
  title: {
    height: 50,
    color: '#FFFFFF',
    backgroundColor: '#501315', 
    fontWeight: 'bold',
    fontSize: 30, 
    textAlign: 'center',
    width: Dimensions.get('window').width,
  },
  logo: {
    width: 25,
    height: 41,
    position: 'absolute',
    right: 20,
  },
  scrollView: {
    marginBottom: 10, // leave space for the navbar
  },
  rectangle: {
    height: 2,
    width: 200,
    backgroundColor: 'green',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
  }
});

export default Brothers;
