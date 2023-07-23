import { createSlice } from '@reduxjs/toolkit'
import {ThemeMode} from '../../constants'

const initialState: any = {
  mode: ThemeMode.Dark,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMode: (state) => {
      console.log('ok',state);
      
      state.mode = state.mode === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark
    },
  },
})

export const { toggleMode } = themeSlice.actions
export default themeSlice.reducer
