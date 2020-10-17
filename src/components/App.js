import React from 'react';
import Navbar from './LeftCard';
import MovieCard from './RightCard';
import {data} from '../data';


function App(props) {
//   componentDidMount (){
//     const {store}=this.props;
//     store.subscribe(()=>{
//       console.log('UPDATED');
//       this.forceUpdate();
//     });
//     // make api call
//     // dispatch items
//     store.dispatch(addMovies(data));
//     console.log('STATE',this.props.store.getState());
//   }
//   render() {    
//     const {list}=this.props.store.getState();
  return (
    <div className="App">
      <div className="leftCard">
      <LeftCard detailsLeft={props.left} />
      </div>
      <div className="RightCard">
      <RightCard detailsRight={props.right} />
      </div>

      {/* <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favorites</div>
        </div>

        <div className="list">
          {list.map((movie,index) =>(
            <MovieCard movie={movie} key={'movie-${index}'}/>
          ))}
        </div>
      </div> */}
    </div>
  );
  }


export default App;