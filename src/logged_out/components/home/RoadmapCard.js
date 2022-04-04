import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  iconWrapper: {
    borderRadius: theme.shape.borderRadius,
    textAlign: "center",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1) * 1.5
  }
});

function RoadmapCard(props) {
  const { title, subTitle, text } = props;
  return (
    <Fragment>
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subTitle}</h4>
      <p>
        {text}
      </p>
    </Fragment>
  );
}

RoadmapCard.propTypes = {
  title: PropTypes.object.isRequired,
  subTitle: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(RoadmapCard);
