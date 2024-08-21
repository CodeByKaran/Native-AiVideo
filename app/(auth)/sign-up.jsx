import { View, Text, ScrollView ,Image,Alert} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField.jsx";
import { useState } from "react";
import CustomButton from "../../components/CustomButton.jsx";
import { Link,router } from "expo-router";
import AppLogo from "../../assets/images/applogo.png"
import {createUser} from "../../libs/appwrite.js"
import {useGlobalContext} from "../../context/GlobalProvider.js"


const SignUp = () => {
   const {setUser,setIsLogged} = useGlobalContext()
  const [isSubmitting,setIsSubmitting]=useState(false)
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });
  
  const submit = async()=>{
     setIsSubmitting(true)
     const {email,username,password} = form;
     if(!username || !email || !password){
        Alert.alert("Error","all field required")
     }
     try{
      const session = await createUser(email,username,password)
      console.log("user session",session)
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

          <View className="min-h-[95vh] w-full flex justify-center items-center ">
            <Text className="text-3xl font-pregular text-secondary tracking-tighter whitespace-nowrap text-left w-full">
              Join the Future of AI Videos
            </Text>
            <Text className="text-sm text-gray-200 font-plight mt-2 whitespace-nowrap w-full text-left">
              Create an account to explore, share, and be inspired by
              cutting-edge AI-generated visual art. Sign up now and become a
              part of our creative community!
            </Text>
            <FormField
              label="Username"
              text={form.username}
              placeholder="Enter username..."
              handleTextChange={text =>
                setForm(form => ({ ...form, username: text }))
              }
              boxStyles="mt-1"
              keyboardType="default"
            />            
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
              title="Sign Up"
              handlePress={submit}
              containerStyles="w-full mt-9"
              textStyles="text-slate-900"
              isLoading={isSubmitting}
            />
            <Text className="text-base font-pregular text-gray-200 mt-6">
              Already have an Account ?{" "}
              <Link href="/sign-in" className="font-psemibold text-blue-500">
                Sign In
              </Link>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SignUp;
