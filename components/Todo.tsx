'use client'
import { useTransition } from 'react'
import { completeTodo } from '@/utils/actions'


// doing server actions anywhere in any component without using a form - probably not smart
const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition()
  return (
    <div
      className={`border border-black/20 cursor-pointer ${todo.completed ? 'line-through text-gray-900' : ''}`}
      onClick={() => startTransition(() => completeTodo(todo.id))}>
      {todo.content}
    </div>
  )
}

// onClick will take a callback that calls startTransition which takes callback in which we call completeTodo

export default Todo