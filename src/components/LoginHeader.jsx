function LoginHeader({ h1, p }) {
  return (
    <div className="mb-9">
      <h1 className="text-[20px] font-semibold">{h1}</h1>
      <br />
      <p className="text-[13px]">{p}</p>
    </div>
  );
}

export default LoginHeader;
