import { Container } from "react-bootstrap";
import SimpleRegistrationComp from "../components/simple-registration/SimpleRegistrationComp";
import { registerNewAccount } from "../helpers/FetchHelper";
import { toast } from 'react-toastify';


function  SimpleRegistrationPage () {
    return <Container> 
                 <SimpleRegistrationComp clickHandler={registerUser} 
                     text="Sign up" >
                </SimpleRegistrationComp>
             </Container>;

             function registerUser(data) {
                registerNewAccount(data,
                    (data)=>{
                      if(data._id){
                            toast('Account Created Successfully', window.setTimeout(()=> {window.location.replace('http://localhost:3001/sing-in');}, 3000));
                        }
                        else
                        {
                            toast('Error Account was not created, Please try again later');
                        }
                    });
             }
}

export default SimpleRegistrationPage;