import redux from '../redux'

export type GlobalState = ReturnType<typeof redux.getState>
export type AppDispatch = typeof redux.dispatch
