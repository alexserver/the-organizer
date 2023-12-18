"use client";

import { createBoard } from "@/actions/create-board";
import { FormButton } from "./form-button";
import { useAction } from "@/hooks/use-action";
import { FormInput } from "@/components/form/form-input";

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
    console.log({ title });
    execute({ title });
  };
  return (
    <form action={onSubmit}>
      <FormInput label="Form Title" id="title" errors={fieldErrors} />
      <FormButton />
    </form>
  );
};
