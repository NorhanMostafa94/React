import React from 'react';
// import logo from './logo.svg';
import './App.css';
import data from './data';
import './style.css';
import MoviesList from './Component/Movies/list';
import {Container, Row} from 'react-bootstrap';

const App = props => <Container>
<Row className="justify-content-md-center"><MoviesList data={data}/></Row></Container>

//   const { Title, Year, Type, Poster } = props;
//   return <div className="card-team">
//     <div className="card-team__body">
//       <img src={Poster === 'N/A' ? 'http://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/seville-01-1280x1280.jpg' : Poster} alt=""></img>
//     </div>
//     <div className="card-team__footer text-center">
//       <h5 className="footer__title">{Title}</h5>
//       <p>{Year}</p>
//       <p>{Type}</p>
//     </div>
//   </div>
// }
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="container">
//           {
//             data.map(d => <Movie {...d} key={d.imdbID} />)
//           }
//           {/* <Movies data = {...data}></Movies> */}
//         </div>
//       </div>
//     );
//   }
// }

export default App;
