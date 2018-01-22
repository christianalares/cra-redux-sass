import { handleActions } from 'redux-actions'

export default handleActions({

	MY_REDUCER: (state, action) => {
		return ({
			...state,
			myState: action.payload
		})
	}

}, {
	myState: 'default value for myState'
})
