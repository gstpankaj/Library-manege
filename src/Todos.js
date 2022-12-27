import React from 'react';

const Todos =(props)=>{
	return(
		<>
			 <div className="todo_container">
	 			<button className="fa-times" aria-hidden="true"  onClick={() =>{
					props.onSelect(props.id);}}>*</button>		
			 	<li>{props.text}</li>
			 	<li>{props.id}</li>
			 </div>
		</>
	)
}
export default Todos;