## Recoil

- simple to use. VERY simple (we only need atoms and selectors)
- recoil selectors are awesome
- gained popularity quickly (12.5k stars) https://github.com/facebookexperimental/Recoil
- very performant (watch video here for more: https://recoiljs.org/)
- has awesome dev tools

## React Query

- works with REST and GraphQL
- gained popularity quickly (19.1k stars) https://github.com/tannerlinsley/react-query
- super easy to work with
- assumes there is a spearation between clinet state and server state
- it can handle cache, dedup requests, provide optimistic updates
- has awesome dev tools

## What we will do

- It looks like the datamodels and the backend endpoints will change significantly
- We have time and a chance to innovate within our product
- We will set up our frontend to use recoil and react query
- We will use react-query as global state for all data that comes from API, we will use recoil as local global state
- I think we should use GraphQL for queries and subscriptions but we need Joshua to run that experiment first, so for now we will use mock data (that's what's expected from us anyway).

## Container component vs presentational component

- use containers to connect to global state, fetch data, use hooks, etc...
- use components for presentation purposes
- pass props down to components
- WHY? Clean Architecture. Easier to maintain in the long run. Separation of presentation layer from API layer also from global state layer
