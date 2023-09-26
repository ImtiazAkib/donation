import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { saveDonation } from "../localstorage";


const Middledetails = () => {
    const middle = useLoaderData();
    const {Id} = useParams();
    const Idint = parseInt(Id)
    const middles = middle.find(middles => middles.Id === Idint);
    console.log(middles)

    const click = () =>{
        toast("Donate successfully",{
            position : "top-center"
        });
    }
    return (
        
            
            <div className="flex justify-center	">
                <div>
                <img className="mb-7" src={middles.picture}></img>
                <button onClick={()=>{click();saveDonation(Id)}} className="btn btn-primary absolute -mt-24 ml-5">Donate  {middles.price}</button>
                <h2 className="font-bold text-2xl mb-3">{middles.title}</h2>
                <h2>{middles.description}</h2>
                </div>
                <ToastContainer />
            </div>
            
        
    );
};

export default Middledetails;