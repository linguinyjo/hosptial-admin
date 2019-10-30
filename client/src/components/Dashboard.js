import React from 'react'

class Dashboard extends React.Component {
  render() {
    return (
      <div className='container' style={{marginTop: "7rem"}}>
        <div className='jumbotron sm' style={{border: 'solid', paddingBottom: "200px"}}>
          <div className='row justify-content-around'>
            <div className="col-lg-4 col-sm-4">
              <a href="/patients"><i className="fas fa-user-injured fa-4x icon"></i></a>
            </div>
            <div className="col-lg-4 col-sm-4">
              <a href="/schedule"><i className="fas fa-calendar-alt fa-4x icon"></i></a>  
            </div>
            <div className="col-lg-4 col-sm-4">
              <a href="/referrals"><i className="fas fa-file fa-4x icon"></i></a>  
            </div>
          </div>
          <div className='row'>
            <div className ="col-lg-4 col-sm-4">
              <a href="/schedule"><i className="fas fa-vials fa-4x icon"></i></a>  
            </div>
            <div className ="col-lg-4 col-sm-4">
             <a href="/schedule"><i className="fas fa-won-sign fa-4x icon"></i></a>  
            </div>
            <div className ="col-lg-4 col-sm-4">
              <a href="/schedule"><i className="fas fa-bed fa-4x icon"></i></a>  
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard