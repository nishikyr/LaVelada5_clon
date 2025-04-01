import { Outlet } from "react-router-dom";
import Footer from "./footerComponent/Footer"
import Header from "./headerComponent/Header"


const Layout=()=>{

    return(
        <div className='container-fluid'>
            <div className="row">
            <h1 class="text-3xl font-bold underline">
                Hello world!
            </h1>
                <div className="col">
                    <Header/>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <Outlet />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Footer/>
                </div>
            </div>
        </div> 
    );
    

    
}
export default Layout