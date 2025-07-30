import InputField from "./InputField";
import PasswordInput from "./PasswordInput";

function EditProfile() {
  return (
    <div className="m-2 flex flex-col justify-center p-3 sm:m-16">
      <h2 className="text-[#DB4444]">Edit Profile</h2>
      <br />
      <div className="flex flex-wrap gap-3 sm:gap-11">
        <InputField type="text" placeholder="Full Name" label="First Name" />
        <InputField type="text" placeholder="Last Name" label="Last Name" />
      </div>
      <br />
      <div className="flex flex-wrap gap-3 pb-3 sm:gap-11">
        <InputField type="mail" placeholder="abc@gmail.com" label="Email" />
        <InputField
          type="text"
          placeholder="Flat H10, Fed....."
          label="Address"
        />
      </div>
      <PasswordInput
        type="password"
        label="Password Changes"
        placeholder="Current Password"
      />
      <PasswordInput type="password" label="" placeholder="New Password" />
      <PasswordInput
        type="password"
        label=""
        placeholder="Confirm new Password"
      />
      <button className="m-3 w-32 bg-[#DB4444] p-3 text-white">Confirm</button>
    </div>
  );
}

export default EditProfile;
