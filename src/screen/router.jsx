import { BrowserRouter, Route, Router } from 'react-router-dom'

export function MainRouter(props) {
    return (
        <BrowserRouter>
            <Router>
                <Route path='/'>123</Route>
            </Router>
        </BrowserRouter>
    )
}