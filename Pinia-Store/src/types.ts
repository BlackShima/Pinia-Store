export interface User {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
      "geo": {
        "lat": number,
        "lng": number
      }
    },
    "phone": number,
    "website": string,
    "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string
    }
}

export interface Post {
    id: number,
    userId: number,
    title: string,
    body: string
}
export interface MessageState {
  message: string
}
export interface Event {
    id: number
    category: string
    title: string
    description: string
    location: string
    date: string
    time: string
    petsAllowed: boolean
    organizer: string
}