import { useEffect, useState } from "react"
import { getStoredDonation } from "../localstorage"

 const Donation = () => {
    const [data,Setdata] = useState([]);
    const [jobs,setJobs]=useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => Setdata(data))
    },[])

    useEffect(()=>{
        const items= getStoredDonation();

    const donation=[];
    for (const id of items){
        const job=data.find(dt=>dt.Id==id);
        if(job){
            donation.push(job);
        }
    }
    setJobs(donation);
    },[data])

   console.log(jobs);
  return (
    <div className="flex-row ml-24	 md:grid grid-cols-4 p-5 md:ml-10">
               {
                jobs.map(donation=> <div key={donation.Id} className="flex justify-center	">
                <div>
                <img className="mb-7" src={donation.picture}></img>
                
                <h2 className="font-bold text-2xl mb-3">{donation.title}</h2>
                <h2>{donation.description}</h2>
                </div>
                
            </div>)
               }
               
                
            </div>
  )
}

export default Donation;
