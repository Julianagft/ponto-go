'use client'
import React, { useState } from 'react';

// COMPONENTES
import ColorButtons from "../../Components/ColorButtons";
import requests from '../../services/ApiRequest';

// BIBLIOTECAS
import * as yup from "yup";
import { Formik } from "formik";
import { Box, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";


const getCurrentDateTimeInBrasilia = () => {
    const currentTime = new Date();
    const brasiliaOffset = -3;
    const localOffset = currentTime.getTimezoneOffset() * 60000;
    const brasiliaTime = new Date(currentTime.getTime() + localOffset + (3600000 * brasiliaOffset));

    let formattedDateTime = brasiliaTime.toISOString()
    .replace(/\.\d+Z$/, ''); 
    
    const timezoneOffsetFormatted = (brasiliaOffset >= 0 ? '+' : '-') + 
                                  String(Math.abs(brasiliaOffset)).padStart(2, '0') + ':00';
    
    formattedDateTime += timezoneOffsetFormatted;

    return formattedDateTime;
};


const date = {
    initialValues: getCurrentDateTimeInBrasilia(),
};


//FUNÇÃO DA PÁGINA

export default function RegistrarPonto() {
    const isNonMobile = useMediaQuery("(min-width:600px)");


    //CONF DE API  
    const [formData, setFormData] = useState({
        date: getCurrentDateTimeInBrasilia(),
    });

    const handleInputChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleCadastrarPonto = async () => {
        try {
            const response = await requests.registroDePonto(formData)
            console.log('Resposta API:', response.data);
            alert('Ponto cadastrado com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar dados da empresa', error.message);
        }
    };

    return (

        <div className='w-full h-full flex flex-col justify-items-center content-center flex-wrap p-8 gap-2.5'>
            
            <div className='pl-4 font-bold text-xl md:text-3xl'>
                <h1>REGISTRO DE PONTO</h1>
            </div>

            <div className='text-purple-800 pl-4 mt-2 mb-5 '>
                <h1>Registre seu Ponto Abaixo.</h1>
            </div>
            
            <div className='flex flex-col w-full gap-2.5 shrink'>
                <Formik
                    initialValues={date}
                    validationSchema={checkoutSchema}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                    }) => (
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            console.log('Form submitted');
                            handleSubmit(e);
                        }}>
                            <Box
                                display="grid"
                                gap="30px"
                                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                sx={{
                                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                                }}
                            >
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="datetime-local"
                                    label="Registrar Ponto"
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                        handleChange(e);
                                        handleInputChange('date', e.target.value);
                                    }}
                                    value={values.currentDate}
                                    name="currentDate"
                                    error={!!touched.currentDate && !!errors.currentDate}
                                    helperText={touched.currentDate && errors.currentDate}
                                    sx={{ gridColumn: "span 2" }}
                                    InputLabelProps={{
                                        shrink: true,
                                        style: { marginBottom: "8px" }
                                    }}
                                />
                            </Box>
                            <Box display="flex" justifyContent="start" mt="20px">
                                <ColorButtons label="BATER PONTO" onClick={handleCadastrarPonto} />
                            </Box>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

const checkoutSchema = yup.object().shape({
    currentDate: yup.string().required("required"),
});