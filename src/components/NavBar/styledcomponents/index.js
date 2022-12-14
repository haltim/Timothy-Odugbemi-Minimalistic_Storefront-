import styled from "styled-components";

export const NavContainer = styled.header`
  max-width: 100%;
  background-color: var(--clr-white);
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
`;

export const NavWrapper = styled.div`
  min-height: 80px;
  position: relative;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const TopMiddleNavBarWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

export const TopLeftNavBarWrap = styled.nav`
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const TopRightNavBarWrap = styled.div`
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const Cart = styled.div`
  cursor: pointer;
  border: none;
  background-color: transparent;
  position: relative;
  min-width: 48px;
`;
