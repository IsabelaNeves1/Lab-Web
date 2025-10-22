const TemplateExpression = () => {
        const nome ="Isabela";
        const data ={
            age: 19,
            job: "Programadora",
        };
        return(
        <div>
            <h1>olá {nome}, seja bem vindo!</h1>
            <p>Você atua como: {data.job}</p>
            <p>{4 + 4}</p>
        </div>
    );
};

export default TemplateExpression;