function PasswordInput({ type, placeholder, width, label }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label} className="text-sm">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        width={width}
        className="bg-[#F5F5F5] p-2 text-sm shadow outline-none hover:border md:w-[600px]"
      />
    </div>
  );
}

export default PasswordInput;
