
import { Routes, Route } from "react-router-dom";
import TestApi from "../../test/api";


function Router(){
    return(
        <Routes>
            <Route path="/test" element={<TestApi/>}/>
        </Routes>
    )
}



export default Router