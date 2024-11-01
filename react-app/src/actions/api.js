import axios from 'axios';

const baseUrl = "https://localhost:60528/api/"

export default {
	product(url = baseUrl + 'Product') {
		return {
			fetchAll: () => axios.get(url),
			fetchById: id => axios.get(url + id),
			create: newRecord => axios.post(url, newRecord),
			update: (id, updateRecord) => axios.put(url + id, updateRecord),
			delete: id => axios.delete(url + id)
		}
	},
	category(url = baseUrl + 'Category') {
		return {
			fetchAll: () => axios.get(url),
		
		}
	}
}