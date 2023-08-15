import { useState, useEffect } from 'react'
import lib from './lib'
import Module from './Components/Module/Module.jsx';
import { Modules } from './Pages/Modules/Modules';
import { NavBar } from './Components/NavBar/NavBar';

const currentDate = new Date();

function App() {

    const [modules , setModules ] = useState([]);
    const [debut, setDebut] = useState(currentDate.toISOString().split('T')[0]);

    

    const handle = (evt) => {
        // console.log(evt);
        setModules([...modules, { nom: "Accueil", debut: debut, duree: 37}])
    };

    const handleDeleteModule = (index) => {
        console.log("delete " + index)
        let tmp = [...modules]
        console.log("before ")
        console.log(tmp)
        tmp.splice(index,1)
        console.log("after ")
        console.log(tmp)
        setModules([...tmp])
    };

    const handleChangeModule = (index, data) => {
        console.log("change " + index)
        let tmp = [...modules]
        console.log("before ")
        console.log(tmp)
        tmp[index] = data
        console.log("after ")
        console.log(tmp)
        setModules([...tmp])
    };

    
    useEffect( () => {
        console.log(lib.consume("2023-07-01", 17));
        
    }, []);


    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                
                    <NavBar/>
                    <Modules/>

                    <div className="row">

                        <div className='col-4'>
                            <div className="form-floating">
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    id="floatingInput2" 
                                    placeholder="Date de début" 
                                    value={debut} 
                                    onChange={ e => setDebut(e.target.value) }
                                />
                                <label htmlFor="floatingInput2">Date de début</label>
                            </div>
                        </div>
                        <div className="col-4">
                            
                            <button className="btn btn-primary my-3 w-100" onClick={handle}>Ajouter un module</button>

                        </div>
                    </div>
                    {
                        modules.map( (module, index) =>
                            <Module key={index} data={module} onChange={(data) => {handleChangeModule(index, data)} } onDelete={()=> {handleDeleteModule(index)}}/>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default App
