import { useEffect, useState } from "react";
import Middle from "../Middlee/Middle";


const Middles = () => {

    const [data,Setdata] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => Setdata(data))
    },[])
    return (
        <div>
            {/* <h2>Card lenght :{data.length}</h2> */}
            <div className="flex-row ml-24	 md:grid grid-cols-4 p-5 md:ml-10">
                {
                    data.map(datas => <Middle datas={datas} key={datas.id}></Middle>)
                }
            </div>
            
            
        </div>
    );
};

export default Middles;