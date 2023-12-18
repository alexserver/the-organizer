"use client";

import { createBoard } from "@/actions/create-board";
import { useAction } from "@/hooks/use-action";
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";

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
      <FormSubmit>Save</FormSubmit>
    </form>
  );
};
