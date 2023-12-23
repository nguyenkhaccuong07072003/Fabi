import { Image, StyleSheet, Text, TouchableOpacity, View , ScrollView} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
const avatar = require('../img/avatar/avatar.jpg');

export default function User({ navigation }) {
    const [selectedTab, setSelectedTab] = useState('User');
    return (
        <View style={{ flex: 1, color: '#000', backgroundColor: '#fff' }}>
            <TouchableOpacity style={styles.touchback}>
                <Ionicons name="arrow-back-sharp" size={30} color="black" onPress={() => navigation.navigate('Home')} />
            </TouchableOpacity>
            <View style={{ alignItems: 'center', top: 10, left: 0, }}>
                <Image source={avatar} style={{ width: 100, height: 100, borderRadius: 100, }} />
                <Text style={{ textAlign: 'center', fontSize: 20, marginBottom: 25 }}>Nguyễn Thảo</Text>
            </View>
            <TopTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        </View>
    )
}
function TopTab({ selectedTab, setSelectedTab }) {
    const Tab = createMaterialTopTabNavigator();
    const UserInfo = ({ navigation }) => {
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
            <View style={{flex:1,backgroundColor:'#fff'}} >
                <View style={{marginHorizontal:30, marginTop:30, gap:35, }}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between',}}>
                        <Text style={{fontSize:18}}>Ngày sinh:</Text>
                        <Text style={{fontSize:18, }}>07-07-2003</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{fontSize:18}}>Giới tính:</Text>
                        <Text style={{fontSize:18}}>Nữ</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{fontSize:18}}>Địa chỉ:</Text>
                        <Text style={{fontSize:18}}>Hà Nội</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{fontSize:18}}>Số điện thoại:</Text>
                        <Text style={{fontSize:18}}>0385996120</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{fontSize:18}}>Email:</Text>
                        <Text style={{fontSize:18}}>thao@gmail.com</Text>
                    </View>
                </View>
                <View style={{marginTop:153}}>
                    <TouchableOpacity onPress={logout}>
                        <Text style={{ fontSize: 20, textAlign: 'center', backgroundColor:'#ffebcd',height:70, padding:10,}}>Đăng xuất</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    const CartInfo = () => {
        return (
<View style={{flex:1, backgroundColor:'#fff'}}>
                <ScrollView>
                    <View style={{marginHorizontal:25, marginTop:20, gap:40, borderBottomWidth: 1, borderColor: '#ccc', }}>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <View style={{gap:5,}}>
                                <Text style={{fontSize:13}}>11 December | 12:30</Text>
                                <Text style={{fontSize:18}} >Milk Shake Matcha</Text>
                            </View>
                            <View style={{gap:5, marginTop:10,}}>
                                <Text style={{fontSize:18, marginLeft:10,}}>3$</Text>
                                <TouchableOpacity>
                                    <View style={{backgroundColor:'#324A59' ,borderRadius: 50, width:50, height:25, alignItems:"center",  marginBottom:15,}}>
                                        <Text style={{color: 'white', }}>Order</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{marginHorizontal:25, marginTop:20, gap:40, borderBottomWidth: 1, borderColor: '#ccc', }}>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <View style={{gap:5,}}>
                                <Text style={{fontSize:13}}>11 December | 18:00</Text>
                                <Text style={{fontSize:18}} >Milk Shake Chocolate</Text>
                            </View>
                            <View style={{gap:5, marginTop:10,}}>
                                <Text style={{fontSize:18, marginLeft:10,}}>3$</Text>
                                <TouchableOpacity >
                                    <View style={{backgroundColor:'#324A59' ,borderRadius: 50, width:50, height:25, alignItems:"center",  marginBottom:15,}}>
                                        <Text style={{color: 'white', }}>Order</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{marginHorizontal:25, marginTop:20, gap:40, borderBottomWidth: 1, borderColor: '#ccc', }}>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <View style={{gap:5,}}>
                                <Text style={{fontSize:13}}>12 December | 12:30</Text>
                                <Text style={{fontSize:18}} >Caramel Macchiato</Text>
                            </View>
                            <View style={{gap:5, marginTop:10,}}>
                                <Text style={{fontSize:18, marginLeft:10,}}>5$</Text>
                                <TouchableOpacity>
                                    <View style={{backgroundColor:'#324A59' ,borderRadius: 50, width:50, height:25, alignItems:"center",  marginBottom:15,}}>
                                        <Text style={{color: 'white', }}>Order</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{marginHorizontal:25, marginTop:20, gap:40, borderBottomWidth: 1, borderColor: '#ccc', }}>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <View style={{gap:5,}}>
                                <Text style={{fontSize:13}}>12 December | 18:00</Text>
                                <Text style={{fontSize:18}} >Milk Shake Matcha</Text>
                            </View>
                            <View style={{gap:5, marginTop:10,}}>
                                <Text style={{fontSize:18, marginLeft:10,}}>3$</Text>
                                <TouchableOpacity>
                                    <View style={{backgroundColor:'#324A59' ,borderRadius: 50, width:50, height:25, alignItems:"center",  marginBottom:15,}}>
                                        <Text style={{color: 'white', }}>Order</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{marginHorizontal:25, marginTop:20, gap:40, borderBottomWidth: 1, borderColor: '#ccc', }}>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <View style={{gap:5,}}>
                                <Text style={{fontSize:13}}>12 December | 18:00</Text>
                                <Text style={{fontSize:18}} >Cơm cháy rong biển</Text>
                            </View>
                            <View style={{gap:5, marginTop:10,}}>
                                <Text style={{fontSize:18, marginLeft:10,}}>1.8$</Text>
                                <TouchableOpacity>
                                    <View style={{backgroundColor:'#324A59' ,borderRadius: 50, width:50, height:25, alignItems:"center",  marginBottom:15,}}>
                                        <Text style={{color: 'white', }}>Order</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{marginHorizontal:25, marginTop:20, gap:40, borderBottomWidth: 1, borderColor: '#ccc', }}>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <View style={{gap:5,}}>
                                <Text style={{fontSize:13}}>13 December | 12:30</Text>
                                <Text style={{fontSize:18}} >Milk Shake Matcha</Text>
                            </View>
                            <View style={{gap:5, marginTop:10,}}>
                                <Text style={{fontSize:18, marginLeft:10,}}>3$</Text>
                                <TouchableOpacity>
                                    <View style={{backgroundColor:'#324A59' ,borderRadius: 50, width:50, height:25, alignItems:"center",  marginBottom:15,}}>
                                        <Text style={{color: 'white', }}>Order</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
    return (
        <Tab.Navigator screenOptions={{tabBarStyle: {  },
        tabBarLabelStyle: { color: 'black' },
        tabBarPosition : "bottom", 
        }}>
            <Tab.Screen name='User' 
                        component={UserInfo} 
                        options={{
                            tabBarLabel: ({ focused }) => (
                              <Text style={{ color: focused && selectedTab === 'User' ? 'red' : 'black' }}>User</Text>
                            ),
                          }}
                          listeners={{
                            tabPress: () => setSelectedTab('User'),
                          }} />
            <Tab.Screen name='cart' 
                        component={CartInfo}
                        options={{
                            tabBarLabel: ({ focused }) => (
                              <Text style={{ color: focused && selectedTab === 'cart' ? 'red' : 'black' }}>History</Text>
                            ),
                          }}
                          listeners={{
                            tabPress: () => setSelectedTab('cart'),
                          }} />
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    touchback: {
        paddingHorizontal: 10,
        marginTop: 50,
    },
});