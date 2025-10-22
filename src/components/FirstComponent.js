import MyComponent from "./MyComponent";

const FirstComponent = () => {
    return(
        <div>
            <h1>Primeiro Componente</h1>
            <p className="teste">meu texto</p>
            <MyComponent/>
        </div>
    );
};

export default FirstComponent;