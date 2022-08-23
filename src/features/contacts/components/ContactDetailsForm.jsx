import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Grid, Input, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";

import actions from "../../../actions";

const ContactDetailsForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const contacts = useSelector((state) => state.contacts);
  const contact = contacts.item;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (id) {
      fetchContact();
    }
  }, [id]);

  useEffect(() => {
    if (contact) {
      setValue("name", contact.name);
      setValue("avatar", contact.avatar);
      setValue("email", contact.email);
      setValue("mobile_number", contact.mobile_number);
      setValue("nationality", contact.nationality);
      setValue("gender", contact.gender);
      setValue("date_of_birth", contact.date_of_birth);
    }
  }, [contact]);

  const fetchContact = () => {
    dispatch(actions.contactActions.getContact(id));
  };

  const onSubmit = (data) => {
    if (id) {
      dispatch(actions.contactActions.updateContact(id, data, { onSuccess }));
    } else {
      dispatch(actions.contactActions.createContact(data, { onSuccess }));
    }
  };

  const onSuccess = () => {
    if (id) {
      fetchContact();
    } else {
      navigate("/contact/list");
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box>
              <Input
                fullWidth
                error={errors.name}
                inputProps={{
                  placeholder: "Name",
                  ...register("name", {
                    required: "This field should not be empty.",
                  }),
                }}
              />
              <Box
                sx={{
                  fontSize: 12,
                  color: "error.main",
                  fontFamily: "allVariants.fontFamily",
                }}
              >
                {errors.name && <p>{errors.name.message}</p>}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Input
                fullWidth
                error={errors.avatar}
                inputProps={{
                  placeholder: "Avatar",
                  ...register("avatar", {
                    required: "This field should not be empty.",
                  }),
                }}
              />
              <Box
                sx={{
                  fontSize: 12,
                  color: "error.main",
                  fontFamily: "allVariants.fontFamily",
                }}
              >
                {errors.avatar && <p>{errors.avatar.message}</p>}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Input
                fullWidth
                error={errors.email}
                inputProps={{
                  placeholder: "E-mail Address",
                  ...register("email", {
                    required: "This field should not be empty.",
                  }),
                }}
              />
              <Box
                sx={{
                  fontSize: 12,
                  color: "error.main",
                  fontFamily: "allVariants.fontFamily",
                }}
              >
                {errors.email && <p>{errors.email.message}</p>}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Input
                fullWidth
                error={errors.mobile_number}
                inputProps={{
                  placeholder: "Mobile Number",
                  ...register("mobile_number", {
                    required: "This field should not be empty.",
                  }),
                }}
              />
              <Box
                sx={{
                  fontSize: 12,
                  color: "error.main",
                  fontFamily: "allVariants.fontFamily",
                }}
              >
                {errors.mobile_number && <p>{errors.mobile_number.message}</p>}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Input
                fullWidth
                error={errors.nationality}
                inputProps={{
                  placeholder: "Nationality",
                  ...register("nationality", {
                    required: "This field should not be empty.",
                  }),
                }}
              />
              <Box
                sx={{
                  fontSize: 12,
                  color: "error.main",
                  fontFamily: "allVariants.fontFamily",
                }}
              >
                {errors.nationality && <p>{errors.nationality.message}</p>}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Input
                fullWidth
                error={errors.gender}
                inputProps={{
                  placeholder: "Gender",
                  ...register("gender", {
                    required: "This field should not be empty.",
                  }),
                }}
              />
              <Box
                sx={{
                  fontSize: 12,
                  color: "error.main",
                  fontFamily: "allVariants.fontFamily",
                }}
              >
                {errors.gender && <p>{errors.gender.message}</p>}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Input
                fullWidth
                error={errors.date_of_birth}
                inputProps={{
                  placeholder: "Date of Birth",
                  ...register("date_of_birth", {
                    required: "This field should not be empty.",
                  }),
                }}
              />
              <Box
                sx={{
                  fontSize: 12,
                  color: "error.main",
                  fontFamily: "allVariants.fontFamily",
                }}
              >
                {errors.date_of_birth && <p>{errors.date_of_birth.message}</p>}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Button variant="contained" color="secondary" type="submit">
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ContactDetailsForm;
