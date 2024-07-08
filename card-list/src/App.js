import './App.css';
import Descriptions from './Descriptions'
import Images from './Images';
import Prix from './Prix'
import Title from './Title';
import {data} from './data'

// import Navigation from './Navigation';
// import CardDetails from './CardDetails';


function App() {
  return (
    <div className="App">
      {/* <Navigation/>
      <CardDetails/> */}

        <Title title={data}/>
        <Images image={data}/>
        <Descriptions description={data}></Descriptions>
        <Prix esmElProps={data}/>
      





    </div>
  );
}

export default App;
