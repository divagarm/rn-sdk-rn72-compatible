import {mainAxios} from './apiWrapper';

export const updateDeviceDetailsApi = async payload => {
  const {data} = await mainAxios.put(
    '/api/devices/0f0fe90b-739f-42d4-9760-a62b663fecf5',
    payload,
  );

  return data;
};

// Define the API URL

export const getDeviceDetailsApi = async () => {
  const {data} = await mainAxios.get(
    '/api/devices/0f0fe90b-739f-42d4-9760-a62b663fecf5',
  );

  return data;
};
