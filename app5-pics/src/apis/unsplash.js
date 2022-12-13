import axios from "axios";

const ACCESS_KEY =
	"34c0963fe0613ab22857d5b31956b2bfc161ae92e0ced80c3949ce5cd0455a6b";

const unsplash = axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: `Client-ID ${ACCESS_KEY}`,
	},
});

export default unsplash;

export const searchImages = async (term) => {
	const response = await unsplash.get("/search/photos", {
		params: {
			query: term,
		},
	});

	return response.data.results;
};
