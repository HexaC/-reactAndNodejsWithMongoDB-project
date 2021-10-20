import { signInUser } from '../helpers/FetchHelper';
import { Container } from 'react-bootstrap';
import SignInComp from "../components/sign-in/SignInComp";
import { toast } from 'react-toastify';
import { getMeData } from '../helpers/FetchHelper';


function  SignInPage({set}) {
     return  <Container> 
                <SignInComp clickHandler={signIn}></SignInComp>
            </Container>;

            function signIn(data) {
                signInUser(data, (response)=>{
                    if(response.token)
                    {
                     toast('Welcome to the site!');
                     localStorage.setItem('token', response.token);
                     getMeData(response.token, (data)=>{
                        set(data);
                     });
                     function redirect() {
                        const redirect = new Promise((res, rej)=>{
                            res();
                        });
                        redirect.then(()=>{window.location.replace("http://localhost:3001/home")})}
                        redirect();
                    }
                    else
                    {
                     toast('Something went wrong, Please try again later');
                    }
                });
            }
}

export default SignInPage;