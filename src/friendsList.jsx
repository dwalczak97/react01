import "./friendsList.css"

const friends = [
  {
    "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
    "name": "Mango",
    "isOnline": true,
    "id": 1812
  },
  {
    "avatar": "https://cdn-icons-png.flaticon.com/512/616/616438.png",
    "name": "Kiwi",
    "isOnline": false,
    "id": 1137
  },
  {
    "avatar": "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
    "name": "Ajax",
    "isOnline": true,
    "id": 1213
  },
  {
    "avatar": "https://cdn-icons-png.flaticon.com/512/2977/2977285.png",
    "name": "Jay",
    "isOnline": true,
    "id": 1714
  },
  {
    "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
    "name": "Poly",
    "isOnline": false,
    "id": 1284
  }
];
const isOnline = (friends) =>{
 const isOn = "isOnline";
const isOff = "isOffline";
const status = friends.isOnline; 
return (
    status ? isOn : isOff
)
}
 const Card = (props) =>{
// const isOn = "isOnline";
// const isOff = "isOffline";
// const status = {props.status};
    return (
<li className="box-f">
   <img src={props.avatar} alt="Avatar" width="48" />
  <p>{props.name}</p>
  <p>{isOnline}</p>


</li>
    )
};

const FriendList = () =>{
 



    return (
    <div>
       <ul className="ul-f"> 
        {friends.map(user => 
        <Card
          
        key={user.id}
        avatar={user.avatar}
        name={user.name}
        status={user.isOnline}
        />
        
      )}
  
        </ul>
    
    </div>
    );
};

export default FriendList;