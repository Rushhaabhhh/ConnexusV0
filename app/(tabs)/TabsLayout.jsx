import { View, Text } from 'react-native'
import { Tabs, Redirect } from "expo-router";
import React from 'react';
// import {icons} from "../../constants"

const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View>
            <Iamge> source = {icon}</Iamge>
        </View>
    )
}

const TabsLayout = () => {
    return <>
    <Tabs>
        <Tabs.Screen name="Home" options = {{
            title : "Home",
            headerShown : false,
            tabBarIcon: ({color, focused}) => (
                <TabIcon icon = {icons.home}
                color = {color}
                name = "Home"
                focused = {focused}
                />
            ),
        }} />
    </Tabs>
    </>
}

export default TabsLayout