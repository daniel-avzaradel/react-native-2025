import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text } from 'react-native'

interface TabIconProps {
  title: string;
  icon: any;
  focused: boolean;
}

const TabIcon = (props: TabIconProps) => {
  return (
    <ImageBackground
      source={props.focused && images.highlight}
      className='flex flex-row w-full flex-1 min-w-[110px] min-h-14 mt4 justify-center items-center rounded-full overflow-hidden'
    >
      <Image source={props.icon} tintColor={"#151312"} className='size-5' />
      <Text className="text-secondary text-base font-semibold ml-2">{props.title}</Text>
    </ImageBackground>
  )
}

const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.home}
              title="Home"
            />
          )
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.search}
              title="Search"
            />
          )
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.save}
              title="Saved"
            />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.person}
              title="Profile"
            />
          )
        }}
      />
    </Tabs>
  )
}

export default _Layout