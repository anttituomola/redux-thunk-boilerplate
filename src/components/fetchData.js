import { hydrateUsers } from '../features/userSlice'

export const fetchData = () => async dispatch => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
        dispatch(hydrateUsers(data))
    } catch (error) {
        console.log(error)
    }
}
