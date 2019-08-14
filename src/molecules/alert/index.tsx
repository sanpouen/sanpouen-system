/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useSnackbar, VariantType } from 'notistack';

interface IAlert {
    message:string;
    type:number;
    //0が成功、1がalert、2はerror、3はinfo（青）
}

export const Alert = (props:IAlert) => {
    const { message,type } = props;
    const { enqueueSnackbar } = useSnackbar();
    const openSnacbar = (variant: VariantType) => {
        enqueueSnackbar(message, { variant });
    };
    const checkType = () => {
        switch (type){
        case 0:
            openSnacbar('success');
            break;
        case 1:
            openSnacbar('warning');
            break;
        case 2:
            openSnacbar('error');
            break;
        case 3:
            openSnacbar('info');
            break;
        }
    };
    return(
        <React.Fragment>
            {}
            {checkType()}
        </React.Fragment>
    );
};

export default Alert;
