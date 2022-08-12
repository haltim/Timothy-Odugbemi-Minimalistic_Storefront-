import { getCategories, updateSelectedCategory } from "../Actions/Category.action";

export class CategoryDispatcher {
  static async updateCategoriesData(dispatch, categories) {
    dispatch(getCategories(categories));
  }

  static async updateSelectedCategory(dispatch, category) {
    dispatch(updateSelectedCategory(category));
  }
}

export default new CategoryDispatcher();
