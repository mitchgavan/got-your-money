import { compose, head, filter, map, path } from 'ramda'

// returns the first error messages for actions
// * We assume when any request fails on a page that
//   requires multiple API calls, we shows the first error

export const createErrorMessageSelector = actions => state => {
    const firstError = compose(
        head,
        filter(Boolean),
        map(action => path(['error', action], state))
    )

    return firstError(actions)
}