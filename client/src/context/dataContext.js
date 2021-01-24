import createDataContext from './createDataContext';
import api from './api/api';

const dataReducer = (state, action) => {
	switch (action.type) {
		case 'get_ducks':
			return action.payload;

		default:
			return state;
	}
};
const getDucks = (dispatch) => async () => {
	const response = await api.get();
	dispatch({ type: 'get_ducks', payload: response.data.result });
};

export const { Provider, Context } = createDataContext(
	dataReducer,
	{ getDucks },
	[]
);
