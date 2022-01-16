import './Dark.scss';
import './Cart.scss';
import './Detail.scss';
import './App.scss';

import productType from './list';
import { commedes, thum, startHike } from './Product';
import Items from './Items';
import ChangeDark from './Runstart';
import CommeDes from './CommeDes';
import StartHike from './startHike';
import Detail from './Detail';
import Cart from './Cart';

import { Link, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

function App() {
  let [isModal, setIsModal] = useState(false);
  let [isSidebar, setIsSideber] = useState(false);
  let [types, setTypes] = useState();

  return (
    <div className='App'>
      <header>
        <div className='inner'>
          <h1 className='logo'>
            <Link
              to='/'
              onClick={() => {
                document.querySelector('body').classList.remove('dark');
              }}
            >
              <span class='hidden'>Converse</span>
            </Link>
          </h1>
          <nav>
            <div
              className='mobile_btn'
              onClick={() => {
                showMenu();
                setIsSideber(true);
                document.querySelector('.left').style.display = 'block';
              }}
            >
              <span className='material-icons'>menu</span>
            </div>
            <div className='left'>
              {isSidebar === true ? <MobileSide setIsSideber={setIsSideber} setIsModal={setIsModal} /> : null}
              <ul
                onClick={(e) => {
                  let span = document.querySelectorAll('.left span');
                  span.forEach((el) => {
                    el.style.borderBottom = 'none';
                  });
                  let name = e.target.dataset.type;
                  e.target.style.borderBottom = '3px solid';
                  setTypes(productType[name]);
                  console.log(types);
                  setIsModal(true);
                }}
              >
                <li>
                  <span data-type='shoes'>신발</span>
                </li>
                <li>
                  <span data-type='cloth'>의류</span>
                </li>
                <li>
                  <span>아동</span>
                </li>
                <li>
                  <span>런칭캘린더</span>
                </li>
                <li>
                  <span>SALE</span>
                </li>
              </ul>
            </div>
            <div className='right'>
              <ul>
                <li>
                  <Link to='/'>
                    <span className='material-icons'>person_outline</span>
                  </Link>
                </li>
                <li>
                  <Link to='/cart'>
                    <span className='material-icons'>shopping_cart</span>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <span className='material-icons'>favorite_outline</span>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <span className='material-icons'>help_outline</span>
                  </Link>
                </li>
              </ul>
              <button className='search_btn'>
                <span className='material-icons'>search</span>
              </button>
            </div>
          </nav>
          {isModal === true ? <Modal types={types} setIsModal={setIsModal} /> : null}
        </div>
      </header>
      <Switch>
        <Route exact path='/'>
          <div className='inner'>
            <section className='commeDesGarcons grid clearfix'>
              <div className='left'>
                <div className='text'>
                  <h2>
                    CONVERSE X <br /> COMME DES GARCONS <br /> PLAY
                  </h2>
                  <p>
                    새롭게 돌아온 두 패션 아이콘의 콜라보레이션.
                    <br />
                    하트 앤 아이 로고가 함께 하는 시즈널 컬러 척 70을 만나보세요.
                  </p>
                </div>
                <img src='https://heimish902.github.io/converse/images/asset 25.jpeg' alt='' />
                <Link to='/컨버스X꼼데-가르송-플레이-척-70/28' class='btn'>
                  구매하기
                </Link>
              </div>
              <div className='right'>
                {commedes.map((item, index) => {
                  if (index % 2 == 0) {
                    return <CommeDes item={item} key={index} />;
                  }
                })}
              </div>
            </section>

            <section className='newItems'>
              <div className='title '>
                <h2>Shop By Style</h2>
                <Link to='/'>
                  <span className='material-icons'>east</span>신상품 보러가기
                </Link>
              </div>
              <div className='row'>
                {thum.map((type, index) => {
                  return <Items type={type} key={index} />;
                })}
              </div>
            </section>

            <section className='banner'>
              <div className='img_box'>
                <h2 className='hidden'>Run Star Motion Ox</h2>
                <img src='https://www.converse.co.kr/image/banner/16406673000.jpg' alt='' />
                <img src='https://www.converse.co.kr/image/banner/16406673420.jpg' alt='' />
              </div>
              <Link to='/runstartmotionox' class='btn'>
                더 알아보기
              </Link>
            </section>

            <section className='runStartHike grid clearfix'>
              <div className='left'>
                <div className='text'>
                  <p>
                    자연에서 영감을 받은 색조에 프리미엄 쿠셔닝으로 더욱 편안하면서도,
                    <br />
                    절정의 스타일에 도달한 런스타 하이크
                  </p>
                </div>
                <img src='https://heimish902.github.io/converse/images/asset 40.jpeg' alt='' />
                <button class='btn'>더 알아보기</button>
              </div>
              <div className='right'>
                {startHike.map((item, index) => {
                  return <StartHike item={item} index={index} key={index} />;
                })}
              </div>
            </section>
          </div>
        </Route>

        <Route path='/runstartmotionox'>
          <ChangeDark />
        </Route>

        {commedes.map((a, i) => {
          return (
            <Route path={`/컨버스X꼼데-가르송-플레이-척-70/${a.id}`}>
              <div className='inner'>
                <Detail commedes={commedes} a={a} />
              </div>
            </Route>
          );
        })}

        <Route path='/cart'>
          <Cart />
        </Route>
      </Switch>
      <footer>
        <div className='inner'>
          <div className='left'>
            <div>
              <span>(유)컨버스코리아</span>
              <span>대표 주형준</span>
              <span>개인정보책임 주형준</span>
              <span>사업자등록번호 220-88-74818</span>
            </div>
            <div>
              <span>통신판매업 신고번호 제2016-서울강남-00478호</span>
              <Link>통신판매업자 신원정보 확인</Link>
            </div>
            <div>
              <address>주소 서울특별시 강남구 테헤란로 152(역삼동) 강남파이낸스센터 32층</address>
            </div>
            <div>
              <p>
                고객상담팀 : 080-987-0182<span>(싱담시간 월-금:AM 09:00 - PM 05:30, 주말/공휴일 휴무)</span>
                <span>
                  <Link>converskorea@converse.co.kr</Link>
                  (24시간 접수 가능)
                </span>
              </p>
            </div>

            <div className='copyright'>2020 Converse Korea LLC. All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Modal({ types, setIsModal }) {
  return (
    <div className='modal'>
      <span
        className='material-icons close'
        onClick={() => {
          setIsModal(false);
          let span = document.querySelectorAll('.left span');
          span.forEach((el) => {
            el.style.borderBottom = 'none';
          });
        }}
      >
        close
      </span>
      <div className='side_bar'>
        <ul>
          {types.map((a) => {
            return (
              <li>
                <Link
                  to={`/shoes/${a}`}
                  onClick={() => {
                    setIsModal(false);
                    let span = document.querySelectorAll('.left span');
                    span.forEach((el) => {
                      el.style.borderBottom = 'none';
                    });
                  }}
                >
                  {a}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function showMenu() {
  const menu = document.querySelector('nav');

  if (menu.className === '') {
    menu.className += 'responsive';
  } else {
    menu.className = '';
  }
}

function MobileSide({ setIsSideber, setIsModal }) {
  return (
    <div className='top mobile'>
      <div className='mobile_logo'>
        <span className='hidden'>logo</span>
      </div>
      <div className='close'>
        <span
          className='material-icons'
          onClick={() => {
            setIsSideber(false);
            document.querySelector('.left').style.display = 'none';
            setIsModal(false);
          }}
        >
          close
        </span>
      </div>
    </div>
  );
}
export default App;
