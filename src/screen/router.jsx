import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { SignIn } from './auth/signIn'
import { SignUp } from './auth/signUp'
import { My} from './my/my'
import { PostRouter } from './post/router'

function Root() {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            navigate('/post')
        } else {
            navigate('/sign-in')
        }
    }, [navigate])

    return (<></>)
}

export function Router(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/sign-in/*' element={<SignIn />} />
                <Route path='/sign-up/*' element={<SignUp />} />                
                <Route path='/post/*' element={<PostRouter />} />
                <Route path='/my/*' element={<My />} />
                <Route path='/' element={<Root />} />
            </Routes>
        </BrowserRouter>
    )
}