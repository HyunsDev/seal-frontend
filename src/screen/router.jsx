import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignIn } from './auth/signIn'
import { SignUp } from './auth/signUp'

export function Router(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/sign-in/*' element={<SignIn />} />
                <Route path='/sign-up/*' element={<SignUp />} />                
                <Route path='/post/*' element={<></>} />
                <Route path='/my' element={<></>} />
            </Routes>
        </BrowserRouter>
    )
}