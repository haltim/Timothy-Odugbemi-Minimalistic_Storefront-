import { PureComponent } from "react";
import { ProductsListType } from "../../../type/ProductList.type";
import CategoryItems from "./CategoryItems.component";

export class CategoryProductListContainer extends PureComponent {
  static propTypes = {
    products: ProductsListType.isRequired,
  };

  containerProps() {
    const { products } = this.props;
    return {
      products: products,
    };
  }

  render() {
    return <CategoryItems {...this.containerProps()} />;
  }
}

export default CategoryProductListContainer;
