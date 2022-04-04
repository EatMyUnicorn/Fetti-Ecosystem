import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  ".vertical-timeline-element-title": { fontSize:"2em" },
});
function RoadmapCard(props) {
  const { title, status, text } = props;
  return (
    <Fragment>
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-status">{status}</h4>
      <p className="vertical-timeline-element-text">
        {text}
      </p>
    </Fragment>
  );
}

RoadmapCard.propTypes = {
  title: PropTypes.object.isRequired,
  status: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(RoadmapCard);
