import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { connect, useDispatch, useSelector } from 'react-redux';
import { cartItem } from '.';

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let history = useHistory();
  let [isList, setIsList] = useState(false);
  let list = JSON.parse(localStorage.getItem('cartItem'));

  useEffect(() => {
    if (list !== null) {
      setIsList(true);
    }
  }, []);

  return (
    <div className='cart'>
      <div className='inner'>
        {state !== undefined ? <CartList state={state} history={history} list={list} isList={isList} /> : <Empty />}
      </div>
    </div>
  );
}

function Empty() {
  let history = useHistory();
  return (
    <>
      <div className='top top_empty'>
        <span
          className='material-icons'
          onClick={() => {
            history.push('/');
          }}
        >
          arrow_back_ios
        </span>{' '}
        <h3>장바구니(0)</h3>
      </div>
      <div className='alert_box'>
        <p className='alert_msg'>장바구니에 담긴 상품이 없습니다.</p>
        <p>척테일러, 잭퍼셀, 척70, 원스타 등 지금 컨버스의 다양한 상품을 찾아보세요.</p>
        <button
          className='btn'
          onClick={() => {
            history.push('/');
          }}
        >
          쇼핑 계속하기
        </button>
      </div>
    </>
  );
}

function CartList({ state, history, isList, list }) {
  let dispatch = useDispatch();
  return (
    <>
      <div class='top'>
        <span
          className='material-icons'
          onClick={() => {
            history.push('/');
          }}
        >
          arrow_back_ios
        </span>
        {state === undefined ? <h3>장바구니({list.length})</h3> : <h3>장바구니({state.length})</h3>}
      </div>
      <div className='cartList'>
        {state.map((a, i) => {
          return (
            <div className='itemList'>
              <img src={`https://heimish902.github.io/converse/images/asset ${a.id}.jpeg`} alt='' />
              <div className='item'>
                <div className='center'>
                  <p className='item_name'>{a.title}</p>
                  <p>
                    {a.color} / {a.size}
                  </p>
                  <p className='quan'>수량 : {a.quan}</p>
                </div>

                <div className='right'>
                  <p className='price'>{a.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                  <div className='count'>
                    <input type='number' min='0' value={a.quan} />
                    <button
                      onClick={(e) => {
                        dispatch({ type: 'minusItem', id: a.id, size: a.size });
                      }}
                    >
                      -
                    </button>
                    <button
                      onClick={() => {
                        dispatch({ type: 'plusItem', id: a.id, size: a.size });
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className='bottom'>
                  <p>위시리스트 추가</p>
                  <p>나중에 구매하기</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className='total'>
          <h2>주문 금액</h2>
          <div className='receipt'>
            <div class='total_price'>
              <p>
                상품금액
                <span>
                  <TotalPrice state={state} /> 원
                </span>
              </p>
              <p>
                배송비
                <span>0원</span>
              </p>
              <p>
                총 결제 금액
                <span>
                  <TotalPrice state={state} /> 원
                </span>
              </p>
            </div>
            <div className='order'>
              <button className='btn'>주문하기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CartItem({ list, a }) {
  let dispatch = useDispatch();

  return (
    <div className='itemList'>
      <img src={`https://heimish902.github.io/converse/images/asset ${a.id}.jpeg`} alt='' />
      <div className='item'>
        <div className='center'>
          <p className='item_name'>{a.title}</p>
          <p>
            {a.color} / {a.size}
          </p>
          <p className='quan'>수량 : {a.quan}</p>
        </div>

        <div className='right'>
          <p className='price'>{a.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
          <div className='count'>
            <input type='number' min='0' value={a.quan} />
            <button
              onClick={(e) => {
                dispatch({ type: 'minusItem', id: a.id, size: a.size });
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                dispatch({ type: 'plusItem', id: a.id, size: a.size });
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className='bottom'>
          <p>위시리스트 추가</p>
          <p>나중에 구매하기</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;

function TotalPrice({ state }) {
  let total = 0;
  state.forEach((a) => {
    total += +a.price * +a.quan;
  });
  return total.toLocaleString('ko-KR');
}
