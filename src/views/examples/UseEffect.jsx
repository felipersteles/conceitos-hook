import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseEffect = (props) => {
    const [numero, alterarNumero] = useState(1);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <div className="center">
                <input type="number" className="input" value={numero} onChange={evento => alterarNumero(evento.target.value) } />
            </div>
        </div>
    )
}

export default UseEffect
