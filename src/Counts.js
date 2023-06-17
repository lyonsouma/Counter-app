import React,{useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Count = () =>{

    const [counter, setCounter] = useState(0)

    return(

        <div className='pt-5'>

            <h1 className='text-primary'>{counter}</h1>

            <div className='pt-3'>

                <button className='btn btn-primary mx-3' onClick={()=>setCounter(counter - 1)}>Decrease</button>
                <button className='btn btn-danger mx-3' onClick={()=>setCounter(0)}>Reset</button>
                <button className='btn btn-primary mx-3' onClick={()=>setCounter(counter + 1)}>Increase</button>

            </div>
        </div>

    )
}
export default Count