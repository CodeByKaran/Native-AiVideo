import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import cards from "../assets/images/cards.png";
import CustomButton from "../components/CustomButton.jsx";
import { router, Redirect, Link } from "expo-router";
import { useState } from "react";
import {useGlobalContext} from "../context/GlobalProvider.js"


const Index = () => {
  
   const {loading,isLogged} = useGlobalContext()
   if(!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-primary">
        <ScrollView
          contentContainerStyle={{
            padding: 16
          }}
        >
          <View className="flex-1 items-center">
            <Text className="text-secondary font-pregular text-2xl w-full tracking-wide ml-2 mt-2">
              <Text className="text-4xl font-pregular text-red-400">AI</Text>{" "}
              video
            </Text>
            <Image
              source={cards}
              className="max-w-[380px] w-full h-[298px] mt-9"
              resizeMode="contain"
            />
            <Text className="mt-3 text-gray-200 text-base font-plight w-[95%] text-center whitespace-nowrap">
              The app aims to become the go-to platform for AI-generated visual
              art, inspiring users to explore the limits of AI creativity and to
              contribute their own unique visions to a growing collection of
              extraordinary digital art. This platform is not just about
              watching videos; it's about being part of a movement that
              celebrates and advances the intersection of technology and
              creativity.
            </Text>

            <CustomButton
              title="Continue With Email"
              containerStyles="mt-6 w-full"
              textStyles="text-slate-900"
              handlePress={() => router.push("/sign-in")}
            />
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Index;
