import React from 'react';
import { Link } from 'react-router-dom';

function Items({ type }) {
  return (
    <div className='col-4'>
      <Link to='/'>
        <div className='bg'></div>
        <img src={`https://heimish902.github.io/converse/images/asset ${type.id}.jpeg`} alt='' />
        <p>{type.title}</p>
      </Link>
    </div>
  );
}

export default Items;
