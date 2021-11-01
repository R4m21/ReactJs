import React from 'react'

const UserContext = React.createContext("chauhan")

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider,UserConsumer}

export default UserConsumer