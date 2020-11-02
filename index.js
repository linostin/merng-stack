const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose')
require("dotenv").config();


// ------------------------------------------
// типы для graphql
const typeDefs = gql`
    type Query {
        sayHi: String!
    }
`  
// ответы при обращение к api apollo-server
const resolvers = {
    Query: {
        sayHi: () => 'Hello world!' 
    }
}

// подключаем типы и ответы к apollo-server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// ------------------------------------------

const PORT = process.env.PORT || 5000;

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        server.listen(PORT, () => console.log(`The server has started on port: ${PORT}, URL: ${res.url}`))
    } catch (error) {
        console.log('Server ERROR: ', error.message)
        process.exit(1)
    }
}

startServer()
