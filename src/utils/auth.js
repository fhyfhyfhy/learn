import AsyncStorage from '@react-native-async-storage/async-storage';

const TokenKey = 'Token';

export async function setToken(token) {
  try {
    await AsyncStorage.setItem(TokenKey, token);
  } catch (e) {
    console.log(e);
  }
}

export async function getToken() {
  try {
    const value = await AsyncStorage.getItem(TokenKey);
    return value;
  } catch (e) {
    console.log(e);
  }
}

export async function removeToken() {
  try {
    await AsyncStorage.removeItem(TokenKey);
  } catch (e) {
    console.log(e);
  }
}
