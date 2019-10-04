import React from 'react'

class Dashboard extends React.Component {
  render() {
    return (
      <div className='container' style={{marginTop: "7rem"}}>
        <div className='jumbotron sm' style={{border: 'solid', paddingBottom: "200px"}}>
          <div className='row justify-content-around'>
            <div class="col-lg-4 col-sm-4">
              <a href="/patients"><i class="fas fa-user-injured fa-4x icon"></i></a>
            </div>
            <div class="col-lg-4 col-sm-4">
              <a href="/schedule"><i class="fas fa-calendar-alt fa-4x icon"></i></a>  
            </div>
            <div class="col-lg-4 col-sm-4">
              <a href="/schedule"><i class="fas fa-procedures fa-4x icon"></i></a>  
            </div>
          </div>
          <div className='row'>
            <div class ="col-lg-4 col-sm-4">
              <a href="/schedule"><i class="fas fa-vials fa-4x icon"></i></a>  
            </div>
            <div class ="col-lg-4 col-sm-4">
             <a href="/schedule"><i class="fas fa-won-sign fa-4x icon"></i></a>  
            </div>
            <div class ="col-lg-4 col-sm-4">
              <a href="/schedule"><i class="fas fa-bed fa-4x icon"></i></a>  
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}

export default Dashboard