import React from 'react';

const Example2 = () => {
    const [ativo, setAtivo] = React.useState(false);
    const [dados, setDados] = React.useState({ nome: '', idade: 0});

    const handleClick = () => {
        setAtivo(!ativo);
        setDados({ ...dados, nome: "Carlos", faculdade: "UNB", idade: 30 })
    }

    return (
        <>
            <div>
                <button onClick={handleClick}>
                {ativo ? "Ativo" : "Inativo"}
                </button>
            </div>
            <br />
            {ativo ? (
                <div>
                    <p>{dados.nome}</p>
                    <p>{dados.idade}</p>
                </div>
            ) : null}
        </>
    )
}

export default Example2;