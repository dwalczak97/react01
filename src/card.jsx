export const Card = (props) =>{
  return (

    <div>
      <img src={props.avatar} alt="avatar"/>
      <p>{props.name}</p>
      <p>{props.tag}</p>
      <p>{props.location}</p>
    </div>

   

  );
}
