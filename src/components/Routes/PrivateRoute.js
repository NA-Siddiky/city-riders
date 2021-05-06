import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { RideContext } from '../Context/Context';

function PrivateRoute({ children, ...rest }) {
	const { userLogin } = useContext(RideContext);
	return (
		<Route
			{...rest}
			render={({ location }) =>
				userLogin ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;