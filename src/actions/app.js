const MY_REDUCER = 'MY_REDUCER'

export const myAction = payload => (dispatch) => {
	dispatch({
		type: MY_REDUCER,
		payload
	})
}
