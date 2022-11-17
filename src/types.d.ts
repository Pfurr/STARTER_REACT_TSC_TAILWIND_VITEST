//* data -> src/components/Demo.tsx
export interface Data {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

interface Company {
  name: string
  catchPhrase: string
  bs: string
}

interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

interface Geo {
  lat: string
  lng: string
}

//* state -> src/components/Demo.tsx
export interface AppState {
  users_state: Array<Data>
  error_state: string | null
}
