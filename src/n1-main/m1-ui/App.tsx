import React, {useEffect} from 'react';
import './App.css';
import {Main} from "./p2-main/Main";
import {InitializeTC} from "../m2-bll/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../m2-bll/store";

export const App = () => {
    const dispatch = useDispatch()
    const avatar = useSelector<AppStoreType, string>(state=> state.profile.avatar)
    const isInitialize = useSelector<AppStoreType, boolean>(state => state.auth.isInitilize)
    useEffect(() => {
        dispatch(InitializeTC())
    }, [avatar])
    return (
        <div className="App">
            {isInitialize && <Main/>}
        </div>
    );
}