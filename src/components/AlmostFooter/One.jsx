function One({ src, h3, p }) {
  return (
    <div className="flex flex-col items-center">
      <img src={src} alt="" width="39px" />
      <h3 className="text-[12px] font-bold">{h3}</h3>
      <p className="text-[10px]">{p}</p>
    </div>
  );
}

export default One;
