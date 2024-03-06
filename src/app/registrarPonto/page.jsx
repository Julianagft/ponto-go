'use client'
import React, { useState } from 'react';

// COMPONENTES
import ColorButtons from "../../Components/ColorButtons";
import requests from '@/services/ApiRequest';

// BIBLIOTECAS
import * as yup from "yup";
import { Formik } from "formik";
import { Box, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";


// const getCurrentDateTimeInBrasilia = () => {
//     const localDate = new Date();
//     const brasiliaDate = new Date(localDate.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
//     const year = brasiliaDate.getFullYear();
//     const month = String(brasiliaDate.getMonth() + 1).padStart(2, "0");
//     const day = String(brasiliaDate.getDate()).padStart(2, "0");
//     const hours = String(brasiliaDate.getHours()).padStart(2, "0");
//     const minutes = String(brasiliaDate.getMinutes()).padStart(2, "0");

//     return `${year}-${month}-${day}T${hours}:${minutes}`;
// };

const getCurrentDateTimeInBrasilia = () => {
    const localDate = new Date();
    const brasiliaOffset = -3; 
    localDate.setHours(localDate.getHours() + brasiliaOffset);
    
    let formattedDate = localDate.toISOString().slice(0, -1); 
    formattedDate += (brasiliaOffset < 0 ? `${brasiliaOffset}:00` : `+${brasiliaOffset}:00`); 

    return formattedDate;
};

const initialValues = {
    currentDate: getCurrentDateTimeInBrasilia(),
};

const formattedDateBrasilia = () => {
    const localDate = new Date();
    const brasiliaDate = new Date(localDate.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));

    // Formate a data e hora no formato esperado pela API
    const formattedDate = brasiliaDate.toISOString().slice(0, -1); // Remova o "Z" no final

    return formattedDate;
}

//FUNÇÃO DA PÁGINA

export default function RegistrarPonto() {
    const isNonMobile = useMediaQuery("(min-width:600px)");


    //CONF DE API  
    const [formData, setFormData] = useState({
        date: '2022-10-13T18:15:30.728Z',
        latitude: null,
        longitude: null,
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
                    initialValues={initialValues}
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