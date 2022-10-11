import './App.css';
import jake_bw from './img/JR_BW_Photo.jpeg';

function App() {
  return (
    <div className="row">
        <div className="background">
            <div className="container">
                <div className="row">    
                    <div className="front-page card">
                        <div className="row g-0">
                            <div className="front-page col-md-4">
                                <img src={jake_bw} className="img-fluid rounded-circle"/>
                            </div>
                            <div className="front-page col-md-8">
                                <div className="card-body"> 
                                    <h1 className="card-title">Jake Ritter</h1>
                                    <p className="card-text">
                                    Web Developer based in the Greater Salt Lake area.
                                    </p>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
  );
}

export default App;
