import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import calculateSpacing from "./calculateSpacing";
import RoadmapCard from "./roadmapCard";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ApiIcon from '@mui/icons-material/Api';
import ForumIcon from '@mui/icons-material/Forum';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { withStyles } from "@material-ui/core";

const iconSize = 250;



const styles = theme => ({
  ".vertical-timeline-element-title": { fontSize:"2em" },
  ".vertical-timeline-element-subtitle": {  },
  ".vertical-timeline-element-text": {  },
});



const mapItems = [
  {
    title: "Raydium DEX IDO Listing",
    status: "IN PROGRESS",
    text: "Utilizing the Acceleraytor Launchpad, for the IDO",
    mDate: "May - 2022",
    icon: <CurrencyExchangeIcon />
  },
  {
    title: "Pre-Launch NFT sale",
    status: "IN PROGRESS",
    text: "Investor Pre-Launch Dao Access Pass NFT sale",
    mDate: "End April - 2022",
    icon: <ApiIcon />
  },
  {
    title: "ARK Protocol Whitepaper",
    status: "IN PROGRESS",
    text: "Release the Whitepaper and fully reveal the ARK Protocol",
    mDate: "Begining April - 2022",
    icon: <MenuBookIcon />
  },
  {
    title: "50M Token Giveaway",
    status: "COMPLETE",
    text: "Create Community presence and reward all minted accounts",
    mDate: "March - 2022",
    icon: <CardGiftcardIcon />
  },
  {
    title: "Launch Social Media Community",
    status: "COMPLETE",
    text: "Create Fetti Twitter, Discord, Telegram",
    mDate: "March - 2022",
    icon: <ForumIcon />
  },
  {
    title: "Launch Website Fetti.Life",
    status: "COMPLETE",
    text: "Launch the Fetti website to bring about our presence",
    mDate: "January - 2022",
    icon: <AddToQueueIcon />
  },
  {
    title: "Fetti DAO Launch",
    status: "COMPLETE",
    text: "Launch the Fetti DAO on the Solana Blockchain",
    mDate: "January - 2022",
    icon:<AdminPanelSettingsIcon />
  },

];

function RoadmapSection(props) {
  const { width } = props;
  return (
    <div id="Roadmap" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom" >
          RoadMap
        </Typography>
        <div className="container-fluid" id="RoadmapSection">

          <Grid container spacing={calculateSpacing(width)}>
            <VerticalTimeline>
              
              {mapItems.map(element => (

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'rgb(145, 162, 152)', color: '#234531 ' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(35, 69, 49)' }}
                  date={element.mDate}
                  iconStyle={{ background: 'rgb(145, 162, 152)', color: '#234531 ' }}
                  icon={element.icon}
                >

                  <RoadmapCard
                    title={element.title}
                    status={element.status}
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

export default withStyles(styles, { withTheme: true })(RoadmapSection);
