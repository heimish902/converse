import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { connect, useDispatch, useSelector } from 'react-redux';

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  return (
    <div>
      <div className='inner'>
        <div className='cart'>
          <div class='cart_inner'>
            {state === undefined ? (
              <>
                <Empty />
              </>
            ) : (
              <CartList state={state} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Empty() {
  let history = useHistory();
  return (
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
  );
}

function CartList({ state }) {
  return (
    <>
      <h3>장바구니({state.length})</h3>
      <div className='cartList'>
        <div className='itemList'>
          {state.map((a, i) => {
            return (
              <div className='item'>
                <img src={`https://heimish902.github.io/converse/images/asset ${a.id}.jpeg`} alt='' />
                <div className='center'>
                  <p className='item_name'>{a.title}</p>
                  <p>
                    {a.color} / {a.size}
                  </p>
                  <p className='quan'>수량 : {a.quan}</p>
                  <div className='center_bottom'>
                    <p>위시리스트 추가</p>
                    <p>나중에 구매하기</p>
                  </div>
                </div>
                <div className='right'>
                  <p>{a.price}</p>
                  <div className='count'>
                    <input type='number' min='0' value={a.quan} />
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
                </div>
              </div>
            );
          })}
        </div>
        <div className='total'>
          <h2>주문 금액</h2>
          <div className='receipt'>
            <div class='total_price'>
              <p>
                상품금액
                <span>원</span>
              </p>
              <p>
                배송비
                <span>원</span>
              </p>
              <p>
                총 결제 금액
                <span>원</span>
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
export default Cart;
