import PropTypes from "prop-types";
import { PureComponent } from "react";
import { FontWrapper } from "./styledcomponents";
import parse from "html-react-parser";

export class FontProperty extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    children: PropTypes.string,
    fontSize: PropTypes.number,
    fontWeight: PropTypes.number,
    typeHeadline: PropTypes.string.isRequired,
    lineHeight: PropTypes.number,
    marginTop: PropTypes.number,
    marginBottom: PropTypes.number,
  };

  render() {
    return (
      <FontWrapper
        color={this.props.color}
        fontSize={this.props.fontSize}
        fontWeight={this.props.fontWeight}
        lineHeight={this.props.lineHeight}
        marginTop={this.props.marginTop}
        marginBottom={this.props.marginBottom}
        typeHeadline={this.props.typeHeadline}
      >
        {parse(this.props.children)}
      </FontWrapper>
    );
  }
}

export default FontProperty;
