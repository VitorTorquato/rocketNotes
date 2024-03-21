import {Routes , Route } from  'react-router-dom'


import { LogIn } from '../pages/Login';
import { SignUp } from '../pages/SignUp';


export function AuthRoutes(){
    return(
        <Routes>
            <Route path='/' element={<LogIn/>} />
            <Route path='/register' element={<SignUp/>} />
             />
        </Routes>
    )

}
