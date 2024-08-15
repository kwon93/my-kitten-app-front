import myKittenAxios from './axiosConfig.ts';
import { AxiosError } from 'axios';
import { list } from 'postcss';

export const get = async (url: string) => {
  try {
    await myKittenAxios.get(`http://localhost:3000/api/${url}`);
  } catch (error) {
    console.log(error);
  }
};

//TODO data TYPE 지정하기
export const post = async (url: string, data) => {
  return await myKittenAxios.post(url, data)
    .catch((error: AxiosError) => {
      const errorResponse = error.response?.data;
      return Promise.reject(errorResponse);
    });
};

export const patch = async () => {
};

export const deleteRequest = async () => {
  try {
    await myKittenAxios.delete('http://localhost:3000/api');
  } catch (error) {
    console.log(error);
  }
};
