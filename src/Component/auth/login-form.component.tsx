import { Button, TextField } from "@mui/material";
import React from "react";

const LoginForm: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen gap-8 dark:bg-slate-900">
        <h6 className="text-6xl dark:text-white">CryptoStats</h6>
        <div className="flex flex-col gap-2">
          <TextField label="Email" className="w-80" type="email" required />
          <TextField
            label="Password"
            className="w-80"
            type="password"
            required
          />
        </div>

        <Button className="w-80" variant="contained" color="primary">
          {" "}
          <span className="p-1">Login</span>{" "}
        </Button>
      </div>
    </>
  );
};

export { LoginForm };
