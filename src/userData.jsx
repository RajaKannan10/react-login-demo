const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id, first_name, last_name, email, gender} = curUser;
                    

                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{first_name}</td>
                            <td>{last_name}</td>
                            <td>{email}</td>
                            <td>{gender}</td>
                            
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;