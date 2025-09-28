// import axios from "axios";
// import type { AxiosResponse } from "axios"; 


// interface Todo {
//     userId: number; 
//     id: number;
//     title: string;
//     completed: boolean;
// }

// const fetchData = async () => {
//     try {
//         const response: AxiosResponse<Todo> = await axios.get<Todo>(
//             "https://jsonplaceholder.typicode.com/todos/1"
//         );

//         console.log("Data:", response.data); 
//     } catch (error: any) {
//         if (axios.isAxiosError(error)) {
//             console.log("Axios Error:", error.message);

//             if (error.response) {
//                 console.log("Status:", error.response.status);
//                 console.log("Data:", error.response.data);
//             }
//         } else {
//             console.log("Error:", error.message);
//         }
//     }
// };

// fetchData();


import express, { type Request, type Response } from 'express'

const app = express()
const port = 3000

app.get('/', (request: Request, response: Response) => {
    response.send("Hello, TypeScript with Express Js");
})

app.listen(port,()=> console.log(`Server running on port ${port}`))