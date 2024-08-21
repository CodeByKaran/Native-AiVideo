import { View, Text,ScrollView } from "react-native";
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";
import {Link} from "expo-router"

const Bookmark = () => {
  return (
     <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-primary">
        <View className="h-[100vh] w-full flex justify-center items-center">
         <Text className="font-bold text-orange-600 text-4xl">
         bookmark screen
         </Text>
        </View>
      </SafeAreaView>
     </SafeAreaProvider>
   );
};

export default Bookmark;
