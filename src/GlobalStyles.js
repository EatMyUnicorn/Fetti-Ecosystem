import { withStyles } from "@material-ui/core";

const styles = theme => ({
  "@global": {
    /**
     * Disable the focus outline, which is default on some browsers like
     * chrome when focusing elements
     */
    "*:focus": {
      outline: 0
    },
    ".text-white": {
      color: theme.palette.common.white
    },
    ".listItemLeftPadding": {
      paddingTop: `${theme.spacing(1.75)}px !important`,
      paddingBottom: `${theme.spacing(1.75)}px !important`,
      paddingLeft: `${theme.spacing(4)}px !important`,
      [theme.breakpoints.down("sm")]: {
        paddingLeft: `${theme.spacing(4)}px !important`
      },
      "@media (max-width:  420px)": {
        paddingLeft: `${theme.spacing(1)}px !important`
      }
    },
    ".nav-logo-container": {
      display:"inline-flex",
      alignItems: "center",
    },
    ".nav-logo": {
      height: "50px",
      width: "auto",
      marginRight: "15px",
    },
    ".container": {
      width: "100%",
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      marginRight: "auto",
      marginLeft: "auto",
      [theme.breakpoints.up("sm")]: {
        maxWidth: 540
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: 720
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: 1170
      }
    },
    ".row": {
      display: "flex",
      flexWrap: "wrap",
      marginRight: -theme.spacing(2),
      marginLeft: -theme.spacing(2)
    },
    ".container-fluid": {
      width: "100%",
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      marginRight: "auto",
      marginLeft: "auto",
      maxWidth: 1370
    },
    ".lg-mg-top": {
      marginTop: `${theme.spacing(20)}px !important`,
      [theme.breakpoints.down("md")]: {
        marginTop: `${theme.spacing(18)}px !important`
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: `${theme.spacing(16)}px !important`
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: `${theme.spacing(14)}px !important`
      }
    },
    ".lg-mg-bottom": {
      marginBottom: `${theme.spacing(20)}px !important`,
      [theme.breakpoints.down("md")]: {
        marginBottom: `${theme.spacing(18)}px !important`
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: `${theme.spacing(16)}px !important`
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: `${theme.spacing(14)}px !important`
      }
    },
    ".lg-p-top": {
      paddingTop: `${theme.spacing(20)}px !important`,
      [theme.breakpoints.down("md")]: {
        marginBottom: `${theme.spacing(18)}px !important`
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: `${theme.spacing(16)}px !important`
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: `${theme.spacing(14)}px !important`
      }
    },
    "#HeadSection": {
      background: 'url(https://techcrunch.com/wp-content/uploads/2021/10/GettyImages-1191009127.jpg) !important',
      backgroundRepeat: 'no-repeat !important',
      backgroundSize: "cover !important",
    },
    "[data-aos^=zoom][data-aos^=zoom].aos-animate": {
      opacity: ".98 !important",
    },
    "#Zoom-Image": {
      background: "url(https://surrey-research-park.com/wp-content/uploads/blockchain.png)",
      backgroundSize: "cover",
      borderRadius: "25px",
    },
    "#FeatureSection":{
      textAlign: "center",
    },
    ".TeamImage":{
    maxWidth: "200px",
    width: "100%",
    height: "auto",
    },
    ".TeamLink": {
      color: "inherit",
      textDecoration: "none",
    },
    "footer.lg-p-top":{
      marginBottom: "0px !important",
    },
    ".MuiPaper-rounded":{
      borderRadius:"25px !important"
    },
  }
});

function globalStyles() {
  return null;
}

export default withStyles(styles, { withTheme: true })(globalStyles);
