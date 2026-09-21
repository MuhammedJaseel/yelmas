import axios from "axios";
import { useRef } from "react";

export default function Form() {
  const formRef: any = useRef(null);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const body = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      nationality: e.target.nationality.value,
      budget: e.target.budget.value,
      furnishingStatus: e.target.furnishingStatus.value,
      tenantType: e.target.tenantType.value,
      parkingRequired: e.target.parkingRequired.value,
      paymentSchedule: e.target.paymentSchedule.value,
      preferredLocation: e.target.preferredLocation.value,
      movingDate: e.target.movingDate.value,
      note: e.target.note.value,
    };
    try {
      await axios.post("https://api.anolabs.site/yelmas/enquiry", body);
      formRef.current?.reset();
      alert("Successfully submitted, one of our agent will contact you soon");
    } catch (error) {
      console.log(error);
      alert("Error on submitting, try again");
    }
  };
  return (
    <div className="flex min-w-[50%] w-full justify-center items-start py-12">
      <div className="bg-[#F9F9FB] p-8 md:p-10 border border-[#EBEBF2]">
        <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
          <div>
            <label className="text-xs font-bold tracking-wider text-[#8E8B82] uppercase">
              FULL NAME *
            </label>
            <input
              type="text"
              placeholder="John Doe"
              name="name"
              required
              className="w-full pt-4 bg-transparent border-b border-[#333333]/20 pb-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-800 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-xs font-bold tracking-wider text-[#8E8B82] uppercase">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="w-full pt-4 bg-transparent border-b border-[#333333]/20 pb-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-800 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-bold tracking-wider text-[#8E8B82] uppercase">
                PHONE NUMBER *
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+971 50 000 0000"
                className="w-full pt-4 bg-transparent border-b border-[#333333]/20 pb-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-800 transition-colors"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-xs font-bold tracking-wider text-[#8E8B82] uppercase">
                NATIONALITY
              </label>
              <input
                type="text"
                name="nationality"
                placeholder="e.g. British"
                className="w-full pt-4 bg-transparent border-b border-[#333333]/20 pb-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-800 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-bold tracking-wider text-[#8E8B82] uppercase">
                BUDGET
              </label>
              <input
                type="text"
                name="budget"
                placeholder="AED 150,000"
                className="w-full pt-4 bg-transparent border-b border-[#333333]/20 pb-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-800 transition-colors"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-xs font-bold tracking-wider text-[#8E8B82] uppercase">
                Furnished / Non-Furnished
              </label>
              <select
                name="furnishingStatus"
                className="w-full pt-4 bg-transparent border-b border-[#333333]/20 pb-2 text-base text-gray-800 focus:outline-none focus:border-gray-800 transition-colors"
              >
                <option>Select Furnishing Status</option>
                <option value="Furnished">Furnished</option>
                <option value="Semi-Furnished">Semi-Furnished</option>
                <option value="Not-Furnished">Not-Furnished</option>
              </select>
            </div>

            {/* Tenant Type */}
            <div>
              <label className="text-xs font-bold tracking-wider text-[#8E8B82] uppercase">
                Family or Bachelor
              </label>
              <select
                name="tenantType"
                className="w-full pt-4 bg-transparent border-b border-[#333333]/20 pb-2 text-base text-gray-800 focus:outline-none focus:border-gray-800 transition-colors"
              >
                <option>Select Tenant Type</option>
                <option value="Furnished">Family</option>
                <option value="Semi-Furnished">Bachelor</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-xs font-bold tracking-wider text-[#8E8B82] uppercase">
                Parking Required
              </label>
              <div className="flex gap-6 pt-4 text-base text-gray-800">
                <label className="flex items-center gap-2">
                  <input type="radio" name="parkingRequired" value="Yes" />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="parkingRequired" value="No" />
                  No
                </label>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold tracking-wider text-[#8E8B82] uppercase">
                Payment Schedule
              </label>
              <select
                name="paymentSchedule"
                className="w-full pt-4 bg-transparent border-b border-[#333333]/20 pb-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-800 transition-colors"
              >
                <option value="">Select Payment Schedule</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Bi-Annually">Bi-Annually</option>
                <option value="Annually">Annually</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-xs font-bold tracking-wider text-[#8E8B82] uppercase">
                Preferred Location
              </label>
              <input
                type="text"
                name="preferredLocation"
                placeholder="e.g. Downtown Dubai"
                className="w-full pt-4 bg-transparent border-b border-[#333333]/20 pb-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-800 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-bold tracking-wider text-[#8E8B82] uppercase">
                Moving Date
              </label>
              <input
                type="text"
                name="movingDate"
                placeholder="e.g. Next Month"
                className="w-full pt-4 bg-transparent border-b border-[#333333]/20 pb-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-800 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold tracking-wider text-[#8E8B82] uppercase">
              MESSAGE
            </label>
            <textarea
              rows={3}
              name="note"
              placeholder="How can we help you find your dream home?"
              className="w-full pt-4 bg-transparent border-b border-[#333333]/20 pb-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-800 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-[#333333] hover:bg-black text-white font-bold tracking-widest px-8 py-4 transition-colors uppercase"
          >
            SUBMIT ENQUIRY
          </button>
        </form>
      </div>
    </div>
  );
}
