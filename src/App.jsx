
import React, { useCallback, useState } from 'react';
import './App.css'
import Login from './components/Login';
import Admin from './components/Admin';
import { BrowserRouter, Routes,Route,Navigate } from 'react-router-dom';


//Protected Route component
const ProtectedRoute=({isAuth,children})=>{
    return isAuth?children:<Navigate to="/login" replace/>
}

// CRUD 

const addVehicle=(newVehicle)=>{
    setFleet((prev)=>[...prev,{...newVehicle,id:Date.now()}])
}

const updateDriver=useCallback((id)=>{
    const newName=prompt('Enter new driver name:');
    if(newName && newName.trim() !==""){
        setFleet((prev)=>prev.map((v)=>(v.id===id?{...v,driverName:newName}:v)))
    }
},[])

const toggleAvailability=useCallback((id)=>{
    setFleet((prev)=>prev.map((v)=>v.id===id?{...v,availability:v.availability==='Available'?'Unavailable':'Available'}:v))
},[]);

const deleteVehicle=useCallback((id)=>{
    if(window.confirm("Are you sure you want to delete this vehicle?")){
        setFleet()
    }
})


function App(){
    const [isAuthenticated, setIsAuthenticated]=useState(false);
    const [fleet, setFleet]=useState([]);
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login setAuth={setIsAuthenticated}/>} />
                <Route path='/admin' 
                element={<ProtectedRoute isAuth={isAuthenticated}>
                    <Admin fleet={fleet} onAdd={addVehicle} onUpdate={updateDriver} onToggle={toggleAvailability}/>
                </ProtectedRoute>} />
                <Route path='*' element={<Navigate to='/login'/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
