import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import DashboardApiService  from '../../services/dashboard-api-service'

class DashboardRoute extends Component {
  render() {
    DashboardApiService.getLanguaje()
      .then(res => console.log(res))
    return (
      <section>
        <Dashboard />
      </section>
    );
  }
}

export default DashboardRoute
