import type { Users } from "../types/users.types";

interface userCard {
    user : Users;
}


const Card = ({user}:userCard)=>{

    return(
        <div className="border-2 w-100 p-4 mb-1 m-auto bg-amber-200" >
            <p>{user.id}</p>
            <h3>{user.name}</h3>
            <p>{user.email}</p>

        </div>
    )
}

export default Card

