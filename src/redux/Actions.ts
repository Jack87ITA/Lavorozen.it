import * as userSliceActions from './slices/user'

const actions = {
    user: {
        set: userSliceActions.setUser,
        logout: userSliceActions.logout,
        changeToken: userSliceActions.changeToken,
    },
}

export default actions
