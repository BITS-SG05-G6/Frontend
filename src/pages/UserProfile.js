import React from "react";
import SideBar from "../components/common/SideBar";
import Header from "../components/common/Header";
import FormInput from "../components/common/FormInput";
import Button from "../components/common/Button";

function UserProfile() {
  return (
    <div>
      <SideBar />
      <div className="pl-64 flex flex-col gap-5">
        <Header title="User Profile" username="Tom Vo" />
        {/* Page Content */}
        <div className="ml-10 px-10 py-10 w-4/6">
          {/* Title */}
          <div className="flex flex-col mb-10">
            <span className="text-xl font-semibold">Account Information</span>
            <span className="text-sm font-normal text-[#929EAE]">
              Update your account information
            </span>
          </div>

          {/* Form */}
          <div>
            <form>
              {/* Title & Edit Button */}
              <div className="flex flex-row justify-between mb-9">
                <span className="text-lg font-semibold">
                  Personal Information
                </span>
                <button className="text-lg font-semibold text-[#EF5DA8]">
                  Edit
                </button>
              </div>
              {/* Form Details */}
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-7">
                  <FormInput label={"First Name"} size={"noMaxWidth"} />
                  <FormInput label={"Last Name"} size={"noMaxWidth"} />
                  <FormInput label={"Date of Birth"} size={"noMaxWidth"} />
                  <FormInput label={"Mobile Number"} size={"noMaxWidth"} />
                </div>
                <FormInput label={"Email"} size={"noMaxWidth"} />
                <div className="grid grid-cols-2 gap-7">
                  <FormInput label={"New Password"} size={"noMaxWidth"} />
                  <FormInput label={"Confirm Password"} size={"noMaxWidth"} />
                </div>
              </div>
              <Button className="mt-10" size={"xl"}>
                Update
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
