import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function Router(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/signin/*' element={<>0</>} />
                <Route path='/signup/*' element={<>0</>} />                
                <Route path='/post/*' element={<></>} />
            </Routes>
        </BrowserRouter>
    )
}