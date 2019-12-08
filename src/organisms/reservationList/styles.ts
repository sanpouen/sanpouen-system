import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    list: {
        backgroundColor: '#FFF8F0',
        borderTop: 'solid 1px #C6C5B9',
        '&:hover': {
            'backgroundColor': '#E6E6EA'
        }
    },
    name: {
        maxWidth: '100px'
    },
    editIcon: {
        'padding': '5px',
        '&:hover': {
            'cursor': 'pointer',
            'backgroundColor': 'darkgray',
            'borderRadius': '17px'
        }
    },
    collapse: {
        backgroundColor: '#FFF8F0'
    },
    remarks: {
        paddingLeft: '16px'
    },
    remarksText: {
        marginTop: '17px',
        marginBottom: '11px',
        paddingLeft: '16px'
    },
    remarksInputText: {
        marginLeft: '5px',
        width: '99%'
    }
});