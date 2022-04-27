import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "users",

    // Initial state on pakollinen, jotta Redux saa jotain dataa sovelluksen latautuessa ensimmäistä kertaa.
    initialState: {
        users: [],
    },

    /* Tässä käytetään mutatoivaa eli suoraan arvoa muuttavaa metodia (state.value += 1)
    Se on mahdollista ja sallittua ainoastaan, kun käytämme Toolkitin createSlice-metodia,
    jonka asiosta datan muuttumattomuus saavutetaan kulissien takana. */
    reducers: {
        hydrateUsers: (state, action) => {
            state.users = action.payload
        },
    }
})

export const { hydrateUsers } = userSlice.actions
export default userSlice.reducer
