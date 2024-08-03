import myKittenAxios from './axiosConfig.ts';

export const get = async () => {
  try {
    await myKittenAxios.get('http://localhost:3000/api');
  } catch (error) {
    console.log(error);
  }
};

export const post = async () => {
  try {
    await myKittenAxios.post('http://localhost:3000/api');
  } catch (error) {
    console.log(error);
  }
};

export const patch = async () => {
  try {
    await myKittenAxios.patch('http://localhost:3000/api');
  } catch (error) {
    console.log(error);
  }
};

export const deleteRequest = async () => {
  try {
    await myKittenAxios.delete('http://localhost:3000/api');
  } catch (error) {
    console.log(error);
  }
};
