const TodoList =({list , remove}) =>{
    return (
        <>
             {list?.length >0 ? (
              <ul className="todo-list">
                {list.map((todo,index)=> (
                <div className="todo">
                   <li key={index}>{todo}</li>
                  <button className="delete-button"> Delete</button>        
                </div>
    ))

    }
</ul>
 
) : (
    <div className="empty">
        <p>No Task Found</p>
    </div>
    )}
        </>
    );
};
export default TodoList;
