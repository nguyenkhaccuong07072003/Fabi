// Cart.js
import React, { useEffect, useState, useRef } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function Cart() {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [refreshing, setRefreshing] = useState(false);
    const scrollViewRef = useRef(null);
    const isFocused = useIsFocused();
    const navigation = useNavigation();

    const getCartFromStorage = async () => {
        try {
            const cartData = await AsyncStorage.getItem('cart');
            if (cartData !== null) {
                const cartItems = JSON.parse(cartData);
                setCart(cartItems);
            }
        } catch (error) {
            console.error('Lỗi khi lấy danh sách sản phẩm từ giỏ hàng:', error);
        }
    };

    const saveCartToStorage = async (updatedCart) => {
        try {
            await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
        } catch (error) {
            console.error('Lỗi khi lưu giỏ hàng vào AsyncStorage:', error);
        }
    };

    const convertPriceToNumber = (priceString) => {
        return parseFloat(priceString.replace('$', ''));
    };

    const calculateTotalPrice = (item) => {
        const price = convertPriceToNumber(item.price);
        return price * item.quantity;
    };

    const incrementQuantity = (item) => {
        const updatedCart = cart.map((cartItem) =>
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1, totalPrice: calculateTotalPrice(cartItem) }
                : cartItem
        );
        setCart(updatedCart);
        saveCartToStorage(updatedCart);
    };

    const decrementQuantity = (item) => {
        const updatedCart = cart.map((cartItem) =>
            cartItem.id === item.id
                ? {
                      ...cartItem,
                      quantity: cartItem.quantity - 1,
                      totalPrice: calculateTotalPrice(cartItem),
                  }
                : cartItem
        );
        setCart(updatedCart.filter((cartItem) => cartItem.quantity > 0));
        saveCartToStorage(updatedCart.filter((cartItem) => cartItem.quantity > 0));
    };

    const removeFromCart = (item) => {
        const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
        setCart(updatedCart);
        saveCartToStorage(updatedCart);
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await getCartFromStorage();
        setRefreshing(false);
    };

    useEffect(() => {
        getCartFromStorage();
    }, [isFocused]);

    useEffect(() => {
        const calculatedTotalPrice = cart.reduce((acc, item) => acc + calculateTotalPrice(item), 0);
        setTotalPrice(calculatedTotalPrice);
    }, [cart]);

    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    }, [totalPrice]);

    const navigateToBill = () => {
        navigation.navigate('Bill', { cart, totalPrice });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchback}>
                <Ionicons
                    name="arrow-back-sharp"
                    size={30}
                    color="black"
                    onPress={() => navigation.navigate('Home')}
                />
            </TouchableOpacity>
            <ScrollView
                ref={scrollViewRef}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                {cart.map((item) => (
                    <View key={item.id} style={styles.cartItem}>
                        <Image style={styles.cartItemImage} source={item.img} />
                        <View>
                            <Text>{item.name}</Text>
                            <Text>Giá: {item.price}</Text>
                            <Text>Số lượng: {item.quantity}</Text>
                            <Text>Tổng giá: {calculateTotalPrice(item)}</Text>
                            <TouchableOpacity onPress={() => incrementQuantity(item)}>
                                <Text>+</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => decrementQuantity(item)}>
                                <Text>-</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => removeFromCart(item)}>
                                <Text>Xóa</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Tổng tiền: ${totalPrice.toFixed(2)}</Text>
                </View>
                <TouchableOpacity style={styles.billButton} onPress={navigateToBill}>
                    <Text style={styles.billButtonText}>Thanh toán</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    touchback: {
        paddingHorizontal: 10,
        marginTop: 50,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    cartItemImage: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    totalContainer: {
        alignItems: 'flex-end',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    totalText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    billButton: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        margin: 10,
        alignItems: 'center',
    },
    billButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
