import { useNavigate } from "react-router-dom";
import ContactInput from "../components/ContactInput";

function Contact() {
  const navigate = useNavigate("");
  return (
    <div>
      <div className="m-8 text-sm text-gray-500">
        <span className="cursor-pointer" onClick={() => navigate("/")}>
          Home
        </span>{" "}
        / <span className="text-black">Contact</span>
      </div>
      <div className="flex flex-wrap-reverse gap-5 p-11 lg:flex-nowrap lg:justify-center">
        <div className="flex flex-col gap-4">
          <div>
            <div className="text-sm leading-[30px]">
              <img src="icons-phone.png" alt="" /> Call to Us
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +2349018819490</p>
            </div>
          </div>
          <hr />
          <div>
            <div className="text-sm leading-[30px]">
              <img src="icons-mail.png" alt="" /> Write to Us
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: customer@exclusive.com</p>
            </div>
          </div>
        </div>
        <div className="--right flex flex-col gap-5">
          <div className="flex flex-wrap gap-3">
            <ContactInput placeholder="Your Name" />
            <ContactInput placeholder="Your Email" />
            <ContactInput placeholder="Your Phone" />
          </div>
          <div>
            <textarea
              name="This"
              id=""
              className="h-[200px] w-full bg-[#F5F5F5] p-4 text-sm outline-none"
              placeholder="Your Message"
            ></textarea>
            <button className="absolute right-10 flex rounded bg-[#DB4444] p-3 text-sm text-white">
              Send Message
            </button>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
