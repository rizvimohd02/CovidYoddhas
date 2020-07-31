import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

const Home = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
  <View style={styles.center}>
  <ScrollView style={styles.scroll}>
  
  <Image
        style={styles.logo}
        source={require('../images/BusinessHome.png')}
  />   
   
      <TouchableOpacity onPress={() => navigation.navigate('Register Business')}>
        <Text style={styles.myBookingButton}>Register Business</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Manage Staff')}>
        <Text style={styles.myBookingButton}>Manage Staff</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Update Walk-in Count')}>
        <Text style={styles.myBookingButton}>Update Walk-in Count</Text>
      </TouchableOpacity>
        
  </ScrollView>
  </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,

  },
  
  scroll: {
    marginHorizontal: 10,
  },
  
  content: {
    fontFamily: 'IBMPlexSans-Light',
    color: '#323232',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16
  },

  logo: {
    width: '100%',
    height: 225,
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    resizeMode: 'contain'
    
  },
  myBookingButton: {
    backgroundColor: '#4682bf',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    overflow: 'hidden',
    borderRadius: 20,
    padding: 10,
    textAlign:'center',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    width: 250
  },
    
  buttonDisplay: {
    flexDirection: 'column',
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'space-evenly'
  }
  
});

export default Home;