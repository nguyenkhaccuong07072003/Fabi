import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { data } from '../../data/notification';
export default function Notification({ navigation }) {
    const {Noti} = data
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchback}>
                <Ionicons name="arrow-back-sharp" size={30} color="black"
                    onPress={() => navigation.navigate('Home')} />
            </TouchableOpacity>
            <Text style={styles.title}>Thông Báo</Text>
            <View style={{        
                        width: 313,
                        height: 200,
                        marginTop: 10,
                        marginLeft: 35,
                        fontWeight: '500',
                        fontSize: 14,}}>
                {Noti.map((item) => (
                    <View style={{flexDirection:"row", marginTop:17,borderBottomWidth: 1, borderColor: '#ccc',}}>
                        {/* <Text style={{fontSize:17}}>{item.id}.</Text> */}
                        <Text style={{fontSize:17, marginBottom:15,}}> {item.name} </Text>
                    </View>
                ))}

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#000',
        backgroundColor:'#fff'
    },
    touchback: {
        paddingHorizontal: 10,
        marginTop: 50,
      },
    title: {
        textAlign: 'center',
        fontSize: 24,
    },

})