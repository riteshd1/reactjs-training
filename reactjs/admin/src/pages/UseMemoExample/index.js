import React,{useState,useMemo} from "react";
const UseMemoExample =()=>{
    console.log("UseMemoExample");
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const addTodo = ()=>{
        setTodos([...todos,'New todo']);
    }
    const increment = ()=>{
        setCount(count+1);
    }
    const expensiveCalculations = (num)=>{
        for(let i=0; i<1000000000;i++){
            num += 1;
        }
        return num;
    };
    // const calculation = expensiveCalculations(count);
    const calculation = useMemo(()=>expensiveCalculations(count), [todos]);
    return(<>
    <h1>Use Memo Example</h1>

    <div className="card">
    <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button className="btn btn-primary" onClick={addTodo}>Add Todo</button>
      </div>
    </div>
    <div className="card">
        <h3>Count : {count}</h3>
        <div className="card-action">
        <button className="btn btn-primary" onClick={increment}>Click</button>
        </div>
        {calculation}
    </div>
    </>)
}
export default UseMemoExample; 