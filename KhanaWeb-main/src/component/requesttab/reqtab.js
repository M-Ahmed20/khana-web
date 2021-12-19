import React ,{useState,useEffect} from "react";
import { db, addDoc,deleteField,deleteDoc,doc, getDocs, collection } from "../router/firebase";

import "./reqtab.css"
export default function Reqtab(){
    
    const [myreq, setMyreq] = useState([]);
    const Accept=()=>{
                   





                    
    }

    function reject(){
        alert("reject")
    }
    




    useEffect(async () => {

        let getreq = collection(db, 'Needy-People-Request');

        let allreq = await getDocs(getreq);
        let myreqclone = myreq.slice(0);
        allreq.forEach((doc) => {
            myreqclone.push(doc.data());
        });
        setMyreq(myreqclone);


    }, [])

    return (
        <div>


        <h1 className="h1" style={{color:"white",textAlign:"center"}}>ALL Request From Poor People</h1>
<div style={{marginTop:30,}}>


        <table >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Father</th>
                    
                    <th>CNIC</th>
                    <th>Family Member</th>
                    <th>He want </th>
                    <th> Action</th>



                </tr>
            </thead>
            <tbody>
                {
                    myreq.map(({ name,fname,DOB,cnic,pakages,familymembercount }, index) => (
                        <tr key={name + index}>
                            <td>{name}</td>
                            <td>{fname}</td>
                            
                            <td>{cnic}</td>
                            <td>{familymembercount}</td>
                            <td>{pakages}</td>
                            <td><p style={{border:"2px",backgroundColor:"black"}} onClick={Accept}>Accept</p> <p   style={{border:"2px",backgroundColor:"black"}} onClick={reject}>reject</p></td>





                        </tr>
                    ))
                }
            </tbody>

        </table>
</div>

            
    {/* {myreq.map(({ name,fname,DOB,cnic,pakages,familymembercount }, index) => {

        return(
            <div style={{marginTop:"30px",border:2,borderColor:"white",color:"white"}}>
                <h1>  Mr{name}</h1>
                <p>S/D Of:{fname}</p>
                <p>Date Of Birth :{DOB}</p>
                <p>CNIC:{cnic}</p>
                <p>WANT:{pakages}</p>
                <p>Family Member:{familymembercount}</p>
        
            </div>
            )
            

    }) 
            
        } */}
        </div>


        )



}
    
    
    

    
    
