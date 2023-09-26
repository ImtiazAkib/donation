import { Link } from "react-router-dom";


const Middle = ({datas}) => {

    const textStyle ={
        color: datas.text_color

    }
    const backgroundStyle ={
        backgroundColor: datas.card_bg_color
    }
    return (
        
        <div>
            
               <Link to={`/middle/${datas.Id}`}>
               <button>
                    <img className="w-60 rounded-lg " src={datas.picture}></img>
                    <div style={backgroundStyle} >
                    
                    <div style={backgroundStyle} className="w-20   mb-3 rounded-lg">
                    <p className='flex justify-center  'style={textStyle} >{datas.category}</p>
                    </div>
                    <p className='flex justify-start font-bold' style={textStyle}>{datas.title}</p>
                    
                    </div>
                </button>
                </Link>
            
            
        </div>
    );
};

export default Middle;