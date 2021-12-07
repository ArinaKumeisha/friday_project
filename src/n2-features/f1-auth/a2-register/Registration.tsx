import React, {ChangeEvent, FormEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from '../../../n1-main/m2-bll/store'
import SuperInputText from "../../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import s from "../../f0-test/Examples/Examples.module.scss";
import SuperButton from "../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import style from './Registration.module.scss'
import {setErrorMessageAC} from "../../../n1-main/m2-bll/registrationReducer";


type PropsType = {
    email: string
    setEmail: (email: string) => void
    password: string
    setPassword: (password: string) => void
    repeatPassword: string
    setRepeatPassword: (repeatPassword: string) => void
    register: (e: FormEvent<HTMLFormElement>) => void
}
export const Registration = (props: PropsType) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        repeatPassword,
        setRepeatPassword,
        register
    } = props

    const error = useSelector<AppStoreType, null | string>(state => state.registration.error)
    const dispatch = useDispatch()

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
        dispatch(setErrorMessageAC(''))
    }

    const setPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
        dispatch(setErrorMessageAC(''))
    }
    const setRepeatPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(e.currentTarget.value)
        dispatch(setErrorMessageAC(''))
    }

    return (

        <div className={style.block}>
            <form onSubmit={register}>
            <div className={style.form}>
                <div className={style.text}>Registration</div>

                    <SuperInputText
                        value={email}
                        onChange={emailHandler}
                        placeholder={'enter your email'}
                    />

                    <SuperInputText
                        type={'password'}
                        value={password}
                        onChange={setPasswordHandler}
                        className={s.testSpanError}
                        placeholder={'enter  your password'}
                    />

                    <SuperInputText
                        type={'password'}
                        value={repeatPassword}
                        onChange={setRepeatPasswordHandler}
                        className={s.testSpanError}
                        placeholder={'repeat  your password'}
                    />


                {error !== null && <div className={style.error}>{error}</div>}

                <div>
                    <SuperButton children={'Registration'} className={s.superButton}/>

                </div>
            </div>
            </form>
        </div>
    );
}