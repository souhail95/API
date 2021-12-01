import React , {useEffect,useState} from "react";
import "./App.css";
import axios from "axios";


function App1 () {
  /*state = {todos: []};*/
  const [listOfUser, setListOfUser] = useState([]);
  /*setListOfUser(listOfUser);*/
 useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {setListOfUser(response.data)}) 
     /*await new Promise(x => setTimeout(x,1000));*/
 },[listOfUser]);


     return(
         <div style={{marginTop:"4.8%",marginBottom:"4.8%",color:"white"}}>
             <h1 style={{display:"flex",justifyContent:"center"}}>JSON Placeholder items list</h1>
         <div className="container" >
             {listOfUser.length > 0 ? ( 
                 <div>
                     <ul className="list-group">
                         {listOfUser.map(todo =>(
                           <li key={todo.id}  className="list-group-item d-flex justify-content-between align">
                               <span style={{color:"blue"}}>{todo.id}</span> 
                               {todo.title}
                               <span>
                                   <input type="checkbox"  checked={todo.completed}  />
                               </span>
                            </li>
                         ) )}
                     </ul>
                 </div>):(<div className="spinner-border text-primary" role="status">
                     <span className="sr-only">Loading...</span>
                 </div>
             )} 
         </div>
         <div style={{height:"50px"}}></div>
         </div>
     );
  }


export default App1;