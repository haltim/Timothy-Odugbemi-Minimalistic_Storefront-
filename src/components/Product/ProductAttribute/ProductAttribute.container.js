import PropTypes from "prop-types";
import { PureComponent } from "react";
import { connect } from "react-redux";
import { ProductDispatcher } from "../../../store/Dispatchers/Product.dispatcher";
import ProductAttribute from "./ProductAttribute.component";
import { AttributeItemType } from "../../../type/ProductList.type";

export const mapDispatchToProps = (dispatch) => ({
  updateSelectAttribute: (attribute) =>
    ProductDispatcher.updateSelectAttribute(dispatch, attribute),
});

export class ProductAttributeContainer extends PureComponent {
  static propTypes = {
    item: AttributeItemType.isRequired,
    updateSelectAttribute: PropTypes.func.isRequired,
    selectedProduct: PropTypes.object,
    attributeData: PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  };

  constructor(props) {
    super(props);
    this.onSelectAttributeHandler = this.onSelectAttributeHandler.bind(this);
  }

  onSelectAttributeHandler(attribute) {
    const { updateSelectAttribute } = this.props;
    updateSelectAttribute(attribute);
  }

  containerProps() {
    const { selectedProduct } = this.props;
    const { displayValue, value, id, isSelected } = this.props.item;
    const { type, name } = this.props.attributeData;
    if (selectedProduct === undefined) {
      return {
        displayValue,
        id,
        isSelected,
        onSelectAttributeHandler: this.onSelectAttributeHandler,
        value,
        name,
        type,
      };
    }
    return {
      selectedProduct,
      displayValue,
      id,
      isSelected,
      onSelectAttributeHandler: this.onSelectAttributeHandler,
      value,
      name,
      type,
    };
  }

  render() {
    return <ProductAttribute {...this.containerProps()} />;
  }
}

export default connect(null, mapDispatchToProps)(ProductAttributeContainer);
