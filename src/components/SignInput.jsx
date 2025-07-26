function SignInput({ placeholder, type }) {
  return (
    <>
      <input
        type={type}
        className="w-[300px] border-b-2 border-gray-500 p-1 text-sm outline-none lg:text-[18px]"
        placeholder={placeholder}
      />
    </>
  );
}

export default SignInput;
