// // AuthService.js
// import * as SecureStore from 'expo-secure-store';

// const TOKEN_KEY = 'authToken';

// export const storeAuthToken = async (token) => {
//   await SecureStore.setItemAsync(TOKEN_KEY, token);
//   console.log("done")
// };

// export const getAuthToken = async () => {
//   return await SecureStore.getItemAsync(TOKEN_KEY);
// };

// export const removeAuthToken = async () => {
//   await SecureStore.deleteItemAsync(TOKEN_KEY);
// };