import { useState, useEffect } from 'react'
import lib from './lib'
import Module from './Components/Module/Module.jsx';
import { Modules } from './Pages/Modules/Modules';
import { NavBar } from './Components/NavBar/NavBar';
import { Route, Routes } from 'react-router';
import { Interruptions } from './Pages/Interruptions/Interruptions';
import { Calendrier } from './Pages/Calendrier/Calendrier';

function App() {
    const [modules , setModules ] = useState([]);

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">             
                    <NavBar/>
                    <Routes>
                        <Route path="/modules" element={<Modules setModules={setModules} modules={modules}/>} />
                        <Route path="/interruptions" element={<Interruptions/>} />
                        <Route path="/calendrier" element={<Calendrier modules={modules}/>} /> 
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App
