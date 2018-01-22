import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './app.scss'

import { myAction } from '../../actions/app'

class App extends Component {
	handleButtonClick = () => {
		const { dispatch } = this.props
		dispatch( myAction('new state!') )
	}

	render() {
		const { myState } = this.props

		return (
			<div className={styles.app}>
				<h1>React app</h1>
				<p>{myState}</p>

				<button onClick={this.handleButtonClick}>Click me to change state</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		myState: state.app.myState
	}
}

export default connect(mapStateToProps)(App)
