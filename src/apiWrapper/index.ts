// import axios from 'axios';
// import Utility from '../Utility';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

// export const mainAxios: any = axios.create({
//   baseURL: 'https://app2.keyless.rocks',
//   timeout: 15000,
// });

// const accessToken =
//   'eyJraWQiOiJkNVBtQ25CMitVS2xZNkg4S2RtNFwva2ZhRXNBY253VVpsczZCR25QYU5RST0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJlMTViYzQzNi1mYzZkLTRjMjktYjZjMi1iYmQ5NjE5MTMxOTYiLCJldmVudF9pZCI6IjUxYTM0MjU4LWQ1ZDgtNDczNC1iMjc2LThmYWVmYzhlM2MwZCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MjQ1MDg0ODAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX3VObjZQaFQ1cCIsImV4cCI6MTcyNDUxMjA4MCwiaWF0IjoxNzI0NTA4NDgwLCJqdGkiOiJkZTI4MjRlZS0wMTFjLTQ4MTUtYjJhMy1jMjBmZDNhODQ2MGEiLCJjbGllbnRfaWQiOiI0Y29ranZzbnJzNWdxaWdqcnRvbnM1OThubyIsInVzZXJuYW1lIjoiZTE1YmM0MzYtZmM2ZC00YzI5LWI2YzItYmJkOTYxOTEzMTk2In0.cBwNByBzTQHKYDseM23QTIjytLjOK4Zv4VzsbTY598s_74fWkjcV8RIlLGtzxj0IrtqXWi2E6TJSmDSLJ-UmWgdCqy912Ac2_5wURYvpxZ8fWhGcTdoaqcLqSU9KAhtM-9SnJUmngVXq_v-MhRbF0qgGo2kG0IKEBNvK0zqEc5_DZ8dBQLvcj1O2FeDpfTrU5dMB4FlFt598X-ykQTNZqehzJcFykPeA3LgW-CoEsXlqjGVlEKUKic1QDTm4MUBp8i46OP6fSvERMXkiABdMx50eqbHduiUb-YkiGSZj0GqHJlCdY0sRHJwO1OqqntpIv5wAsI5cuSDCu7a3LwEQkg';
// const requestInterceptor = {
//   onSuccess: async (config: any) => {
//     try {
//       config.headers.Authorization = accessToken;
//       if (Utility.isNotEmpty(config.headers['X-Custom-Header'])) {
//         config.headers['X-Custom-Header'] = `keyless/9.0.1${config?.url}`;
//       }
//     } catch (error) {
//       console.log('error in axios.interceptors.request', error);
//     }

//     console.log('request', config);
//     return config;
//   },
//   onError: (error: any): any => {
//     Promise.reject(error);
//   },
// };

// mainAxios.interceptors.request.use(
//   requestInterceptor.onSuccess,
//   requestInterceptor.onError,
// );

// const responseInterceptor = {
//   onSuccess: (response: any): any => {
//     console.log('response', response);

//     return response;
//   },
//   onError: async (error: any) => {
//     console.log('Error in ApiWrapper, API:', error);

//     return Promise.reject(error);
//   },
// };

// mainAxios.interceptors.response.use(
//   responseInterceptor.onSuccess,
//   responseInterceptor.onError,
// );
