import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Product_Detail({ navigation, route }) {
    const { product } = route.params;
    const [cart, setCart] = useState([]);

    useEffect(() => {
        loadCartFromStorage();
    }, []);

    const loadCartFromStorage = async () => {
        try {
            const cartData = await AsyncStorage.getItem('cart');
            if (cartData !== null) {
                setCart(JSON.parse(cartData));
            }
        } catch (error) {
            console.error('Lỗi khi tải giỏ hàng từ AsyncStorage:', error);
        }
    };

    const saveCartToStorage = async (updatedCart) => {
        try {
            await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
        } catch (error) {
            console.error('Lỗi khi lưu giỏ hàng vào AsyncStorage:', error);
        }
    };

    const addToCart = () => {
        const isProductInCart = cart.some((item) => item.id === product.id);

        if (!isProductInCart) {
            const updatedCart = [...cart, { ...product, quantity: 1 }];
            setCart(updatedCart);
            saveCartToStorage(updatedCart);
            Alert.alert(
                'Thông báo',
                'Sản phẩm đã được thêm vào giỏ hàng',
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            navigation.navigate('Cart');
                        },
                    },
                ]
            );
            console.log('Sản phẩm đã được thêm vào giỏ hàng:');
        } else {
            // const updatedCart = cart.map((item) =>
            //   item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            // );
            // setCart(updatedCart);
            // saveCartToStorage(updatedCart);
            Alert.alert(
                'Thông báo',
                'Sản phẩm đã có trong giỏ hàng',
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            navigation.navigate('Cart');
                        },
                    },
                ]
            );
            // console.log('Số lượng sản phẩm đã được tăng:', product);
        }
    };
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TouchableOpacity style={styles.touchback}>
                <Ionicons name="arrow-back-sharp" size={30} color="black" onPress={() => navigation.navigate('Home')} />
            </TouchableOpacity>
            <Image
                style={styles.tinyLogo}
                source={product.img}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>
                    {product.name}
                </Text>
                <Text>
                    {product.star}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                <Text>
                    {product.price}
                </Text>
                <TouchableOpacity onPress={addToCart}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../img/icon/count.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', gap: 20, margin: 20 }}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../img/icon/commen.png')}
                />
                <Text>
                    Comment
                </Text>
            </View>
            <ScrollView>
                <View style={{
                    backgroundColor: '#D9D9D9',
                    padding: 20,
                    margin: 20,
                    borderRadius: 8
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../img/icon/user.png')}
                        />
                        <Text>
                            Lương Thùy Dung
                        </Text>
                    </View>
                    <Text style={{
                        fontWeight: '500'
                    }}>
                        Ngon
                    </Text>
                </View>
                <View style={{
                    backgroundColor: '#D9D9D9',
                    padding: 20,
                    margin: 20,
                    borderRadius: 8
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../img/icon/user.png')}
                        />
                        <Text>
                            Nguyễn Thảo
                        </Text>
                    </View>
                    <Text style={{
                        fontWeight: '500'
                    }}>
                        Tuyệt Vời
                    </Text>
                </View>
                <View style={{
                    backgroundColor: '#D9D9D9',
                    padding: 20,
                    margin: 20,
                    borderRadius: 8
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../img/icon/user.png')}
                        />
                        <Text>
                            Nguyễn Cường
                        </Text>
                    </View>
                    <Text style={{
                        fontWeight: '500'
                    }}>
                        Hoa quả rất là tươi nha.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    touchback: {
        paddingHorizontal: 10,
        marginTop: 50,
    },
    tinyLogo: {
        alignSelf: 'center'
    }
})