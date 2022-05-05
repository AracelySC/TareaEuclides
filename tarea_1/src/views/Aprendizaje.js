import Form from "../components/Form";
import '../style/Common.css'
import Button from '../components/Button';
import React, { useState } from "react";
import CustomInput from "../components/Input";

export default function Aprendizaje() {

    const [aprendizaje, setAprendizaje] = useState("Sin Calcular");
    const handleCalculate = (e) => {

    };
    const selectFiltro = ['Femenino', 'Masculino'];
    const selectFiltro1 = ['Turrialba', 'Paraiso'];
    return(
        <div className='body'>
        <h2 className='text-center'>Adivinar Tipo de Aprendizaje</h2>

        <div className='p-5'>
                <Form onSubmit={handleCalculate} name="aprendizajeForm">
                    <div>
                        <span>Recinto: </span>
                        <select name="recinto">
                            {selectFiltro1.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <span>Último promedio para matrícula: </span>
                    <CustomInput errorMsg="Inserte el promedio" className='mt-2' name='promedio' placeholder='Último promedio para matrícula'></CustomInput>
                    <div>
                        <span>Recinto: </span>
                        <select name="Sexo">
                            {selectFiltro.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <Button text="Calcular tipo de aprensizaje" type="submit" />
                    <div>
                        <span>Mi tipo de aprendizaje es: {aprendizaje}</span>
                    </div>
                </Form>
            </div>
        </div>
    )
}

