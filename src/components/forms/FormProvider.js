import React from "react";
import { FormProvider as DubFormProvider } from "react-hook-form";

function FormProvider({ methods, onSubmit, children }) {
  return (
    <DubFormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </DubFormProvider>
  );
}

export default FormProvider;
