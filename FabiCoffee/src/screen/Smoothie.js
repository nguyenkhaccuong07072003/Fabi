import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { data } from '../../data/product'
export default function Smoothie({ navigation }) {
    const { Smoothie } = data
    return (
        <View style={{ flex: 1 , backgroundColor: 'white'}}>
            {/* <Image
                style={styles.tinyLogo}
                source={require('../img/category/4.png')}
            /> */}
            <ScrollView>
                {Smoothie.map((item) => (
                    <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Product_Detail',{ product: item })}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.img}
                                source={item.img}
                            />
                            <View style={{
                                justifyContent: 'center',
                                gap: 10
                            }}>
                                <Text style={{
                                    fontWeight: '500',
                                    fontSize: 14
                                }}>
                                    {item.name}
                                </Text>
                                <Text>
                                    {item.price}
                                </Text>
                                <Text>
                                    {item.star}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {

        margin: 10,
        borderRadius: 10
    }
})