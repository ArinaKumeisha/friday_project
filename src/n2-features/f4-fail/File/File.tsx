import React, {ChangeEvent, useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {updateAuthTC} from "../../../n1-main/m2-bll/profileReducer";
import style from './File.module.scss'

export const File = () => {
    const inRef = useRef<HTMLInputElement>(null)

    const [change, setChange] = useState(false)
    const [fileURL, setFileURL] = useState<any>();
    const [file64, setFile64] = useState<any>();
    const dispatch = useDispatch()

    const upload = (e: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();

        const newFile = e.target.files && e.target.files[0];
        if (newFile) {
            reader.onloadend = function () {
                if (typeof reader.result === 'string') {
                    setFile64(reader.result)
                }
            }
            reader.readAsDataURL(newFile)
        }
    }

    const send = () => {
        dispatch(updateAuthTC('./file', fileURL))
        setChange(false)
    }
   /* "homepage": "https://brightwiths.github.io/iti_bright_cards",*/

    return (
        <>
            {
                change ?
                    <div className={style.container}>

                        <input
                            ref={inRef}
                            type="file"
                            accept='.jpg, .jpeg, .png'
                            style={{display: 'none'}}
                            onChange={upload}
                        />
                        <button
                            className={style.button}
                            onClick={() => inRef && inRef.current && inRef.current.click()}>add
                        </button>

                        <button
                            className={style.button}
                            onClick={send}>send
                        </button>

                    </div> :
                    <button className={style.button}
                            onClick={() => setChange(true)}>
                        change
                    </button>}
        </>
    );
}