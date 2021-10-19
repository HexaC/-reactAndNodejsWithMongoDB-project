import { ToastContainer } from 'react-toastify';
import SinglePageAppComp from "./components/navigation/SinglePageAppComp";
import { useState , useEffect } from 'react';
import { getMeData } from './helpers/FetchHelper';
import Footer from './components/footer/Footer';
import UserBar from './components/user-bar/UserBar';
import BackToTop from './components/back-to-top/BackToTop';


function App(){
   const [user, set] = useState({});
   
   useEffect(()=>{ 
   getMeData(localStorage.getItem('token'), (data)=>{
    set(data);
   });
   }, []);

return <div style={{backgroundColor: "#F2F2F2"}} className="App">

            <div class="userBar" style={{backgroundColor: "#191c1f", color: "#fff"}}><UserBar></UserBar></div>

            <SinglePageAppComp set={set} user={user}></SinglePageAppComp>

            <ToastContainer></ToastContainer>

            <BackToTop></BackToTop>

            <Footer>Footer</Footer>
    </div>
}

export default App;