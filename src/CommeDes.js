import React from 'react';
import { Link } from 'react-router-dom';

function CommeDes({ item }) {
  return (
    <div className='col-2'>
      <Link to={`/컨버스X꼼데-가르송-플레이-척-70/${item.id}`}>
        <img className='img1' src={`https://heimish902.github.io/converse/images/asset main_${item.id}.jpeg`} alt='' />
        <img className='img2' src={`https://heimish902.github.io/converse/images/asset ${item.id}_hover.jpeg`} alt='' />
      </Link>
      <div className='text'>
        <div className='top_left'>
          <span
            onClick={(e) => {
              if (e.target.innerText == 'favorite_outline') {
                e.target.innerText = 'favorite';
              } else {
                e.target.innerText = 'favorite_outline';
              }
            }}
            className='material-icons'
          >
            favorite_outline
          </span>
        </div>
        <div className='top_right'>
          <p>{item.option}</p>
        </div>
        <div className='bottom'>
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      </div>
    </div>
  );
}

export default CommeDes;
