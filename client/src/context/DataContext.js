import createDataContext from './createDataContext';
import axios from 'axios';

const dataReducer = (state, action) => {
	switch (action.type) {
		case 'get_data_id':
			return action.payload.data;
		case 'get_data':
			return action.payload;
		case 'add_data':
			return action.payload;
		case 'edit_data':
			return state.map((item) => {
				return item.id === action.payload.id ? action.payload : item;
			});
		default:
			return state;
	}
};

const getData = (dispatch) => {
	return async () => {
		try {
			const response = await axios.get('/duckRoute');
			dispatch({
				type: 'get_data',
				payload: { data: response.data.result },
			});
		} catch (e) {
			console.log(e);
		}
	};
};

const getDataById = (dispatch) => {
	return async (id) => {
		try {
			const response = await axios.get(`/duckRoute/${id}`);
			dispatch({
				type: 'get_data_id',
				payload: { data: response.data.result },
			});
		} catch (e) {
			console.log(e);
		}
	};
};

const addData = (dispatch) => {
	return async (data, coords) => {
		try {
			let res = await axios.post('/duckRoute', { data, coords });
			dispatch({ type: 'add_data', payload: res.data });
		} catch (e) {
			console.log(e);
		}
	};
};

const editData = (dispatch) => {
	return async (id, data) => {
		await axios.put('/duckRoute', { id, data });
		dispatch({ type: 'edit_data', payload: id, data });
	};
};

const deleteData = (dispatch) => {
	return async (_id) => {
		await axios.delete(`/duckRoute/${_id}`);
	};
};

export const { Context, Provider } = createDataContext(
	dataReducer,
	{ addData, editData, getData, deleteData, getDataById },
	[]
);
