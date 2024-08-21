import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

const FormField = ({
   label,
   text,
   handleTextChange,
   placeholder,
   labelStyles,
   boxStyles,
   keyboardType,
}) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View className="flex items-start w-full mt-5">
      <Text className={`text-base font-pregular text-gray-200 ml-2 ${labelStyles}`}>
        {label}
      </Text>
      <View className={`w-full min-h-[60px] rounded-xl bg-slate-800 relative flex flex-row  border border-primary focus:border-secondary px-2 justify-center ${boxStyles}`}>
        <TextInput
          className="flex-1 justify-center text-gray-100 placeholder:tracking-wider text-base px-2"
          value={text}
          onChangeText={text => handleTextChange(text)}
          secureTextEntry={label === "Password" && hidePassword}
          placeholder={placeholder}
          placeholderTextColor="#cccccc"
          keyboardType={keyboardType}
        />
        {label === "Password" && (
          <TouchableOpacity
            className="absolute right-4 h-full flex justify-center items-center"
            activeOpacity={0.7}
            onPress={() => setHidePassword(prev => !prev)}
          >
            <Text className="text-gray-300">{hidePassword ? "Show" : "Hide"}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
