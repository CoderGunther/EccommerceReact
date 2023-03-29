
export const Login = () => {
    let nombre = "pepito";

    const saludar = () => {
        console.log("como estan?")
    }
    return (
        <div style={{ backgroundColor: "steelblue" }}>
            <h1>Hola desde el componenete login</h1>
            <h3>mi nombre es {nombre}</h3>
            <button onclick={saludar}>saludar</button>
        </div>
    );
};