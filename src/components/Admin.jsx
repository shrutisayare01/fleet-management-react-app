import React ,{memo, useState} from "react";

const FleetCard=memo(({vehicle,onUpdate,onToggle,onDelete})=>{
    console.log(`Rendering card: ${vehicle.regNo}`);
    return(
        <div className="card" style={{border:'1px solid #ddd',padding:'15px',borderRadius:'8px'}}>
            <img src='https://images.pexels.com/photos/170811/pexels-pho…170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='vehicle' style={{width:'100%'}}/>
            <h4>{vehicle.regNo}({vehicle.category})</h4>
            <p>Driver:{vehicle.driverName}</p>
            <p>Status:<span style={{color:vehicle.availability==='Available'?'green':'red'}}>{vehicle.availability}</span></p>
            <button onClick={()=>onUpdate(vehicle.id)}>Update Driver</button>
            <button onClick={()=>onToggle(vehicle.id)}>Toggle Status</button>
            <button onClick={()=>onDelete(vehicle.id)} style={{backgroundColor:'red',color:'white'}}>Delete</button>

        </div>
    )
})

function Admin({fleet,onAdd,onUpdate,onToggle,onDelete}){
       const [form, setForm]=({regNo:'',category:'Car',driverName:'',availability:'Available'});
       const handleSubmit=()=>{

       }

    return(
     

        <div>
            {/* Sidebar */}
            <aside>
                <h3>Add fleet</h3>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Reg no" value={form.regNo} 
                    onChange={e=>setForm({...form,regNo:e.target.value})}/><br/>
                    <select value={form.category} onChange={e=>setForm({...form,driverName:e.target.value})}>
                    <option>Auto</option>
                    <option>Car</option>
                    <option>Truck</option>
                    <option>Bus</option>
                    </select>
                    <br/><br/>
                    <button type='submit'>Add Vehicle</button>

                </form>
            </aside>

            {/* Main content */}
            <main style={{flex:1}}>
                <h2>Admin Dashboard</h2>
                <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)',gap:"15px"}}>
                    {fleet.map((v)=>(
                        <FleetCard
                        vehicle={v}
                        onUpdate={onUpdate}
                        onToggle={onToggle}
                        onDelete={onDelete}
                        />
                    ))}

                </div>
            </main>


        </div>
    )
}

export default Admin;