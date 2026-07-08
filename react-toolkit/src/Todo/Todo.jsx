import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { TodoList } from './TodoList';

export const Todo = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState("Defalut Error");

    useEffect(() => {
        let i = 0;
        while (i < 1000000000) {
            i++
        }
        i = 0;
        while (i < 1000000000) {
            i++
        }

        setIsLoading(true);
        setError("Error Changed")
        axios.get('https://dummyjson.com/todos').then(response => {
            setData(response?.data?.todos)
        }).catch((e) => {
            setError("Error occured")
        }).finally(() => {
            setIsLoading(false);
        });

    }, []);


    if (isLoading) {
        return (
            <div>
                <h1>Data is Loading</h1>
            </div>
        )
    }


    // if (error) {
    //     return (
    //         <div>
    //             <h1>Error Occured</h1>
    //         </div>
    //     )
    // }


    return (
        <div>
            <h1>{error}</h1>
            <TodoList todos={data} />
        </div>
    )
}