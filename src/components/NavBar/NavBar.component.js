import { PureComponent } from "react";
import CategorySelector from "../../components/Category/CategorySelector";
import Logo from "../../components/NavBarItems/Logo";
import CurrencySwitcher from "../../components/NavBarItems/CurrencySwitcher";
import CartOverlay from "../../components/Cart/CartOverlay";
import {
  Cart,
  TopRightNavBarWrap,
  NavContainer,
  TopMiddleNavBarWrap,
  TopLeftNavBarWrap,
  NavWrapper,
} from "./styledcomponents";

export class NavBar extends PureComponent {
  render() {
    return (
      <NavContainer>
        <NavWrapper>
          <TopLeftNavBarWrap>
            <CategorySelector />
          </TopLeftNavBarWrap>
          <TopMiddleNavBarWrap>
            <Logo aria-label="logo" />
          </TopMiddleNavBarWrap>
          <TopRightNavBarWrap>
            <CurrencySwitcher />
            <Cart aria-label="cart menu">
              <CartOverlay />
            </Cart>
          </TopRightNavBarWrap>
        </NavWrapper>
      </NavContainer>
    );
  }
}

export default NavBar;
