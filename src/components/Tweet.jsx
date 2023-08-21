import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";
function Tweet(props) {
console.log(props)



  return (
    <div className="tweet">

     <ProfileImage image={props.Tweet.user.image} />

      <div className="body">
        <div className="top">
        <User name={props.Tweet.user.name} handle={props.Tweet.user.handle} />

        <span className="timestamp"> {props.Tweet.timestamp} </span>
        </div>

        <p className="message">
        <Message message={props.Tweet.message} />
        </p>

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet; 
