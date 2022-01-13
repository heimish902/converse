import React from 'react';
import { Link } from 'react-router-dom';

function StartHike({ item, index }) {
  return (
    <div className='col-2'>
      <img class='img1' src={`https://heimish902.github.io/converse/images/asset ${item.id}.jpeg`} alt='' />

      {index == 1 || index == 2 ? <ShowInfo item={item} index={index} /> : null}
    </div>
  );
}

function ShowInfo({ item }) {
  return (
    <>
      <Link to='/'>
        <img class='img2' src={`https://heimish902.github.io/converse/images/asset ${item.id + 1}.jpeg`} alt='' />
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
    </>
  );
}
export default StartHike;
