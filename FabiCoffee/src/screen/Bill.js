// Bill.js
import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Bill({ route }) {
    const { cart, totalPrice } = route.params;
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.quantity}</Text>
            <Text style={styles.cell}>{item.price}</Text>
        </View>
    );

    const handlePayment = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Hóa đơn thanh toán</Text>
            <View style={styles.table}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Tên</Text>
                    <Text style={styles.headerText}>Số lượng</Text>
                    <Text style={styles.headerText}>Giá</Text>
                </View>
                <FlatList
                    data={cart}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.flatList}
                />
            </View>
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Tổng tiền thanh toán: ${totalPrice.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
                <Text style={styles.paymentButtonText}>Thanh toán</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    table: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#3498db',
        padding: 10,
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        padding: 10,
    },
    cell: {
        fontSize: 16,
    },
    flatList: {
        marginBottom: 20,
    },
    totalContainer: {
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    paymentButton: {
        backgroundColor: '#27ae60',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    paymentButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
