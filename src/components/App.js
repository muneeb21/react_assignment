import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';

class App extends React.Component {
  componentDidMount (){
    const {store}=this.props;
    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();
    });
    // make api call
    // dispatch items
    store.dispatch({
     type:'ADD_MOVIES',
     movies:data
    });
    console.log('STATE',this.props.store.getState());
  }
  render() {
    const movies=this.props.store.getState();
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favorites</div>
        </div>

        <div className="list">
          {data.map((movie,index) =>(
            <MovieCard movie={movie} key={'movie-${index}'}/>
          ))}
        </div>
      </div>
    </div>
  );
  }
}

export default App;