import React, { useEffect, useState } from 'react';
import { SingInFacebook } from './BtnSingIn.styled';
import facebook from '../../icons/facebook.svg';

const BtnSingInFacebook = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenWidth < 768 ? (
    <SingInFacebook>
      <img src={facebook} alt="facebook"></img>
      Увійти з facebook
    </SingInFacebook>
  ) : (
    <SingInFacebook>
      <img src={facebook} alt="facebook"></img>
      Увійти за допомогою facebook
    </SingInFacebook>
  );
};

export default BtnSingInFacebook;
