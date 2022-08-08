import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function Router(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>123</Route>
                <Route path='/234'>234</Route>
            </Routes>
        </BrowserRouter>
    )
}