import { Route, Routes } from "react-router-dom";
import { Main } from "./main";
import { Write } from "./write";

export function PostRouter() {

    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/write" element={<Write />} />
        </Routes>
    )
}