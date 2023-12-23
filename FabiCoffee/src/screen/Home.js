import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { data } from '../../data/hot'
export default function Home({ navigation }) {
  const { Hot } = data
  const { Snack } = data
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', marginTop: 50 }}>
      <View style={styles.header}>
        <TextInput style={{ width: 370, height: 30, backgroundColor: 'white', marginLeft: 10, borderRadius: 5, borderWidth: 1, }} placeholder='Search' />
      </View>

      <ScrollView horizontal style={{ flexDirection: 'row', marginLeft: 10, marginRight: 10, }} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Coffee')}>
          <Text style={{ color: '#000000', fontSize: 16, fontWeight: '600' }}>
            Coffee
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Milk')}>
          <Text style={{ color: '#000000', fontSize: 16, fontWeight: '600' }}>
            Milk shake
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Smoothie')}>
          <Text style={{ color: '#000000', fontSize: 16, fontWeight: '600' }}>
            Smoothie
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tea')}>
          <Text style={{ color: '#000000', fontSize: 16, fontWeight: '600' }}>
            Tea
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Snack')}>
          <Text style={{ color: '#000000', fontSize: 16, fontWeight: '600' }}>
            Snack
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Other')}>
          <Text style={{ color: '#000000', fontSize: 16, fontWeight: '600' }}>
            Other
          </Text>
        </TouchableOpacity>
      </ScrollView>


      <Text style={{ fontSize: 20, color: 'red', marginLeft: 10, marginTop: 20 }}>Recommmend</Text>
      <ScrollView horizontal style={{ flexDirection: 'row', }} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.product} onPress={() => navigation.navigate('Coffee')}>
          {Hot.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Product_Detail', { product: item })} style={{ marginRight: 20 }}>
              <View style={{ flexDirection: 'column', width: 100, }}>
                <Image
                  style={styles.img}
                  source={item.img}
                />
                <View style={{
                  justifyContent: 'center',
                  gap: 10,
                  marginLeft: 11,
                }}>
                  <Text style={{
                    fontWeight: '500',
                    fontSize: 13
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
        </TouchableOpacity>
      </ScrollView>
      <Text style={{ fontSize: 20, color: 'red', marginLeft: 10, marginTop: 40 }}>Snacks</Text>
      <ScrollView horizontal style={{ flexDirection: 'row', }} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.product} onPress={() => navigation.navigate('Coffee')}>
          {Snack.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Product_Detail',{ product: item })} style={{ marginRight: 20 }}>
              <View style={{ flexDirection: 'column', width: 100, }}>
                <Image
                  style={styles.img}
                  source={item.img}
                />
                <View style={{
                  justifyContent: 'center',
                  gap: 10,
                  marginLeft: 11,
                }}>
                  <Text style={{
                    fontWeight: '500',
                    fontSize: 13
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
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header:
  {

  },
  button: {
    width: 100,
    height: 24,
    backgroundColor: '#ffebcd',
    alignItems: 'center',
    margin: 5,
    borderRadius: 16,
    marginTop: 10,
  },
  img: {
    width: 90,
    height: 150,
    margin: 10,
    borderRadius: 10
  },
  product: {
    flexDirection: 'row',
  },

})