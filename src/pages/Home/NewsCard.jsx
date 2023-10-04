import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {title,thumbnail_url,details,_id} = news
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure><img className=' w-full' src={thumbnail_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
        
            {
             details.length > 200
              ? <h> {details.slice(0,200)} <Link to={`/news/${_id}`} className=' text-cyan-600 '> read more .....</Link></h>
              : <p>{details}</p>
            }
      
       
        </div>
      </div>
    );
};

export default NewsCard;