import myKittenAxios from './axiosConfig.ts';

export const get = async (url: string) => {
  try {
    await myKittenAxios.get(`http://localhost:3000/api/${url}`);
  } catch (error) {
    console.log(error);
  }
};

export const post = async (url: string) => {
  try {
    return await myKittenAxios.post(`api/${url}`);
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
