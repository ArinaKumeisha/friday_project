import React, {useState} from 'react';
import s from './PasswordRecovery.module.scss'
import SuperInputText from "../../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {forgotPasswordTC} from "../../../n1-main/m2-bll/recovery-reducer";
import {AppStoreType} from "../../../n1-main/m2-bll/store";

export const PasswordRecovery = () => {
    const [email, setEmail] = useState<string>('')
    const dispatch = useDispatch()
    let infoText = useSelector<AppStoreType, string>(state => state.recoveryPassword.forgot.info)
    let errorText = useSelector<AppStoreType, string>(state => state.recoveryPassword.forgot.errorText)

    let statusText = ''
    let classColor = ''
    if (infoText !== '') {
        statusText = infoText + ' You need to click recover link in you email.'
        classColor = s.green
    } else {
        statusText = errorText
        classColor = s.red
    }
    const onClickHandler = () => {
        dispatch(forgotPasswordTC(email))
    }

    return (
        <div className={s.container}>
            <div className={s.passwordRecovery}>
                <h1>Please enter you email and click recover.</h1>
                <div> Your email:</div>

                <SuperInputText
                    value={email}
                    onChangeText={setEmail}
                    className={s.input}/>

                <SuperButton
                    onClick={onClickHandler}>
                    Recover
                </SuperButton>

                <div className={classColor}>
                    {statusText}
                </div>
            </div>
        </div>

    );
}