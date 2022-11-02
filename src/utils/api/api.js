import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const getApiHandler = (data) => {
	const { url } = data;
	return axios
		.get(BASE_URL + url)
		.then((response) => {
			
			return response.data;
			
		})
		.catch((error) => {
			console.warn({ error });
		});
};

