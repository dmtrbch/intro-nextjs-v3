'use server'
import { revalidatePath } from 'next/cache'
import db from './db'

// using server action mutation for update and watching the change the component triggering the mutation
// must be 'use-client'
export const completeTodo = async (id) => {
  await db.todo.update({
    where: {id},
    data: {
      completed: true,
    },
  })

  revalidatePath('/todos')
}

export const newTodo = async (formData) => {
  const todo = await db.todo.create({
    data: {
      content: formData.get('content'),
    },
  })

  revalidatePath('/todos')
}