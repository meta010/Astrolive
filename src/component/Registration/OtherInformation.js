import { Avatar, TextField } from '@material-ui/core';
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';

const OtherInformation = () => {
    const { control } = useFormContext();
    return (
        <>

        <Avatar variant={"circular"} alt="The image" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2" style={{
            width: 150,
            height: 150,
            marginLeft: 500,
          }} />

          <Controller
            control={control}
            name="images"
            render={({ field }) => (
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                //style={{ display: 'none' }}
                //onChange={handleFileChange}
                {...field}
              />
            )}
          />

         <Controller
            control={control}
            name="emailAddress"
            render={({ field }) => (
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                placeholder="Enter Your E-mail Address"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
    
          <Controller
            control={control}
            name="phoneNumber"
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
          />
          <Controller
            control={control}
            name="alternatePhone"
            render={({ field }) => (
              <TextField
                id="alternate-phone"
                label="Alternate Phone"
                variant="outlined"
                placeholder="Enter Your Alternate Phone"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </>
      );
  };

export default OtherInformation