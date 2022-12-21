import React,{useState} from 'react';
import './AgentCustomer.css'
import { useNavigate } from "react-router-dom";


const AgentCustomerDetails = () => {

    const[userDetails,setUserDetails] = useState({
      name:'',
      agentOrCustomer:'agent'
    });
    let navigate = useNavigate();
    const[agentCustomer,setAgentCustomer] = useState('agent');


    const handleSubmit = (e:any)=>{
        
                  e.preventDefault()
                  console.log('target',userDetails)
                  navigate('/chat', { state:{...userDetails}})
                  
    }

    const handleInputChange = (e:any)=>{
        e.preventDefault()
        const {name,value} = e.target;
        console.log(name,value)
        setUserDetails({
            ...userDetails,
            [name]:value 
        })
        
}

    return (
        <div className='formbo'>  
            <h1 className='formheading'>Tell us who you are</h1>
            <form onSubmit = {handleSubmit}>
                <label>whatis your name:
                    
                </label>
                <input type='text' value = {userDetails.name} name = 'name' onChange={handleInputChange}></input>
                <label> Are you Agent or customer?
               
                </label>
                <select value={userDetails.agentOrCustomer} name='agentOrCustomer' onChange={handleInputChange}>
                    <option value="agent">Agent</option>
                    <option value="customer">Customer</option>
                </select>
                {/* <Link to={{pathname:'/chat',state}}>Submit</Link> */}
              <button type='submit' >Submit</button>
            </form>

        </div>
    )

}


export default AgentCustomerDetails;