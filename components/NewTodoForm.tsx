import { newTodo } from '@/utils/actions'

const NewTodoFrom = () => {
    return <div>
        <form action={newTodo}>
            <input name="content" className="border border-black/25" type="text" />
            <button type="submit">new todo</button>
        </form>
    </div>
}

export default NewTodoFrom