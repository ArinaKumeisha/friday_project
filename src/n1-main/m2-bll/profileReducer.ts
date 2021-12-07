import {Dispatch} from "redux";
import {authAPI} from "../../n2-features/f1-auth/a1-login/AuthApi";
import {setIsLoggedId} from "./authReducer";


let initialState = {
    avatar: '',
    email: '',
    name: '',
    publicCardPacksCount: 0,
    _id: '',
}

export type InitialProfileType = {
    avatar: any
    email: string
    name: any
    publicCardPacksCount: number
    _id: string
}
//1
export const profileReducer = (state: InitialProfileType = initialState, action: ActionsType): InitialProfileType => {
    switch (action.type) {
        case 'profile/SET-PROFILE':
            return {
                ...state, avatar: action.avatar, email: action.email, name: action.name,
                publicCardPacksCount: action.publicCardPacksCount, _id: action._id
            }
                case 'UPDATE_USER_DATA':
            return {...state, name: action.name, avatar: action.avatar}

        default:
            return {...state}
    }
}


//ActionsCreators
/*export const setAvatar = (avatar: string) => {
    return ({type: 'profile/SET-Avatar', avatar} as const)
}*/
export const updateUserDataAC = ( name: any, avatar: any ) => (
    {type: 'UPDATE_USER_DATA', name, avatar} as const)

export const setProfile = (data: InitialProfileType) => {
    const {avatar, email, name, publicCardPacksCount, _id} = data
    return ({type: 'profile/SET-PROFILE', avatar, email, name, publicCardPacksCount, _id} as const)
}


//Thunks
export const updateAuthTC = ( name: any, avatar: any) => {
    return (dispatch: Dispatch)=>{
        authAPI.putAuthMe(name,avatar  ).then(res =>{
            dispatch(updateUserDataAC( res.data.name, res.data.avatar ))
        })
    }
}

//Types

export type SetProfileType = ReturnType<typeof setProfile>
type UpdateUserDataAT = ReturnType<typeof updateUserDataAC>

type ActionsType = SetProfileType | UpdateUserDataAT