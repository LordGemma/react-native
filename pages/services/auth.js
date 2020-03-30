import {baseUrl} from './constants';

export const authReq = async () => {
  try {
    const formData = new FormData();
    formData.append('loginname', 'VadymAminov');
    formData.append('password', '5863Edcf!');

    const response = await fetch(`${baseUrl}rt=a/account/login`, {
      method: 'POST',
      body: formData,
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
