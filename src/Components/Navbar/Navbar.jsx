import { Link } from "react-router-dom";
import img1 from '../Pictures/Logo.png'


const Navbar = () => {
    return (
        <div className="flex p-8 justify-between">
            <div>
                <img className="w-28 h-10" src={img1}></img>

            </div>
            <div className="pt-1 flex gap-4">
                <Link to='/'>Home</Link>
                <Link to='/donation'>Donation</Link>
                <Link to='/statics'>Statistics</Link>

            </div>

            
            
        </div>
    );
};

export default Navbar;