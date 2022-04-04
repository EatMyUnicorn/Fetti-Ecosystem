import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import calculateSpacing from "./calculateSpacing";
import RoadmapCard from "./RoadmapCard";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import StoreIcon from '@mui/icons-material/Store';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const iconSize = 250;

const mapItems = [
  {
    title: "DAO",
    subTitle: "Launch the Fetti DAO",
    text: "Launch the Fetti DAO on the Solana Blockchain DAO",
    mDate: "Q1 - 2022"
  },
  {
    title: "DAO",
    subTitle: "Launch the Fetti DAO",
    text: "Launch the Fetti DAO on the Solana Blockchain DAO",
    mDate: "Q1 - 2022"
  },
  {
    title: "DAO",
    subTitle: "Launch the Fetti DAO",
    text: "Launch the Fetti DAO on the Solana Blockchain DAO",
    mDate: "Q1 - 2022"
  },
  {
    title: "DAO",
    subTitle: "Launch the Fetti DAO",
    text: "Launch the Fetti DAO on the Solana Blockchain DAO",
    mDate: "Q1 - 2022"
  },
 // {
 //   color: "#DD2C00",
 //   headline: "Feature 5",
 //   text:
 //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
 //   icon: <BarChartIcon style={{ fontSize: iconSize }} />,
 //   mdDelay: "200",
 //   smDelay: "0"
 // },
 // {
 //   color: "#64DD17",
 //   headline: "Feature 6",
 //   text:
 //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
 //   icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
 //   mdDelay: "400",
 //   smDelay: "200"
 // },
 // {
 //   color: "#304FFE",
 //   headline: "Feature 7",
 //   text:
 //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
 //   icon: <CloudIcon style={{ fontSize: iconSize }} />,
 //   mdDelay: "0",
 //   smDelay: "0"
 // },
 // {
 //   color: "#C51162",
 //   headline: "Feature 8",
 //   text:
 //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
 //   icon: <CodeIcon style={{ fontSize: iconSize }} />,
 //   mdDelay: "200",
 //   smDelay: "200"
 // },
 // {
 //   color: "#00B8D4",
 //   headline: "Feature 9",
 //   text:
 //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
 //   icon: <CancelIcon style={{ fontSize: iconSize }} />,
 //   mdDelay: "400",
 //   smDelay: "0"
 // }
];

function RoadmapSection(props) {
  const { width } = props;
  return (
    <div id="Roadmap" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          RoadMap
        </Typography>
        <div className="container-fluid" id="RoadmapSection">




          <Grid container spacing={calculateSpacing(width)}>
            <VerticalTimeline>
              
              {mapItems.map(element => (

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                  date={element.mDate}
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<AdminPanelSettingsIcon />}
                >

                  <RoadmapCard
                    title={element.title}
                    subTitle={element.subTitle}
                    text={element.text}
                  />

                </VerticalTimelineElement>

                
              ))}

            </VerticalTimeline>            
          </Grid>
        </div>
      </div>
    </div>
  );
}

RoadmapSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(RoadmapSection);
