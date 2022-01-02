import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dashboard from '../dashboard/Dashboard';

const PrivateRoute = ({
  element: Component,
  auth: { isAuthenticated, loading },
}) => {
  if (!isAuthenticated && !loading) {
    return <Navigate to='/login' />;
  }

  return <Dashboard />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
