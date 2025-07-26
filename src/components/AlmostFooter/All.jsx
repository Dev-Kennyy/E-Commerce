import One from "./One";

function All() {
  return (
    <div className="flex flex-wrap justify-center gap-10 pt-20">
      <One
        h3="FREE AND FAST DELIVERY"
        p="Free delivery for all orders over $140"
        src="Services.png"
      />
      <One
        h3="24/7 CUSTOMER SERVICE"
        p="Friendly 24/7 customer support"
        src="Services.png"
      />
      <One
        h3="MONEY BACK GUARANTEE"
        p="We reurn money within 30 days"
        src="Services.png"
      />
    </div>
  );
}

export default All;
