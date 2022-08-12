import PropTypes from "prop-types";
import { PureComponent } from "react";
import {
  CartOverlayWrapper,
  OverlayContainer,
  CartIconWrapper,
} from "./styledcomponents";
import CartIcon from "../../Cart/CartIcon";
import CartPreview from "../../Cart/CartPreview";
import { CartItemsType } from "../../../type/Cart.type";
import { CurrencyItemType } from "../../../type/Currency.type";

export class CartOverlay extends PureComponent {
  static propTypes = {
    toggleCart: PropTypes.func.isRequired,
    isOpened: PropTypes.bool.isRequired,
    products: CartItemsType.isRequired,
    selectedCurrency: CurrencyItemType.isRequired,
    totalCount: PropTypes.number.isRequired,
    innerRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
    buttonRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
  };

  render() {
    const {
      toggleCart,
      isOpened,
      products,
      totalCount,
      selectedCurrency,
      innerRef,
      buttonRef,
    } = this.props;
    return (
      <CartOverlayWrapper>
        <CartIconWrapper
          ref={buttonRef}
          onClick={() => {
            toggleCart();
          }}
        >
          <CartIcon totalProducts={totalCount} />
        </CartIconWrapper>
        {isOpened && (
          <CartPreview
            isOpened={isOpened}
            innerRef={innerRef}
            totalCount={totalCount}
            selectedCurrency={selectedCurrency}
            products={products}
            toggleCart={toggleCart}
          />
        )}
        {isOpened && <OverlayContainer />}
      </CartOverlayWrapper>
    );
  }
}

export default CartOverlay;
