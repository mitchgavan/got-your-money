import React from 'react'
import { Redirect } from 'react-router-dom'

const NoMatch = ({ location }) => <Redirect to="/" />

export default NoMatch
