

import { useEffect, useState } from 'react';
import { PieChart, Pie} from 'recharts';
const Statics = () => {
    const [data,Setdata] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => data(Setdata))
    },[])
    return (
        <div>

<PieChart width={1000} height={400}>
          <Pie data={data.health} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data.food} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>

            
        </div>
    );
};

export default Statics;