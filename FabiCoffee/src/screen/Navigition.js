import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import Home from './Home'
import Cart from './Cart'
import Notification from './Notification'
import User from './User'
import Coffee from './Coffee'
import Milk from './Milk'
import Smoothie from './Smoothie'
import Tea from './Tea'
import Other from './Others'
import Product_Detail from './Product_Detail'
import Snack from './Snack';
const Tab = createBottomTabNavigator();
export default function Navigition() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === "Cart") {
                        iconName = focused ? 'cart-arrow-down' : 'cart-plus';
                    } else if (route.name === "Gợi Ý") {
                        iconName = focused ? 'star' : 'star-o';
                    } else if (route.name === "Notification") {
                        iconName = focused ? 'bell' : 'bell-o';
                    } else if (route.name === "User") {
                        iconName = focused ? 'user-circle' : 'user-circle-o';
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'red',
                tabBarStyle: { backgroundColor: '#61EBEB' },
                tabBarInactiveTintColor: '#000',
            })}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }}/>
            <Tab.Screen name="Notification" component={Notification} options={{ headerShown: false }}/>
            <Tab.Screen name="User" component={User} options={{ headerShown: false }}/> 
            <Tab.Screen name="Coffee" component={Coffee} options={{ tabBarButton: () => null }} />
            <Tab.Screen name="Milk" component={Milk} options={{ tabBarButton: () => null }} />
            <Tab.Screen name="Smoothie" component={Smoothie} options={{ tabBarButton: () => null }} />
            <Tab.Screen name="Tea" component={Tea} options={{ tabBarButton: () => null }} />
            <Tab.Screen name="Snack" component={Snack} options={{ tabBarButton: () => null }} />
            <Tab.Screen name="Other" component={Other} options={{ tabBarButton: () => null }} />
            <Tab.Screen name="Product_Detail" component={Product_Detail} options={{ tabBarButton: () => null, headerShown: false }} />
        </Tab.Navigator>
    )
}

