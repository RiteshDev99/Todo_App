import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'



function App() {

  type textValueType = {
    textValue: string;
    index: number | null;
  };

  const [val, setVal] = useState<textValueType>({
    textValue: '',
    index: null
  })

  const click = () => {
    addTodo(val.textValue, val.index);
    setVal({
      ...val,
      textValue: "",
    });
  }

  const [todoArray, setTodoArray] = useState<string[]>([]);

  // useEffect(() => {
  //   localStorage.setItem('todo', JSON.stringify(todoArray));
  // }, [todoArray]);

  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todoArray));

  }, [todoArray]);

  const addTodo = (todo: string, index: number | null) => {
    if (todo.length < 1) {
      alert("You Cant Save Empty Value")
      return
    }
    if (index === null) {
      setTodoArray([todo, ...todoArray]);
    } else {
      const newTodoArray = [...todoArray];
      newTodoArray[index] = todo;
      setTodoArray(newTodoArray);
    }
  };

  const removeTodo = (index: number) => {
    setTodoArray(todoArray.filter((_, i) => i !== index));
  };

  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVal({
      ...val,
      textValue: event.target.value
    });
  }



  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="bg-green-200 mt-4 rounded-2xl min-h-[80vh] p-[4vh]">
          <h1 className="font-bold text-black pb-3">Add a Todos</h1>

          <input
            onChange={change} value={val.textValue}
            className='w-full p-3'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                addTodo(e.currentTarget.value, null);
                setVal({
                  ...val,
                  textValue: "",
                });
              }
            }}
          ></input>
          <h1 onClick={click} className='w-auto mt-5 mb-5 h-12 font-bold text-white bg-green-500 p-3 hover:bg-green-900 rounded-full flex justify-center'>Add Todo</h1>

          <div className="todotext">
            <h1 className='font-bold pt-3 text-xl'>My Todo</h1>
            <ul>
              {todoArray.map((todo, index) => (
                <li className='flex flex-row align-middle bg-white my-6 rounded-xl' key={index}>
                  <div className="flex p-6 w-full justify-between">
                    {todo}
                    <div className='flex gap-5'>
                      <h1 onClick={
                        () => {
                          setVal({
                            ...val,
                            textValue: todo,
                            index: index
                          });
                        }
                      } className='font-bold text-white bg-green-500 px-4 py-1 hover:bg-green-900 rounded-xl '>Edit</h1>
                      <h1 onClick={() => removeTodo(index)} className=' font-bold text-white bg-green-500 px-4 py-1 hover:bg-green-900 rounded-xl '>Delete</h1>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}


export default App
