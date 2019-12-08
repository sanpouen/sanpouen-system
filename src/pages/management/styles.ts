import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    paper: {
        backgroundColor: '#39393A',
        color: 'darkgray'
    },
    appBar: {
        // zIndex: theme.zIndex.drawer + 1,
        // transition: theme.transitions.create(['width', 'margin'], {
        //   easing: theme.transitions.easing.sharp,
        //   duration: theme.transitions.duration.leavingScreen,
        // }),
    },
    appBarShift: {
        // marginLeft: drawerWidth,
        // width: `calc(100% - ${drawerWidth}px)`,
        // transition: theme.transitions.create(['width', 'margin'], {
        //   easing: theme.transitions.easing.sharp,
        //   duration: theme.transitions.duration.enteringScreen,
        // }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        marginTop: '64px'
    },
    drawerClose: {
        width: '60px',
        overflow: 'hidden',
        marginTop: '64px'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // padding: theme.spacing(0, 1),
        // ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1
        // padding: theme.spacing(3),
    },
    open: {
        marginLeft: '180px'
    },
    close: {
        marginLeft: '70px'
    }
});