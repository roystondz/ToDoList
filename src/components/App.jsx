import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./Create";

function App(){
    return (
        <div>
        <Header/>
        <CreateNote/>
        <Footer/>
        </div>
    );
};

export default App;