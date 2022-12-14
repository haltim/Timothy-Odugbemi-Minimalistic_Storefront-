import PropTypes from "prop-types";
import { PureComponent } from "react";
import { CartItemAttributeBtn, CartItemColorAttribute } from "./styledcomponents";
import { AttributeItemType } from "../../../type/ProductList.type";

export class CartAttribute extends PureComponent {
  static propTypes = {
    attributeData: PropTypes.shape({
      type: PropTypes.string.isRequired,
    }).isRequired,
    item: AttributeItemType.isRequired,
  };

  renderAttributeByType() {
    const { type } = this.props.attributeData;
    switch (type) {
      case "text":
        return this.renderTextAttribute();
      case "swatch":
        return this.renderColorAttribute();
      default:
        return this.renderPlaceHolder();
    }
  }

  renderTextAttribute() {
    const { value, displayValue, isSelected } = this.props.item;
    return (
      <CartItemAttributeBtn
        name={displayValue}
        isSelected={isSelected}
        aria-label={displayValue}
      >
        {value}
      </CartItemAttributeBtn>
    );
  }

  renderColorAttribute() {
    const { value, displayValue, isSelected } = this.props.item;
    return (
      <CartItemColorAttribute
        name={displayValue}
        color={value}
        isSelected={isSelected}
        aria-label={displayValue}
      />
    );
  }

  render() {
    return <>{this.renderAttributeByType()}</>;
  }
}

export default CartAttribute;
