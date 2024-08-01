import myKittenAxios from './axiosConfig.ts';

//TODO
const get = async () => {
  try {
    await myKittenAxios.get('http://localhost:3000/api');
  } catch (error) {
    console.log(error);
  }
};