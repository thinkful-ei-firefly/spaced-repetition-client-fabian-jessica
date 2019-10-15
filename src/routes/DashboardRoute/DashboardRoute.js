import React, { Component } from 'react'
import DashboardApiService  from '../../services/dashboard-api-service'

class DashboardRoute extends Component {
  render() {
    DashboardApiService.getLanguaje()
      .then(res => console.log(res))
    return (
      <section>
        implement and style me
      </section>
    );
  }
}

export default DashboardRoute
