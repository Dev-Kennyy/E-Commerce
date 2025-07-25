import Left from "./Categories/Left";
import Right from "./Categories/Right";

function Categories() {
  return (
    <div className="flex-col items-center justify-center p-5 px-6 pt-12 sm:flex sm:flex-row md:px-16">
      <Left />
      <Right />
    </div>
  );
}

export default Categories;
