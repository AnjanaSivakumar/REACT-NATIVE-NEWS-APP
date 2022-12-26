import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";
// import Health from "../screens/Health";
// import Business from "../screens/Business";
// import Sports from "../screens/Sports";
// import Tech from "../screens/Tech";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: '#DA3349',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={30} />)
                }}
            />
            
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;