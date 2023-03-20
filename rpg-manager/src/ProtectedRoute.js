import { Route, Navigate   } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
  const jwt = localStorage.getItem('jwt');
  return (
    <Route
      {...rest}
      render={(props) =>
        jwt ? (
          <Component {...props} />
        ) : (
          <Navigate  to={{ pathname: '/' }} />
        )
      }
    ></Route>
  );
}

export default ProtectedRoute;
