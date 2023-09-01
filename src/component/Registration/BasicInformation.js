import { TextField } from '@material-ui/core';
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import './Registration.css'

const BasicInformation = () => {
    const { control } = useFormContext();
    return (

        <div className='section1'>
          <div className='section2'>
        <div>
        <Controller
          control={control}
          name="Name"
          render={({ field }) => (
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              placeholder="Enter Your full name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        /></div>
        <div>
        <Controller
          control={control}
          name="E-mail"
          render={({ field }) => (
            <TextField
              id="e-mail"
              label="E-mail"
              variant="outlined"
              placeholder="Enter Your Email"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        /></div>
        <div>
        <Controller
          control={control}
          name="Phonenumber"
          render={({ field }) => (
            <TextField
              id="phone-number"
              label="Phone Number"
              variant="outlined"
              placeholder="Enter Your Phone Number"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        /></div>
        <div>
        <Controller
          control={control}
          name="Phonenumber"
          render={({ field }) => (
            <TextField
              id="phone-number"
              label="Phone Number"
              variant="outlined"
              placeholder="Enter Your Phone Number"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        /></div>
        </div>
        <div className='section3'>
          <div>
        <Controller
          control={control}
          name="Phonenumber"
          render={({ field }) => (
            <TextField
              id="phone-number"
              label="Phone Number"
              variant="outlined"
              placeholder="Enter Your Phone Number"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        /></div>
        <div>
        <Controller
          control={control}
          name="Phonenumber"
          render={({ field }) => (
            <TextField
              id="phone-number"
              label="Phone Number"
              variant="outlined"
              placeholder="Enter Your Phone Number"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        /></div>
        <div>
        <Controller
          control={control}
          name="Phonenumber"
          render={({ field }) => (
            <TextField
              id="phone-number"
              label="Phone Number"
              variant="outlined"
              placeholder="Enter Your Phone Number"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        /></div>
        <div>
        <Controller
          control={control}
          name="Phonenumber"
          render={({ field }) => (
            <TextField
              id="phone-number"
              label="Phone Number"
              variant="outlined"
              placeholder="Enter Your Phone Number"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        /></div>
            </div>
          </div>
      
    );
  };

export default BasicInformation