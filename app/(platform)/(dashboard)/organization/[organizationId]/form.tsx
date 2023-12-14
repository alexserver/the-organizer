"use client";

import { createBoard } from "@/actions/create-board";
import { FormInput } from "./form-input";
import { FormButton } from "./form-button";
import { useAction } from "@/hooks/use-action";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "success");
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const onSubmit = (data: FormData) => {
    const title = data.get("title") as string;
    execute({ title });
  };
  return (
    <form action={onSubmit}>
      <FormInput errors={fieldErrors} />
      <FormButton />
    </form>
  );
};
