/* eslint-disable no-unused-vars */
import * as React from 'react';
import {Card,
    CardContent,
    InputAdornment,
    FormControl,
    InputLabel,
    Input,
    IconButton,
    Button} from '@material-ui/core';
import { Visibility,VisibilityOff } from '@material-ui/icons';
import { useStyles } from './index-css';
import Alert from '../../molecules/alert';
import { SnackbarProvider } from 'notistack';

const LoginTemplate = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        userName:'',
        password: '',
        showPassword: false,
        open:false,
        message:'',
        type:0
    });

    //入力された値の変更
    const inputChange = (event:any) => {
        const str = (event.target.value === '')?'':event.target.value;
        if (inputCheck(str)){
            switch (event.target.name){
            case 'userName':
                setValues({...values,userName:event.target.value,open: false});
                break;
            case 'password':
                setValues({ ...values, password: event.target.value,open: false});
                break;
            }
        } else {
            switch (event.target.name){
            case 'userName':
                setValues({...values,userName:event.target.value,open: true,message:'ユーザー名半角英数字のみ利用できます',type:1});
                break;
            case 'password':
                setValues({ ...values, password: event.target.value,open: true,message:'パスワード半角英数字のみ利用できます',type:1});
                break;
            }
        }
    };

    const inputCheck = (str:string) => {
        if(null === str.match(/^[A-Za-z0-9]*$/)){
            return false;
        }
        return true;
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const loginStart = () => {
        const userName = values.userName;
        const passWord = values.password;
        if(!inputCheck(userName)){
            setValues({ ...values, open: true,message:'ユーザー名は半角英数字のみ利用できます',type:1});
        } else if(!inputCheck(passWord)){
            setValues({ ...values, open: true,message:'パスワードは半角英数字のみ利用できます',type:1});
        } else{
            if(userName.length > 8){
                setValues({ ...values, open: true,message:'ユーザー名は8文字以内で入力してください',type:1});
            } else if (passWord.length > 10){
                setValues({ ...values, open: true,message:'パスワードは10文字以内で入力してください',type:1});
            } else {
                console.log('ここでログイン完了');
            }
        }
    };

    return (
        <div className={classes.loginContainer}>
            {values.open &&
            <SnackbarProvider maxSnack={3}>
                <Alert message={values.message} type={values.type}/>
            </SnackbarProvider>}
            <Card className={classes.card}>
                <CardContent className={classes.itemContainer}>
                    <FormControl className={classes.userNameContainer}>
                        <InputLabel htmlFor="adornment-password">UserName</InputLabel>
                        <Input
                            name="userName"
                            id="adornment-password"
                            onChange={inputChange}
                            endAdornment={
                                <InputAdornment position="end"></InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl className={classes.passWordContainer}>
                        <InputLabel htmlFor="adornment-password">Password</InputLabel>
                        <Input
                            name="password"
                            type={values.showPassword ? 'text' : 'password'}
                            id="adornment-password"
                            value={values.password}
                            onChange={inputChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    {(values.password.length > 0 && values.userName.length > 0 ) ? (
                        <Button variant="contained" className={classes.button} onClick={loginStart}>
                            Login
                        </Button>
                    ):(
                        <Button variant="contained" disabled className={classes.button} onClick={loginStart}>
                        Login
                        </Button>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default LoginTemplate;
