import {rest} from 'msw';


export const handlers = [
    rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {

        return res(

            ctx.status(200),
            ctx.json([
                {name : 'john', email : "johnDeo@gmail.com"},
                {name : 'Sam', email : "sam@gmail.com"},
                {name : 'peter', email : "peter@gmail.com"},
                {name : 'rock', email : "rock@gmail.com"},
            ])

        )

    })
]