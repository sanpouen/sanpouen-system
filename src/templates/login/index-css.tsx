import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(
    {
        loginContainer: {
            marginTop: '150px',
            display:'flex',
            justifyContent: 'center'
        },
        card: {
            width: '285px'
        },
        itemContainer: {
            backgroundColor: '#FFF8F0'
        },
        userNameContainer:{
            width:'250px',
            marginBottom:'10px'
        },
        passWordContainer:{
            width:'250px'
        },
        button:{
            backgroundColor:'#994322',
            color:'#fff',
            marginTop:'15px',
            marginLeft: '88px',
            marginRight: '88px',
            '&:hover': {
                backgroundColor:'#d16e49'
            }
        }
    }
);