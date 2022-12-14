import PropTypes from "prop-types";
import { PureComponent } from "react";
import { connect } from "react-redux";
import Category from "./CategorySelector.component";

export const mapStateToProps = (state) => ({
  availableCategories: state.CategoryReducer.categories,
  activeCategory: state.CategoryReducer.activeCategory,
});

export class CategorySelectorContainer extends PureComponent {
  static propTypes = {
    availableCategories: PropTypes.arrayOf(PropTypes.string.isRequired)
      .isRequired,
    activeCategory: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { category: true };
  }

  containerProps() {
    const { availableCategories, activeCategory } = this.props;
    return {
      categories: availableCategories,
      activeCategory,
    };
  }
  render() {
    return <Category {...this.containerProps()} />;
  }
}

export default connect(mapStateToProps)(CategorySelectorContainer);
