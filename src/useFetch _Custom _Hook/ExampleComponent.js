import React from "react";
import useFetch from "./useFetch";

const ExampleComponent = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
        {data && (
            <ul>
                {data.map((item) => (
                    <p key={item.id}>{item.name}</p>
                ))}
            </ul>
        )}
        </div>
    );
};

export default ExampleComponent;
