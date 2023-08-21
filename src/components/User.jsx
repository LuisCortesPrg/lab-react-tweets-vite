function User(props) {

    return (

        <span className="user">
        <span className="name"> USER_NAME </span>
        <span className="handle">@{props.handle}</span>
      </span>  
    )


}
export default User