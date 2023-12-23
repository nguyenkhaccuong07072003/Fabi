import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
const avatar = require('../img/avatar/avatar.jpg');

export default function User({ navigation }) {
    const logout = async () => {
        try {
            await AsyncStorage.removeItem('cart');
            navigation.navigate('Login')
        } catch (error) {
            // Xử lý lỗi khi xóa thông tin người dùng
            console.error('Lỗi khi đăng xuất:', error);
        }
    };
    return (
        <View style={{ flex: 1, color: '#000', backgroundColor: '#faebd7' }}>
            <TouchableOpacity style={styles.touchback}>
                <Ionicons name="arrow-back-sharp" size={30} color="black" onPress={() => navigation.navigate('Home')} />
            </TouchableOpacity>
            <View style={{ alignItems: 'center', top: 25, left: 0, }}>
                <Image source={avatar} style={{ width: 100, height: 100, borderRadius: 100, }} />
                <Text style={{ textAlign: 'center', fontSize: 20, marginBottom: 50 }}>Nguyễn Thảo</Text>
            </View>
            <TopTab />
            <View>
                <TouchableOpacity onPress={logout}>
                    <Text style={{ fontSize: 20, textAlign: 'center', paddingVertical: 13, }}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
function TopTab() {
    const Tab = createMaterialTopTabNavigator();
    const UserInfo = () => {
        return (
            <View style={{ flex: 1, backgroundColor: '#ffffe0' }} >
                <View style={{ marginHorizontal: 30, marginTop: 30, gap: 40, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 20 }}>Ngày sinh:</Text>
                        <Text style={{ fontSize: 20 }}>07-07-2003</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20 }}>Giới tính:</Text>
                        <Text style={{ fontSize: 20 }}>Nữ</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20 }}>Địa chỉ:</Text>
                        <Text style={{ fontSize: 20 }}>Hà Nội</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20 }}>Số điện thoại:</Text>
                        <Text style={{ fontSize: 20 }}>0385996120</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20 }}>Email:</Text>
                        <Text style={{ fontSize: 20 }}>thao@gmail.com</Text>
                    </View>
                </View>
            </View>
        )
    }
    const CartInfo = () => {
        return (
            <View style={{ flex: 1, backgroundColor: '#ffffe0' }}>

            </View>
        )
    }
    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: '#faebd7' }, }}>
            <Tab.Screen name='User' component={UserInfo} />
            <Tab.Screen name='cart' component={CartInfo} />
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    touchback: {
        paddingHorizontal: 10,
        marginTop: 50,
    },
});