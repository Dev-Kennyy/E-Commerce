function CategoryHeader({ p, h2 }) {
  return (
    <div>
      <p className="fw-bold rounded-sm border-l-8 border-[#DB4444] p-3 font-bold text-[#DB4444]">
        {p}
      </p>
      <h2 className="text-[25px] font-semibold">{h2}</h2>
    </div>
  );
}

export default CategoryHeader;
