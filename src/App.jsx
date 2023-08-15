import { useState, useEffect } from 'react'
import lib from './lib'
import Module from './Components/Module/Module.jsx';
import { Modules } from './Pages/Modules/Modules';
import { NavBar } from './Components/NavBar/NavBar';

function App() {
    const [modules , setModules ] = useState([]);

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">             
                    <NavBar/>
                    <Modules setModules={setModules} modules={modules}/>
                </div>
            </div>
        </div>
    )
}

export default App
