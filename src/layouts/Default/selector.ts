import { GlobalState } from '../../stores/types'
import { ThemeMode } from '../../constants'

export const isDarkMode = (state: GlobalState):boolean => state.theme.mode === ThemeMode.Dark
