import React from "react";

const withConsoleLog = (Component) => {

    const WrappedComponent = () => {
        React.useEffect(()=>{
        console.log('Hola mundo');
    }, [])

    return <Component />;
}

return WrappedComponent;
} 

export const ComponenteA = () => {
    return(
        <>
        <p>Hola, soy el componente A</p>
        </>
    )
}

export const ComponenteB = () => {
    return(
        <>
        <p>Hola, soy el componente B</p>
        </>
    )
}

export const ExampleComponenteA = withConsoleLog(ComponenteA)
export const ExampleComponenteB = withConsoleLog(ComponenteB)