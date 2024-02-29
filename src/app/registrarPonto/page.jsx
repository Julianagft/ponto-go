'use client'
import React from 'react';
import * as yup from "yup";
import { Formik } from "formik";

import ColorButtons from "../Components/ColorButtons";
import { Box, FormControl, TextField, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const getCurrentDateTimeInBrasilia = () => {
    const localDate = new Date();
    const brasiliaDate = new Date(localDate.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
    const year = brasiliaDate.getFullYear();
    const month = String(brasiliaDate.getMonth() + 1).padStart(2, "0");
    const day = String(brasiliaDate.getDate()).padStart(2, "0");
    const hours = String(brasiliaDate.getHours()).padStart(2, "0");
    const minutes = String(brasiliaDate.getMinutes()).padStart(2, "0");
  
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const initialValues = {
    birthdate: getCurrentDateTimeInBrasilia(),
  };


export default function RegistrarPonto() {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = async (values) => {
        console.log('handleFormSubmit foi chamado');

        const dataToSend = {
        date: "2022-10-26T15:00:00.000Z",
        fenceFakeLocation: false,
        fenceInside: false,
        fromApi: true,
        };

        const result = await submitPoint(dataToSend);

        if (result.success) {
        window.alert('Ponto registrado com sucesso!');
        } else {
        window.alert('Erro ao registrar ponto. Por favor, tente novamente.');
       
        }
  };

    

    return (
        // <Box>
            

        //     <div className="mt-5" >
        //         <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
        //         <TextField
        //           variant="outlined"
        //           color="secondary"
        //           label="Registrar Ponto"
        //           type="date"
        //           InputLabelProps={{
        //             shrink: true,
        //           }}
        //           defaultValue={dataHoraFormatada}
        //          />              
        //          </FormControl>
        //     </div>

        //     <ColorButtons label="BATER PONTO" />
        // </Box>

        <Box m="20px">
            <Typography sx={{ paddingLeft: 3, fontSize: 25  , fontWeight: 'bold' }} variant="h6" noWrap component="div">
                REGISTRO DE PONTO
            </Typography>
            <Typography sx={{ paddingLeft: 3, fontSize: 16 }} color="secondary" variant="h6" noWrap component="div">
                Registre seu Ponto Abaixo.
            </Typography>
            <Formik
            onSubmit={handleFormSubmit}
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
                    onChange={handleChange}
                    value={values.birthdate}
                    name="birthdate"
                    error={!!touched.birthdate && !!errors.birthdate}
                    helperText={touched.birthdate && errors.birthdate}
                    sx={{ gridColumn: "span 2" }}
                    InputLabelProps={{
                        shrink: true,
                        style: { marginBottom: "8px" }
                    }}
                    />
                </Box>
                <Box display="flex" justifyContent="start" mt="20px">
                    <ColorButtons label="BATER PONTO" />
                </Box>
                </form>
            )}
            </Formik>
        </Box>
    )
}

const checkoutSchema = yup.object().shape({
    birthdate: yup.string().required("required"),
  });