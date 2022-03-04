import { createContext, useContext, FC } from "react";

type Task = {
  id: string
  text: string
}

type List = {
  id: string
  text: string
  tasks: Task[]
}

export type AppState = {
  lists: List[]
}

type AppStateContextProps = {
  lists: List[]
  getTasksByListId(id: string): Task[]
}

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "456789", text: "Generate Mobile App" }]
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "876546", text: "Add Typescript" }]
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "456789", text: "Begin to use static typing" }]
    }
  ]
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
)

export const AppStateProvider: FC = ({ children }) => {
  const { lists } = appData

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || []
  }

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId }}>
      {children}
    </AppStateContext.Provider>
  )
}
