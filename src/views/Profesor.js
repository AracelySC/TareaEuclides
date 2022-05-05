import Form from "../components/Form";
import '../style/Common.css'
import Button from '../components/Button';
import React, { useState } from "react";
import CustomInput from "../components/Input";

export default function Profesor() {

    const [profesor, setProfesor] = useState("Sin Calcular");
    const handleCalculate = (e) => {

    };
    const selectFiltro = ['Femenino', 'Masculino','NA'];
    const selectFiltro1 = ['Turrialba', 'Paraiso'];
    const selectFiltro2 = ['Beginner', 'Intermediate','Advanced'];
    const selectFiltro3 = ['Nunca', '1 a 5 veces','Mas de 5'];
    const selectFiltro4 = ['Toma de decisiones', 'Diseño de red','Otro'];
    const selectFiltro5 = ['Bajo', 'Promedio','Alto'];
    const selectFiltro6 = ['Nunca', 'A veces','A menudo'];
    

    return(
        <div className='body'>
        <h2 className='text-center'>Adivinar Tipo de Profesor</h2>

        <div className='p-5'>
                <Form onSubmit={handleCalculate} name="aprendizajeForm">
                <span>Edad: </span>
                    <CustomInput type="number" errorMsg="Inserte el edad" className='mt-2' name='promedio' min="0" placeholder='Edad'></CustomInput>
                  
                    <div className="mt-2">
                        <span>Sexo: </span>
                        <select name="sexo">
                            {selectFiltro.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                              
                    <div className="mt-2">
                    <span>Autoevaluación del maestro de su habilidad o experiencia enseñando: </span>
                        <select name="experiencia">
                            {selectFiltro2.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-2">
                    <span>Número de veces que el profesor ha impartido este tipo de curso : </span>
                        <select name="impartido">
                            {selectFiltro3.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-2">
                    <span>Antecedentes de la disciplina del maestro o área de especialización : </span>
                        <select name="antecedentes">
                            {selectFiltro4.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-2">
                    <span>Habilidades del maestro en el uso de computadoras: </span>
                        <select name="habilidad">
                            {selectFiltro5.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-2">
                    <span>La experiencia del docente utilizando la tecnología basada en la Web para la enseñanza: </span>
                        <select name="experiencia">
                            {selectFiltro6.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-2">
                    <span>La experiencia del docente en el uso de un sitio Web: </span>
                        <select name="experiencia_sito">
                            {selectFiltro6.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <Button text="Calcular tipo de profesor" type="submit" />
                    <div>
                        <span>Mi tipo de profesor es: {profesor}</span>
                    </div>
                </Form>
            </div>
        </div>
    )
}
