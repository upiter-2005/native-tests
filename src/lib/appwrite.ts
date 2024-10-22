
import { Account, Client, ID } from 'react-native-appwrite'
const client = new Client()
export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.upiterweb.test",
  projectId: "6714ee1700316a6b5da7",
  databaseId: "6714f02300320273708f",
  userCollectionId: "6714f1dc003aaf17d9e3",
  videoCollectionId: "6714f2360013885050af",
  storageId: "6714f42b0003ac1fdcd0"
}


client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)


     const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
  .then(function (response) {
      console.log(response);
  }, function (error) {
      console.log(error);
  });
}
