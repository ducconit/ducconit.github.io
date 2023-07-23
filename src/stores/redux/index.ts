import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { isEnabledDevtools } from '../../utils'
import { AppDispatch } from '../types'

import rootReducer from './rootReducer'

const redux = configureStore({
  reducer: rootReducer,
  devTools: isEnabledDevtools(),
})

export const useAppDispatch: () => AppDispatch = useDispatch
export default redux
