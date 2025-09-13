
const Card = (props) =>{
   <li>
    <div  >
  <img src={props.avatar} alt="Avatar" width="48" />
  <p>{props.name}</p>
  <p>{props.status}</p>
</div>
</li>
   
};


 const FriendList = () =>{

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
  return (
        <div>
       <ul>

        {/* <Card
         avatar={friends.avatar}
         name={friends.name}
         status={friends.isOnline}
         key={friends.id}
        /> */}

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