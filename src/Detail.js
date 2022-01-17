import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Detail({ a }) {
  let state = useSelector((state) => state);

  return (
    <div className='container'>
      <div className='left'>
        <img src={`https://heimish902.github.io/converse/images/asset ${a.id}.jpeg`} alt='' />
      </div>
      <div className='right'>
        <div className='info'>
          <h3 className='name'>{a.title}</h3>
          <p className='price'>{a.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
          <p className='gender'>남녀공용</p>
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
            <Link to={`/컨버스X꼼데-가르송-플레이-척-70/28`}>
              <img src={`https://heimish902.github.io/converse/images/asset 28_thum.jpeg`} alt='' />
            </Link>
            <Link to={`/컨버스X꼼데-가르송-플레이-척-70/29`}>
              <img src={`https://heimish902.github.io/converse/images/asset 29_thum.jpeg`} alt='' />
            </Link>
            <Link to={`/컨버스X꼼데-가르송-플레이-척-70/26`}>
              <img src={`https://heimish902.github.io/converse/images/asset 26_thum.jpeg`} alt='' />
            </Link>
            <Link to={`/컨버스X꼼데-가르송-플레이-척-70/27`}>
              <img src={`https://heimish902.github.io/converse/images/asset 27_thum.jpeg`} alt='' />
            </Link>
          </div>
        </div>
        <div className='buy'>
          <button>사이즈 가이드</button>
          {a.quan !== 0 ? <Size a={a} /> : <SoldOut />}

          {/* <div className='sns'>
            <Link></Link>
            <Link></Link>
            <Link></Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

function Size({ a }) {
  let dispatch = useDispatch();
  let history = useHistory();

  return (
    <div>
      <ul
        onClick={(e) => {
          const ul = document.querySelector('.buy ul');
          const link = ul.querySelectorAll('span');
          let size = e.target.innerText;

          link.forEach((list) => (list.style.backgroundColor = '#fff'));
          a.size = size;
          e.target.style.backgroundColor = '#ddd';
          console.log({ a });
        }}
      >
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
        <button
          className='btn'
          onClick={() => {
            let input = document.querySelector('.count input').value;
            dispatch({
              type: 'AddCart',
              payload: { id: a.id, title: a.title, price: a.price, size: a.size, color: a.color, quan: input },
            });
            history.push('/cart');
          }}
        >
          장바구니
        </button>
        <button className='btn'>바로구매</button>
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
