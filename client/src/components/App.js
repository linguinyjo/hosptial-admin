import React from 'react';
import Header from './Header'

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Header user={this.state}/>
      </div>
    );
  } 
}

export default App;

