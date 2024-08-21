import { View, Text, ScrollView,Image ,Alert} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField.jsx";
import { useState,useContext } from "react";
import CustomButton from "../../components/CustomButton.jsx"
import {Link,router} from "expo-router"
import AppLogo from "../../assets/images/applogo.png"
import {SignIn} from "../../libs/appwrite.js"
import {useGlobalContext} from "../../context/GlobalProvider.js"


const SignInScreen = () => {
   
  const {setUser,setIsLogged} = useGlobalContext()
  const [isSubmitting,setIsSubmitting] = useState(false)
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const submit = async()=>{
     setIsSubmitting(true)
     const {email,password} = form;
     if( !email || !password){
        Alert.alert("Error","all field required")
     }
     try{
      const session = await SignIn(email,password)
      setUser(session)
      setIsLogged(true)
      router.replace("/home")
     }catch(error){
       console.log(error) 
       Alert.alert("Error",error.message || "something went wrong ")
     }finally{
       setIsSubmitting(false) 
     }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-primary">
        <ScrollView
          contentContainerStyle={{
            padding: 16
          }}
        >
                  
          <View className="min-h-[85vh] w-full flex justify-center items-center ">
            <Text className="text-3xl font-pregular text-secondary tracking-tighter whitespace-nowrap text-left w-full">
              Welcome Back to AI video
              </Text>              
              <Text className="text-sm text-gray-200 font-plight mt-2 whitespace-nowrap w-full text-left">
                Access your AI-powered video creations and explore the future of digital art. Sign in to continue your journey
            </Text>
            <FormField
              label="Email"
              text={form.email}
              placeholder="Enter your email..."
              handleTextChange={text =>
                setForm(form => ({ ...form, email: text }))
              }
              boxStyles="mt-1"
              keyboardType="email-address"
            />
            <FormField
              label="Password"
              text={form.password}
              placeholder="Enter password"
              handleTextChange={text =>
                setForm(form => ({ ...form, password: text }))
              }
              boxStyles="mt-1"
              keyboardType="default"
            />
         <CustomButton 
           title="Sign In"
           handlePress={submit}
           containerStyles="w-full mt-9"
           textStyles="text-slate-900"
           isLoading={isSubmitting}
          />
          <Text className="text-base font-pregular text-gray-200 mt-6">
           Not have an Account ? {" "}
           <Link href="/sign-up" className="font-psemibold text-blue-500">
            Sign Up
           </Link>
          </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SignInScreen;
