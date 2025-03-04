import axios from 'axios';
import Cookies from 'js-cookie';

export const signUpApi = (signUpData) => {
  const request = axios
    .post(
      `${
        process.env.NODE_ENV === 'development'
          ? process.env.NEXT_PUBLIC_DEVELOP_API_BASE_URL
          : process.env.NEXT_PUBLIC_RELEASE_API_BASE_URL
      }auth/signup/`,
      signUpData
    )
    .then((res) => res)
    .catch((err) => err.response);
  return request;
};

export const emailAuthApi = (data) => {
  const EMAIL = {
    email: data,
  };
  const request = axios
    .post(
      `${
        process.env.NODE_ENV === 'development'
          ? process.env.NEXT_PUBLIC_DEVELOP_API_BASE_URL
          : process.env.NEXT_PUBLIC_RELEASE_API_BASE_URL
      }auth/signup/email/`,
      EMAIL
    )
    .then((res) => res.data)
    .catch((err) => console.log(err.response));
  return request;
};

export const overlapApi = (email) => {
  const request = axios
    .get(
      `${
        process.env.NODE_ENV === 'development'
          ? process.env.NEXT_PUBLIC_DEVELOP_API_BASE_URL
          : process.env.NEXT_PUBLIC_RELEASE_API_BASE_URL
      }auth/signup/email/duplicate/?data=${email}`
    )
    .then((res) => res)
    .catch((err) => console.log(err.response));
  return request;
};

export const nickNameOverlap = (nick) => {
  const request = axios
    .get(
      `${
        process.env.NODE_ENV === 'development'
          ? process.env.NEXT_PUBLIC_DEVELOP_API_BASE_URL
          : process.env.NEXT_PUBLIC_RELEASE_API_BASE_URL
      }auth/signup/nickname/duplicate/?data=${nick}`
    )
    .then((res) => res)
    .catch((err) => err.response);
  return request;
};

export const authCodeConfirm = (code) => {
  const token = Cookies.get('signing_token');
  const CODE = {
    code: code,
    signing_token: token,
  };
  const request = axios
    .post(
      `${
        process.env.NODE_ENV === 'development'
          ? process.env.NEXT_PUBLIC_DEVELOP_API_BASE_URL
          : process.env.NEXT_PUBLIC_RELEASE_API_BASE_URL
      }auth/verification-code/check/`,
      CODE
    )
    .then((res) => res)
    .catch((err) => err.response);
  return request;
};
