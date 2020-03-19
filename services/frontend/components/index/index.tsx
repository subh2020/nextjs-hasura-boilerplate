import React, { Fragment } from 'react'
import { withApollo, useSubscription } from 'react-apollo'
import gql from 'graphql-tag'

const fetchUsersSubscription = gql`
  subscription {
    user {
      id
    }
  }
`

const Index = () => {
  const { data, loading, error } = useSubscription(fetchUsersSubscription)

  if (loading) {
    return <div>Loading1234...</div>
  }

  if (error) {
    return <p>Error1234: {error.message}</p>
  }

  return (
    <Fragment>
      Users:
      {data.user.map((user: { id: number }) => {
        return <div key={user.id}>{user.id}</div>
      })}
    </Fragment>
  )
}

export default withApollo(Index)