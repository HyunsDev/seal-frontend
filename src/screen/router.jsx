import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function Router(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<>0</>} />
                <Route path='/123' element={<>123</>} />
            </Routes>
        </BrowserRouter>
    )
}