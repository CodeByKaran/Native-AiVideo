import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.5}
      disabled={isLoading}
      className={`rounded-xl min-h-[62px] overflow-hidden ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
    >
      <LinearGradient
        colors={['#FF9C01', '#ffc066']}
        start={[0, 0]} // Gradient start (top-left)
        end={[1, 1]} // Gradient end (bottom-right)
        style={{ flex: 1 }} // Ensure gradient takes full space
      >
        <View className="flex-row justify-center items-center h-full w-full">
          <Text className={`text-white font-semibold text-lg ${textStyles}`}>
            {title}
          </Text>
          {isLoading && (
            <ActivityIndicator
              animating={isLoading}
              color="#fff"
              size="small"
              className="ml-2"
            />
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;
