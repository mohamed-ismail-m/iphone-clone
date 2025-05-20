import { FaApple } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
// import { IoClose } from "react-icons/io5";

function Navbar(){
   
  

    return(
        <>
        <div className="flex justify-between">
        <h1 className="p-5"><FaApple className="size-8 " /></h1>
       
         <ul className=" flex gap-5 p-5 hidden md:flex ">
            <li><a href=""></a>Store</li>
            <li><a href=""></a>Mac</li>
            <li><a href=""></a>ipad</li>
            <li><a href=""></a>iphone</li>
            <li><a href=""></a>Watch</li>
            <li><a href=""></a>Airpods</li>
            <li><a href=""></a>Tv&Home</li>
            <li><a href=""></a>Accessories</li>
            <li><a href=""></a>Support</li>
        </ul>

         
        <div className="flex p-5 gap-5">
            <h1><FaSearch /></h1>
            <h1><FaBagShopping /></h1>

            <h1 id="menuicon" className="md:hidden"><button onClick={()=> setIsMobileMe}><IoMenu /></button></h1>

                    <div >
          {/* <button onClick={() => setIsMobileMenuOpen(false)}>
            <IoClose className="text-3xl" />
          </button> */}
        </div>

        </div>
        </div>
        </>
        
    
    )
     

}


export default Navbar;