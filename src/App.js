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
                  <span data-type='shoes'>??????</span>
                </li>
                <li>
                  <span data-type='cloth'>??????</span>
                </li>
                <li>
                  <span>??????</span>
                </li>
                <li>
                  <span>???????????????</span>
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
                    ????????? ????????? ??? ?????? ???????????? ??????????????????.
                    <br />
                    ?????? ??? ?????? ????????? ?????? ?????? ????????? ?????? ??? 70??? ???????????????.
                  </p>
                </div>
                <img src='https://heimish902.github.io/converse/images/asset 25.jpeg' alt='' />
                <Link to='/?????????X??????-?????????-?????????-???-70/28' class='btn'>
                  ????????????
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
                  <span className='material-icons'>east</span>????????? ????????????
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
                ??? ????????????
              </Link>
            </section>

            <section className='runStartHike grid clearfix'>
              <div className='left'>
                <div className='text'>
                  <p>
                    ???????????? ????????? ?????? ????????? ???????????? ??????????????? ?????? ??????????????????,
                    <br />
                    ????????? ???????????? ????????? ????????? ?????????
                  </p>
                </div>
                <img src='https://heimish902.github.io/converse/images/asset 40.jpeg' alt='' />
                <button class='btn'>??? ????????????</button>
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
            <Route path={`/?????????X??????-?????????-?????????-???-70/${a.id}`}>
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
              <span>(???)??????????????????</span>
              <span>?????? ?????????</span>
              <span>?????????????????? ?????????</span>
              <span>????????????????????? 220-88-74818</span>
            </div>
            <div>
              <span>??????????????? ???????????? ???2016-????????????-00478???</span>
              <Link>?????????????????? ???????????? ??????</Link>
            </div>
            <div>
              <address>?????? ??????????????? ????????? ???????????? 152(?????????) ???????????????????????? 32???</address>
            </div>
            <div>
              <p>
                ??????????????? : 080-987-0182<span>(???????????? ???-???:AM 09:00 - PM 05:30, ??????/????????? ??????)</span>
                <span>
                  <Link>converskorea@converse.co.kr</Link>
                  (24?????? ?????? ??????)
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
