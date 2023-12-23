import { View, Text, Image, TouchableOpacity, Button, StyleSheet } from 'react-native'
import React from 'react'
const WelCome = ({ navigation }) => {
  const SkiiImage = require('./img/6493323_image.webp');
  return (
    <View>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.text}>App FaBi</Text>
      <View style={styles.comeon}>
        <TouchableOpacity>
          <View style={styles.clickcomeon}>
            <Button
              title='Come on'
              onPress={() => navigation.navigate('Login')} />
          </View>
        </TouchableOpacity>
      </View>

      <Image source={SkiiImage} style={styles.image} />
    </View>
  )
}

export default WelCome;
const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 36,
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    //fontFamily: 'italic',
  },
  clickcomeon: {
    width: 100,
    height: 45,
    backgroundColor: '#C6FAF3',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 150,
    marginTop: 15,
    borderRadius: 10,
  },

  image: {
    marginTop: 200,
    width: 400,
    height: 400,
  }
})
