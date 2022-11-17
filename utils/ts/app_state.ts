// types Api
import { Data } from './app_interface'

// types State
export interface AppState {
  users_state: Array<Data>
  error_state: string | null
}
