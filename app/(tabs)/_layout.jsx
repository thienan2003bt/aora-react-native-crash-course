import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

import HomeIcon from '../../assets/icons/home.png';
import BookmarkIcon from '../../assets/icons/bookmark.png';
import CreateIcon from '../../assets/icons/plus.png';
import ProfileIcon from '../../assets/icons/profile.png';

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 64,
        }
      }}>
        <Tabs.Screen name='home' options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="Home" color={color} focused={focused} icon={HomeIcon} />
          )}}
        />

        <Tabs.Screen name='bookmark' options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="Bookmark" color={color} focused={focused} icon={BookmarkIcon} />
          )}}
        />

        <Tabs.Screen name='create' options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="create" color={color} focused={focused} icon={CreateIcon} />
          )}}
        />

        <Tabs.Screen name='profile' options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="profile" color={color} focused={focused} icon={ProfileIcon} />
          )}}
        />



        </Tabs>

      
    </>
  )
}

export default TabsLayout

const TabIcon = ({icon, color, name, focused }) => {
  return (<View className="items-center justify-center gap-2">
    <Image source={icon}
      resizeMode="contain" className="w-6 h-6"
      tintColor={color}
    />

    <Text
      className={`${focused ? "font-semibold" : "font-regular"} text-xs`}
      style={{ color: color }}
    >
      { name }
    </Text>
  </View>)
}