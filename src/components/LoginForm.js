import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Dialog,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FormProvider, FTextField } from "./forms";

const defaultValues = {
  username: "Joanne",
  password: 123,
};

function LoginForm() {
  const [showPassword, setShowPassword] = useState(true);

  const auth = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  const from = location.state?.from?.pathname || "/";

  const methods = useForm({ defaultValues });
  const { handleSubmit, isSubmitting } = methods;

  const onSubmit = (data) => {
    const username = data.username;
    const password = data.password;

    auth.login(username, password, () =>
      navigate(from, {
        state: { ...state },
        replace: true,
      })
    );
  };

  function onDismiss() {
    navigate(-1);
  }

  return (
    <Dialog open={true} onClose={onDismiss}>
      <Stack
        spacing={3}
        alignItems="center"
        sx={{ minWidth: { md: 12 }, p: 5 }}
      >
        <Typography variant="h4" fontWeight="700">
          LOGIN FORM
        </Typography>

        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" spacing={3}>
            <FTextField
              fullWidth
              name="username"
              label="Username"
              type="text"
              value={defaultValues.username}
            />

            <FTextField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              value={defaultValues.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <LoadingButton
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Submit
            </LoadingButton>
          </Stack>
        </FormProvider>
      </Stack>
    </Dialog>
  );
}

export default LoginForm;
