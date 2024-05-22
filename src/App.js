import React from "react";
import Index from './project/Index'
import Success from "./project/page/success/Sucess";
import {Route, Routes } from 'react-router-dom';

const App = () =>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/success/:email" element={<Success />} />
        </Routes>
        </>
    )
}

export default App;