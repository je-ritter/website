import './App.css';
import jake_bw from './img/JR_BW_Photo.jpeg';

function App() {
  return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav nav-justified">
        <div className="container">
            <a className="navbar-brand" href="./index.html"><div className="fancyj">Jake Ritter</div></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a href="./index.html" className="nav-link  active">Home</a>
                    </li> 
                    <li className="nav-item">
                        <a className="nav-link {{about_link_active}}" href="./about.html">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link {{blog_link_active}}" href="./blog.html"></a>
                    </li>
                </ul>
            </div>
        </div>
   
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
