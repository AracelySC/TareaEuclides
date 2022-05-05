import Form from "../components/Form";
import '../style/Common.css'
import Button from '../components/Button';
import React, { useState } from "react";
import CustomInput from "../components/Input";

export default function Recinto() {
    const [recinto, setRecinto] = useState("Sin Calcular");
    const handleCalculate = (e) => {

    };
    const selectFiltro = ['divergente', 'convergente', 'asimilador', 'acomodador'];
    const selectFiltro1 = ['Femenino', 'Masculino'];

    return (
        <div className='body'>
            <h2 className='text-center'>Adivinar Recinto</h2>
            <div className='p-5'>
                <Form onSubmit={handleCalculate} name="recinto">
                    <div>
                        <span>Estilo de Aprendizaje: </span>
                        <select name="aprendizaje">
                            {selectFiltro.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <span>Último promedio para matrícula: </span>
                    <CustomInput errorMsg="Inserte el promedio" className='mt-2' name='promedio' placeholder='Último promedio para matrícula'></CustomInput>
                    <div>
                        <span>Sexo: </span>
                        <select name="sexo">
                            {selectFiltro1.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <Button text="Calcular Recinto" type="submit" />
                    <div>
                        <span>Mi Recinto es: {recinto}</span>
                    </div>
                </Form>
            </div>
        </div>
    )
}

