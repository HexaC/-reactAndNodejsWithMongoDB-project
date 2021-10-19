import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SignInPage from "../pages/SignInPage";
import BusinessRegistrationPage from '../pages/BusinessRegistrationPage';
import SimpleRegistrationPage from "../pages/SimpleRegistrationPage";
import MyCardsPage from "../pages/MyCardsPage";
import { BiHome, BiInfoSquare, BiPowerOff, BiPlus, BiBody, BiCarousel } from 'react-icons/bi';
 
 
export const tabs =[
    {
         name:'Home',
         href:'/home',
         icon:<BiHome style={{paddingBottom: 4, fontSize:20}}></BiHome>,
         page:HomePage,
         displayForLoggedin:true,
    },
    {
        name:'About',
        href:'/about',
        icon:<BiInfoSquare style={{paddingBottom: 4, fontSize:20}}></BiInfoSquare>,
        page:AboutPage,
        displayForLoggedin:true,
   },
   {
        name:'Simple Registration',
        href:'/simple-registration',
        icon:<BiPlus style={{paddingBottom: 4, fontSize:20}}></BiPlus>,
        page:SimpleRegistrationPage,
        displayForLoggedin:false
    },
    {
        name:'Business Registration',
        href:'/business-registration',
        icon:<BiBody style={{paddingBottom: 4, fontSize:20}}></BiBody>,
        page:BusinessRegistrationPage,
        displayForLoggedin:false
    },
    {
        name:'My Cards',
        href:'/my-cards',
        icon:<BiCarousel style={{paddingBottom: 4, fontSize:20}}></BiCarousel>,
        page:MyCardsPage,
        displayForLoggedin:true,
        hideForLoggedout:true
    },
    {
        name:'Sign In',
        href:'/sign-in',
        icon:<BiPowerOff style={{paddingBottom: 4, fontSize:20}}></BiPowerOff>,
        page:SignInPage,
        displayForLoggedin:false
    }
];