import { Client,Account,ID,createEmailPasswordSession,Databases,Avatars } from "react-native-appwrite";


export const config = {
  endPoint: "https://cloud.appwrite.io/v1",
  projectId: "66c34d8700056d3d1548",
  platform: "com.ai.video",
  databaseId: "66c34e930004034101af",
  userCollectionId: "66c34eb20033db218382",
  videoCollectionId: "66c34edb00208f449ca7"
};

const client = new Client();

client
  .setEndpoint(config.endPoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const databases = new Databases(client);
const avatars = new Avatars(client);


export const createUser = async (email, password, username) => {
  try {
   const res = await account.create(ID.unique(),email,password,username)
   if(!res){
      throw Error
   }
   await SignIn(email,password)
   const avatar = avatars.getInitials(username)
   const newUser = await databases.createDocument(
     config.databaseId,
     config.userCollectionId,
     ID.unique(),
     {
        email,
        username,
        password,
        avatar
     }
   )
   if(!newUser){
      throw Error
   }
   return newUser;
  } catch (error) {
     console.log(error)
     throw new Error(error)
  }
};


export const SignIn = async (email,password)=>{
   try {
    const session = await account.createEmailPasswordSession(email, password);
    if(!session){
       throw Error
    }
    return session;
   } catch (e) {
      console.log(e)
      throw new Error(e)
   }
}



export const getCurrentUser=async()=>{
   try {
      const result = await account.get()
      if(!result){
         throw Error
      }
      return result;
   } catch (e) {
      console.log(e)
      throw new Error(e)
   }
}