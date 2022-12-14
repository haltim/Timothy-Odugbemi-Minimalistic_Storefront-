import { client, CombinedField } from "@tilework/opus";
import { CategoryDispatcher } from "./store/Dispatchers/Category.dispatcher";
import { CurrencyDispatcher } from "./store/Dispatchers/Currency.dispatcher";
import { ProductDispatcher } from "./store/Dispatchers/Product.dispatcher";
import CurrenciesQuery from "./query/Currencies.query";
import CategoryQuery from "./query/Category.query";
import ProductsQuery from "./query/Products.query";
export class QueryDispatcher {
  constructor() {
    client.setEndpoint("http://localhost:4000/");
  }

  static async handleFetchInitData(dispatch) {
    const queryList = [
      CurrenciesQuery.getCurrenciesQuery(),
      CategoryQuery.getCategoriesListQuery(),
    ];

    const data = await this.handleFetchRequest(queryList);

    if (!data.categories || !data.currencies) {
      return false;
    }
    CategoryDispatcher.updateCategoriesData(dispatch, data.categories);
    CurrencyDispatcher.updateCurrenciesData(dispatch, data.currencies);
    return data;
  }

  static async handleFetchProductData(dispatch, id) {
    const queries = [ProductsQuery.getProductQuery(id)];

    const data = await this.handleFetchRequest(queries);
    if (!data.product) {
      return false;
    }
    ProductDispatcher.setActiveProduct(dispatch, data.product);
    return data;
  }

  static async handleFetchProductsData(dispatch, categoryName) {
    if (!categoryName) return false;
    const queries = [
      ProductsQuery.getProductsListQuery(categoryName.toLowerCase()),
    ];
    const data = await this.handleFetchRequest(queries);
    if (!data.category) {
      return false;
    }
    ProductDispatcher.updateProductsData(dispatch, data.category.products);
    return data.category.products;
  }

  static async handleFetchRequest(queries) {
    let combinedField = new CombinedField();
    queries.forEach((query) => {
      combinedField = combinedField.add(query);
    });
    const data = await client.post(combinedField);
    return data;
  }
}
export default new QueryDispatcher();
