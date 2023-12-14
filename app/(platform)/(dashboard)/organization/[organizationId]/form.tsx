"use client";

import { type State, create } from "@/actions/create-board";
import { useFormState } from "react-dom";
import { FormInput } from "./form-input";
import { FormButton } from "./form-button";

export const Form = () => {
  const initialState: State = {
    message: null,
    errors: {},
  };
  const [state, dispatch] = useFormState(create, initialState);
  return (
    <form action={dispatch}>
      <FormInput errors={state?.errors} />
      <FormButton />
    </form>
  );
};
