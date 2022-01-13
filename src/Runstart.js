import React, { useEffect } from 'react';

function ChangeDark() {
  useEffect(() => {
    let dark = document.querySelector('body').classList.add('dark');
  });

  return (
    <div className='inner'>
      <section className='banner'>
        <h2 className='hidden'>Run Star Motion Ox</h2>
        <img src='https://converse.co.kr/image/banner/16402175060.jpg' alt='' />
        <img src='https://converse.co.kr/image/banner/16402519430.jpg' alt='' />
      </section>
      <section></section>
    </div>
  );
}

export default ChangeDark;
