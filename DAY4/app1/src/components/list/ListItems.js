import React,{useState} from 'react';
function ListItems ()
{
    const [students]=useState([{id:1,name:'Joanna',age:19},
{id:2,name:"Keerthana",age: 20},{id:3,name:"Jaseema",age:19}])
return(
    <div>
        <ul style={{listStyleType:"none"}}>
            {students.map((stu)=>(
                <li key={stu.id}>
              <h1>ID:{stu.id}</h1>  
                
                
                 <p> {stu.name}</p>
                  {stu.age}
                </li>
            )

            )}
        </ul>
    </div>

)
}
export default ListItems