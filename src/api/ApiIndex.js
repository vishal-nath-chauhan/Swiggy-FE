import { apiClient } from '.';
import { URIS } from './URL';

const getAllData = (payload) => apiClient.get(URIS.GETDATA, payload);

export const apis = {
	getAllData,
};
