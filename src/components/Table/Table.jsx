import React from "react";
import PropTypes from "prop-types";
import { action } from "@storybook/addon-actions";

import "./table.css";

/**
 * Primary UI component for user interaction
 */
export const Table = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      onClick={action("button click")}
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}3223
    </button>
  );
};

Table.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Table contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Table.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
