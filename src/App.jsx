import { useState, useEffect } from 'react'
import lib from './lib'
import Module from './Components/Module/Module.jsx';
import { Modules } from './Pages/Modules/Modules';
import { NavBar } from './Components/NavBar/NavBar';
import { Route, Routes } from 'react-router';

function App() {
    const [modules , setModules ] = useState([]);

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">             
                    <NavBar/>
                    <Routes>
                        <Route path="/modules" element={<Modules setModules={setModules} modules={modules}/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App
