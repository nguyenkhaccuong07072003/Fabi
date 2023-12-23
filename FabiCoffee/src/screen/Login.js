import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet, Button
} from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';

const Login = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false)
  return (
    <View style={styles.login}>
      <TouchableOpacity style={styles.touchback}>
        <Ionicons name="arrow-back-sharp" size={30} color="black" onPress={() => navigation.navigate('WelCome')} />
      </TouchableOpacity>
      <Text style={styles.title}>Login</Text>
      <KeyboardAvoidingView>
        <View style={styles.usename}>
          <Text style={styles.text}>Username</Text>
          <TextInput style={styles.input} placeholder='Enter Username' />
        </View>

        <View style={styles.pass}>
          <Text style={styles.text}>Pass</Text>
          <TextInput style={styles.input} placeholder='Enter Password' />
        </View>
      </KeyboardAvoidingView>

      <View style={styles.comeon}>
        <TouchableOpacity onPress={() => navigation.navigate('Navigition')}>
          <View style={styles.clickcomeon}>
            <Text style={styles.textComeon}>Đăng nhập</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.contenttext}>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity>
          <Button
            title='Đăng ký'
            onPress={() => navigation.navigate('Register')} />
        </TouchableOpacity>
      </View>
      <View style={styles.line}></View>

      <View style={styles.request}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
        />
        <Text> I agree to all requests</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  touchback: {
    paddingHorizontal: 10,
    marginTop: 50,
  },
  title: {
    textAlign: 'center',
    fontSize: 36,
    marginTop: 10,
  },

  usename: {
    marginTop: 50,
    marginBottom: 20,
    marginLeft: 50,

  },
  pass: {
    marginBottom: 30,
    marginLeft: 50,
  },
  text: {
    fontSize: 16,
  },

  input: {
    width: 292,
    height: 41,
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 15, // placeholder lùi vào 1 chút
    borderRadius: 10,
  },

  clickcomeon: {
    width: 100,
    height: 45,
    backgroundColor: '#C6FAF3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  comeon: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  contenttextcolor: {
    color: '#FF0000',
  },

  line: {
    height: 1,
    backgroundColor: 'black',
    width: 150,
    alignSelf: 'center',
  },

  request: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },

})
export default Login;
