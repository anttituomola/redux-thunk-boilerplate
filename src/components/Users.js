import { useSelector } from "react-redux"

export const Users = () => {
    const users = useSelector(state => state.users.users)

    const userList = users.map(user => {
        return <p key={user.id}>
            {user.name}: {user.email}
        </p>
    })

    return (
        <div>
            <p>{userList}</p>
        </div>
    )
}
