'use client'

import React from 'react'
import useSWR from 'swr'

const fetcher = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    return data;
}

const dashboard = () => {
    const {data, error} = useSWR('https://jsonplaceholder.typicode.com/todos', fetcher)
    if(error) return <div>There is an Error!</div>
    if(!data) return <div>Loading...</div>


  return (
    <div className='w-[80%] mx-auto bg-black text-white p-3'>
        <h1 className='text-2xl font-bold my-10 text-center'>Todos</h1>  
        <hr className='h-1 bg-white w-[100%] mx-auto my-10'  />
        {data.map((item)=>{
            return<ul className='px-2 my-6'> <li key={item.id}>Sr no. {item.id}</li> <li>Task: {item.title}</li>
           <li className={`${(item.completed == true)?"line-through":""}`}>Completed</li>
            </ul>
        })}
    </div>
  )
}

export default dashboard
