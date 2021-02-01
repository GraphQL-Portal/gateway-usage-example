# Gateway usage example
The example shows how to setup configs for the gateway to merge different services into single GraphQL endpoint.
## External dependencies
### Redis
You should have a correct endpoint to a running Redis instance in `./config/gateway.yaml:redis_connection_string`.

## Run
Install dependencies: `yarn`\
Start services to merge: `yarn start-services`\
Start the gateway: `yarn start` (or `portal` if you have installed it globally)

## Details
There are three example services: user and product services are independent, order service manages the relation between users and products.\
User and product service APIs are described using OpenAPI(Swagger) yaml-documents, Order API endpoint is described using JSONSchema.\
Each service has its own config in `./config/sources/`, they are described using [graphql-mesh](https://github.com/Urigo/graphql-mesh) handler's subset of config.\
Services are merged in an API `./config/apis/api.yaml`.\
Api config has additional definitions and resolver.\
Resolver `./resolvers/orders.js` defines how the gateway will merge data from different services into one GraphQL type.\
Other types are generated in runtime using graphql-mesh.