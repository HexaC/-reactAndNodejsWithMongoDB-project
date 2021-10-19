import { registerNewAccount } from '../helpers/FetchHelper';
import { toast } from 'react-toastify';
import { Container } from 'react-bootstrap';
import SimpleRegistrationComp from "../components/simple-registration/SimpleRegistrationComp";
import CreateCardComp from '../components/my-cards/CreateCardComp';
import { useState } from 'react';


function BusinessRegistrationPage () {
    const [isStep1,setIsStep1] = useState(true);
    return  <Container>
                {isStep1&&   
                <SimpleRegistrationComp clickHandler={registerUser} text="Next"></SimpleRegistrationComp>
                }
                    {
                        !isStep1&& <CreateCardComp clickHandler={redirect}></CreateCardComp>
                    }
           </Container>;

function  registerUser(data) {
    registerNewAccount(data,
        (data)=>{
          if(data._id){
                toast('Account Created Successfully');
                setIsStep1(false);
            }
            else
            {
                toast('Error Account was not created, Please try again later');
            }
        });
 }
       function redirect() {
            const refresh = new Promise((res, rej)=>{
                res();
            });
            refresh.then(()=>{window.location.replace("http://localhost:3001/home")})}
}

export default BusinessRegistrationPage;