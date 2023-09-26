import Middles from "../Components/Middle/Middles";

import pic from '../Pictures/382487193_6497977000311680_4406200937899319478_n.jpg'
const Home = () => {
    return (
       
      <div >
          <div className="flex justify-center mb-20 bg-cover bg-no-repeat h-96 opacity-75 " style={{ backgroundImage: `url(${pic}) ` }}>
            <div className=" mt-12">
            <h2 className="text-3xl font-bold">I Grow By Helping People In Need</h2><br></br>
            <div className="ml-20">
            <input className="h-12 w-64 bg-slate-200 margin-2px rounded-lg" type="text" placeholder="Search here.." ></input> <button className="btn btn-primary">Search</button>
            </div>
            
        </div>
        
        </div>
        <Middles></Middles>
      </div>
        
        
    );
};

export default Home;