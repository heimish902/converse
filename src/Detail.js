import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Detail({ a }) {
  return (
    <div className='container'>
      <div className='left'>
        <img src={`https://heimish902.github.io/converse/images/asset ${a.id}.jpeg`} alt='' />
      </div>
      <div className='right'>
        <div className='info'>
          <h3 className='name'>{a.title}</h3>
          <p className='price'>{a.price}</p>
          <p className='gender'>{a.gended}</p>
          <p className='desc'>{a.desc}</p>
          <Link className='viewmore' to='#viewMore'>
            더보기
          </Link>
          <Link to='#review' className='rate'>
            <span className='material-icons'>star</span>
            <span className='material-icons'>star</span>
            <span className='material-icons'>star</span>
            <span className='material-icons'>star</span>
            <span className='material-icons'>star</span>
            <span className='text'>별점 5.0</span>
          </Link>
        </div>
        <div className='select'>
          <p className='colorName'>
            컬러 : <span>{a.color}</span>{' '}
          </p>
          <div className='thum'>
            <Link to={`/컨버스X꼼데-가르송-플레이-척-70/${a.id}`}>
              <img src={`https://heimish902.github.io/converse/images/asset ${a.id}_thum.jpeg`} alt='' />
            </Link>
            <Link to={`/컨버스X꼼데-가르송-플레이-척-70/${a.id + 1}`}>
              <img src={`https://heimish902.github.io/converse/images/asset ${a.id + 1}_thum.jpeg`} alt='' />
            </Link>
            <Link to={`/컨버스X꼼데-가르송-플레이-척-70/${a.id - 2}`}>
              <img src={`https://heimish902.github.io/converse/images/asset ${a.id - 2}_thum.jpeg`} alt='' />
            </Link>
            <Link to={`/컨버스X꼼데-가르송-플레이-척-70/${a.id - 1}`}>
              <img src={`https://heimish902.github.io/converse/images/asset ${a.id - 1}_thum.jpeg`} alt='' />
            </Link>
          </div>
        </div>
        <div className='buy'>
          <button>사이즈 가이드</button>
          {a.quan !== 0 ? <Size /> : <SoldOut />}

          <div className='sns'>
            <Link></Link>
            <Link></Link>
            <Link></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Size() {
  return (
    <div>
      <ul>
        <li>
          <a href='#none'>
            <span>220</span>
          </a>
        </li>
        <li>
          <a href='#none'>
            <span>225</span>
          </a>
        </li>
        <li>
          <a href='#none'>
            <span>230</span>
          </a>
        </li>
        <li>
          <a href='#none'>
            <span>235</span>
          </a>
        </li>
        <li>
          <a href='#none'>
            <span>240</span>
          </a>
        </li>
        <li>
          <a href='#none'>
            <span>245</span>
          </a>
        </li>
        <li>
          <a href='#none'>
            <span>250</span>
          </a>
        </li>
        <li>
          <a href='#none'>
            <span>255</span>
          </a>
        </li>
        <li>
          <a href='#none'>
            <span>260</span>
          </a>
        </li>
        <li>
          <a href='#none'>
            <span>265</span>
          </a>
        </li>
        <li>
          <a href='#none'>
            <span>270</span>
          </a>
        </li>
        <li>
          <a href='#none'>
            <span>275</span>
          </a>
        </li>
        <li>
          <a href='#none'>
            <span>280</span>
          </a>
        </li>
        <li>
          <a href='#none'>
            <span>285</span>
          </a>
        </li>
        <li>
          <a href='#none'>
            <span>290</span>
          </a>
        </li>
        <li>
          <a href='#none'>
            <span>295</span>
          </a>
        </li>
        <li>
          <a href='#none'>
            <span>300</span>
          </a>
        </li>
      </ul>
      <div className='count'>
        <input type='number' min='0' value='1' />
        <button
          onClick={() => {
            if (document.querySelector('input').value > 0) document.querySelector('input').value--;
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            document.querySelector('input').value++;
          }}
        >
          +
        </button>
      </div>
      <div className='buyBtn'>
        <Link className='btn ' to='/'>
          장바구니
        </Link>
        <Link className='btn ' to='/'>
          바로구매
        </Link>
        <Likes />
      </div>
    </div>
  );
}

function SoldOut() {
  return (
    <div className='soldOut'>
      <button className='soldOutBtn'>품절</button>
      <Likes />
    </div>
  );
}

function Likes() {
  return (
    <button className='like'>
      <span
        className='material-icons'
        onClick={(e) => {
          if (e.target.innerText === 'favorite_outline') {
            e.target.innerText = 'favorite';
          } else {
            e.target.innerText = 'favorite_outline';
          }
        }}
      >
        favorite_outline
      </span>
    </button>
  );
}
export default Detail;
