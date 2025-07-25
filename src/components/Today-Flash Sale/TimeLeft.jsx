function TimeLeft() {
  return (
    <div className="flex items-center gap-2">
      <p className="flex flex-col text-center">
        <span>Days</span>
        <span className="text-xl font-bold">09</span>
      </p>{" "}
      :
      <p className="flex flex-col text-center">
        <span>Hours</span>
        <span className="text-xl font-bold">09</span>
      </p>
      :
      <p className="flex flex-col text-center">
        <span>Minutes</span>
        <span className="text-xl font-bold">09</span>
      </p>
      :
      <p className="flex flex-col text-center">
        <span>Seconds</span>
        <span className="text-xl font-bold">09</span>
      </p>
    </div>
  );
}

export default TimeLeft;
