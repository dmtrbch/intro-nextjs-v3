import NewTodoFrom from '@/components/NewTodoForm'

const DashboardLayout = ({ children }) => {
  return <div>
    <h1>dashboard</h1>
    <div>
      <NewTodoFrom />
    </div>
    <div>{children}</div>
  </div>
}

/**
 * The reason the TodoFrom is put here
 * instead of Todo page is because we don't want the
 * Form to wait on the Todo page to load the Todos in
 * order for the form to be loaded
 * In the layout is showed instantly
 */

export default DashboardLayout