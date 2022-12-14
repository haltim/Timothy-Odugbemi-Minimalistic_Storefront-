import PropTypes from "prop-types";
import { PureComponent } from "react";
import {
  CartPageWrapper,
  CartPageHeader,
  ProductInfoWrapper,
  ProductCounterWrapper,
  ProductCounterBtnWrapper,
  ProductCounterBtn,
  ProductQuantityWrapper,
  ProductCartImgSlideWrapper,
  CartItemsWrapper,
  CartItemWrapper,
  CartOrderSectionWrapper,
  OrderBtn,
  CartOrderSectionHeader,
  CartProductAttributesWrapper,
} from "./styledcomponents";
import { Helmet } from "react-helmet";
import FontProperty from "../../components/FontProperty";
import ProductAttributes from "../../components/Product/ProductAttributes";
import Slider from "../../components/SliderComponents/Slider";
import Paragraph from "../../components/Paragraph";

export class CartPage extends PureComponent {
  static propTypes = {
    cartItems: PropTypes.array.isRequired,
    selectedCurrency: PropTypes.object.isRequired,
    updateProductAmount: PropTypes.func.isRequired,
    total: PropTypes.string.isRequired,
    totalQuantity: PropTypes.number.isRequired,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderHemlet() {
    return (
      <Helmet>
        <html lang="en" />
        <title>Minimalistic_Store</title>
      </Helmet>
    );
  }

  renderEmptyCartPage() {
    return (
      <FontProperty typeFont="h1" fontSize={42}>
        Your cart is empty!
      </FontProperty>
    );
  }

  renderCartItems() {
    const { updateProductAmount, selectedCurrency, cartItems } = this.props;
    return (
      cartItems &&
      cartItems?.map((cartItem) => {
        const filteredPrice = cartItem.prices?.filter(
          (price) => price.currency.label === selectedCurrency.label
        )[0];
        return (
          <CartItemWrapper key={cartItem.cartItemId}>
            <ProductInfoWrapper>
              <FontProperty
                typeHeadline="h2"
                fontSize={30}
                lineHeight={27}
                marginBottom={16}
                fontWeight={600}
              >
                {cartItem.brand}
              </FontProperty>
              <FontProperty
                typeHeadline="h3"
                fontSize={30}
                lineHeight={27}
                fontWeight={400}
                marginBottom={20}
              >
                {cartItem.name}
              </FontProperty>
              <FontProperty
                typeHeadline="h3"
                fontWeight={700}
                fontSize={24}
                lineHeight={24}
                marginBottom={1}
              >
                {`${
                  filteredPrice.currency.symbol
                }${filteredPrice.amount.toFixed(2)}`}
              </FontProperty>
              <CartProductAttributesWrapper>
                <ProductAttributes
                  attributes={cartItem.attributes}
                  inStock={cartItem.inStock}
                />
              </CartProductAttributesWrapper>
            </ProductInfoWrapper>
            <ProductCounterWrapper>
              <ProductCounterBtnWrapper>
                <ProductCounterBtn
                  onClick={() => {
                    updateProductAmount(cartItem, cartItem.amount + 1);
                  }}
                  aria-label="increase quantity"
                >
                  +
                </ProductCounterBtn>
                <ProductQuantityWrapper>
                  <Paragraph
                    children={`${cartItem.amount}`}
                    fontWeight={500}
                    fontSize={24}
                    lineHeight={38.4}
                  />
                </ProductQuantityWrapper>
                <ProductCounterBtn
                  onClick={() => {
                    updateProductAmount(cartItem, cartItem.amount - 1);
                  }}
                  aria-label="decrease quantity"
                >
                  -
                </ProductCounterBtn>
              </ProductCounterBtnWrapper>
              <ProductCartImgSlideWrapper>
                <Slider images={cartItem.images} />
              </ProductCartImgSlideWrapper>
            </ProductCounterWrapper>
          </CartItemWrapper>
        );
      })
    );
  }

  renderOrderSection() {
    const { totalQuantity, total, selectedCurrency } = this.props;
    return (
      <CartOrderSectionWrapper>
        <CartOrderSectionHeader>
          <Paragraph
            children={"Tax 21%:"}
            marginBottom={10}
            fontWeight={400}
            fontSize={24}
            lineHeight={28}
          />
          <Paragraph
            children={"Quantity:"}
            marginBottom={10}
            fontWeight={400}
            fontSize={24}
            lineHeight={28}
          />
          <Paragraph
            children={"Total:"}
            fontWeight={500}
            fontSize={24}
            lineHeight={28}
          />
        </CartOrderSectionHeader>
        <CartOrderSectionHeader>
          <Paragraph
            children={`${selectedCurrency.symbol}42.00`}
            marginBottom={10}
            fontWeight={700}
            fontSize={24}
            lineHeight={28}
          />
          <Paragraph
            children={`${totalQuantity}`}
            marginBottom={10}
            fontWeight={700}
            fontSize={24}
            lineHeight={28}
          />
          <Paragraph
            children={`${selectedCurrency.symbol}${total}`}
            fontWeight={700}
            fontSize={24}
            lineHeight={28}
          />
        </CartOrderSectionHeader>
        <OrderBtn>order</OrderBtn>
      </CartOrderSectionWrapper>
    );
  }

  render() {
    const { cartItems } = this.props;
    return (
      <CartPageWrapper>
        {this.renderHemlet()}
        <CartPageHeader>
          <FontProperty
            typeFont="h1"
            fontWeight={700}
            fontSize={32}
            lineHeight={42}
          >
            Cart
          </FontProperty>
        </CartPageHeader>
        <CartItemsWrapper>
          {cartItems && cartItems.length > 0
            ? this.renderCartItems()
            : this.renderEmptyCartPage()}
        </CartItemsWrapper>
        {cartItems && cartItems.length > 0 && this.renderOrderSection()}
      </CartPageWrapper>
    );
  }
}

export default CartPage;
