import { PureComponent } from "react";
import { CategoryItemsListWrapper } from "./styledcomponents";
import ProductCard from "../../Product/ProductCard";
import { ProductsListType } from "../../../type/ProductList.type";

export class CategoryItems extends PureComponent {
  static propTypes = {
    products: ProductsListType.isRequired,
  };

  renderProducts() {
    const { products } = this.props;
    return products?.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  }

  render() {
    return (
      <CategoryItemsListWrapper>
        {this.renderProducts()}
      </CategoryItemsListWrapper>
    );
  }
}

export default CategoryItems;
