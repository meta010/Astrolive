import { TextField, Typography } from '@material-ui/core';
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import './Registration.css'

const BasicInformation = () => {
    const { control } = useFormContext();
    return (

          <div className='section1'>
        <div>
        <Typography>Name</Typography>
        <Controller
          control={control}
          name="Name"
          render={({ field }) => (
            <TextField
              id="name"
              label="Enter your full name"
              variant="outlined"
              placeholder="Enter Your full name"
              fullWidth
              margin="dense"
              {...field}
            />
          )}
        /></div>
        <div>
        <Typography>E-Mail</Typography>
        <Controller
          control={control}
          name="E-mail"
          render={({ field }) => (
            <TextField
              id="e-mail"
              label="@example.com"
              variant="outlined"
              placeholder="Enter Your Email"
              fullWidth
              margin="dense"
              {...field}
            />
          )}
        /></div>
        <div>
        <Typography>Mobile Number</Typography>
        <Controller
          control={control}
          name="Phonenumber"
          render={({ field }) => (
            <TextField
              id="phone-number"
              label="Enter your mobile no."
              variant="outlined"
              placeholder="Enter Your Phone Number"
              fullWidth
              margin="dense"
              {...field}
            />
          )}
        />
        </div>
        </div>
      
    );
  };

export default BasicInformation