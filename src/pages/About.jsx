import { useNavigate } from "react-router-dom";
import Cards from "../components/Cards";
import All from "../components/AlmostFooter/All";

function About() {
  const navigate = useNavigate("/");
  return (
    <div>
      <div className="m-8 text-sm text-gray-500">
        <span className="cursor-pointer" onClick={() => navigate("/")}>
          Home
        </span>
        / <span className="text-black">About</span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 p-5 pt-6 md:flex-nowrap">
        <div>
          <h1 className="text-4xl">Our Story</h1>
          <div className="pt-4 text-[13px]">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region. <br />
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </div>
        </div>
        <img
          src="portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
          alt=""
          width="450px"
        />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <All />
      </div>
    </div>
  );
}

export default About;
