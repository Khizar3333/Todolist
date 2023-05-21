import Image from "next/image";
import { Inter } from "next/font/google";
import {useState} from 'react'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [todo, setTodo] = useState({title:"", desc:""})

  const addtodo=()=>{
  let todos=localStorage.getItem("todos")
  if (todos) {
    let todosJson =JSON.parse(todos)
    if(todosJson.filter(value=>{return value.title==todo.title}).length>0){
      alert("todo already exist")
    }    
    else{
      todosJson.push(todo)
    localStorage.setItem("todos",JSON.stringify(todosJson))
    alert("todo has been added")
    setTodo({title:"", desc:""})

    }}
  
  else{
    localStorage.setItem("todos",JSON.stringify([todo]))

  }}
  
  const onChange=(e)=>{
    setTodo({...todo,[e.target.name]:e.target.value})
    console.log(todo)
  }
  return (
    <div className="my-2 font-semibold text-3xl">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <h1 className=" mb-3 text-black">Add a todo</h1>
          {/* <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"> */}
          <div className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <div className="relative mb-4">
              <label htmlFor="title" className="leading-7 text-sm text-gray-600">
                Todo title
              </label>
              <input value={todo.title}
              onChange={onChange}
                type="text"
                id="title"
                name="title"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="desc"
                className="leading-7 text-sm text-gray-600"
              >
                Todo text
              </label>
              <textarea value={todo.desc}
              onChange={onChange}
                id="desc"
                name="desc"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button onClick={addtodo} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-fit">
              Add Todo
            </button>

            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
  }
