interface FormInputProps {
  errors?: {
    title?: string[] | null;
  };
}
export const FormInput = ({ errors }: FormInputProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <input
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        className="border-black border p-1"
      />
      {errors?.title ? (
        <div>
          {errors?.title?.map((error: string) => (
            <p key={error} className="text-rose-500">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};
