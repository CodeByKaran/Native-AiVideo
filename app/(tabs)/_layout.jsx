import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { View, Text, Image,Alert,Pressable } from "react-native";
import icons from "../../constants/icon.js";

const TabIcon = ({ icon, title, focused, color }) => {
   
  return (
    <View className="flex justify-center items-center gap-1 rounded-full w-fit h-fit p-1">
    <View className={`w-12 h-7 flex justify-center items-center rounded-2xl p-1 transition-all duration-300 ${focused&&"bg-gray-200/10"}`}>
      <Image
        source={icon}
        className="w-6 h-6 "
        resizeMode="contain"
        tintColor={color}
      />
   </View>
      <Text
        className={`text-gray-300 text-xs ${
          focused ? "font-psemibold" : "font-pregular"
        }`}
      >
        {title}
      </Text>
    </View>
  );
};



export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 76
          }
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                title="Home"
                icon={icons.home}
              />
            )
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                title="Bookmark"
                icon={icons.bookmark}
              />
            )
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                title="Create"
                icon={icons.create}
              />
            )
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                title="Profile"
                icon={icons.profile}
              />
            )
          }}
        />
      </Tabs>
    </>
  );
}
