import { useState , useEffect } from 'react';
import { getMeData } from '../../helpers/FetchHelper';
import { Button } from 'react-bootstrap';
import '../../css/UserBar.css';
 

function UserBar(){
   const [user, set] = useState({});
   
   useEffect(()=>{ 
   getMeData(localStorage.getItem('token'), (data)=>{
    set(data);
    document.getElementById('buttons').style.display = "block";
    document.getElementById('box').style.height = "80px";
   });
   }, []);

   const email = user.email

   if(!email){
    user.email = "Please sing in."
   }

   
return ( 
    <div id="box">

        <div class="welcome">{user && 'Welcome, ' + user.email}</div>

        <div id="buttons">

                <Button className="btn btn-success" style={{marginLeft: 10}} onClick={()=>{
                    const redirect = new Promise((res, rej)=>{
                        res();
                    });
                    redirect.then(()=>{window.location.replace("http://localhost:3001/my-cards")})}}>Create New Card</Button>
                

                <Button variant="danger" style={{marginLeft: 10}} onClick={()=>{
                    const redirect = new Promise((res, rej)=>{
                        res(window.localStorage.clear());
                    });
                    redirect.then(()=>{window.location.replace("http://localhost:3001/home")})}}>Sing Out</Button>

        </div>

    </div>
    
    )
}

export default UserBar;