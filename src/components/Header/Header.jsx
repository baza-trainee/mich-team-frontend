import React, { useState } from 'react';
import { ReactComponent as LogoIcon } from '../../icons/logo-header.svg';
import PropTypes from 'prop-types';
import {
  HeaderStyled,
  getStyledIcon,
  Logo,
  HeaderWrapper,
  LogoWrapper,
} from './Header.styled';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import { Burger, Menu } from './BurgerMenu/BurgerMenu';
import UserMenu from './User/User';
import Cart from './Cart/Cart';

const StyledLogo = getStyledIcon(LogoIcon);

const Header = ({ currentPage }) => {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const headerClass =
    currentPage === '/'
      ? 'main-header'
      : currentPage === '/merch'
        ? 'product-header'
        : '';
  return (
    <HeaderStyled className={`${headerClass}`}>
      <Menu open={open} setOpen={setOpen} currentPage={currentPage} />
      <HeaderWrapper className={`container ${headerClass}`}>
        <Burger open={open} setOpen={setOpen} />
        <LanguageSwitcher
          arrowcolor={'#fefefe'}
          backgroundcolorlanghover={'rgba(255, 255, 255, 0.5)'}
        />
        <Logo className="element">
          <LogoWrapper href="/">
            <StyledLogo />
          </LogoWrapper>
        </Logo>
        <UserMenu loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Cart />
      </HeaderWrapper>
    </HeaderStyled>
  );
};

Header.propTypes = {
  currentPage: PropTypes.string,
};

export default Header;
