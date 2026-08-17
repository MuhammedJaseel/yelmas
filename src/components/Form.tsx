import axios from "axios";

export default function Form() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const body = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      note: e.target.note.value,
    };
    try {
      await axios.post("https://api.anolabs.site/yelmas/enquiry", body);
      alert("Successfully submitted, one of our agent will contact you soon");
    } catch (error) {
      alert("Error on submitting, try again");
    }
  };
  return (
    <div className="flex min-w-[50%] w-full justify-center items-start py-12">
      <div className="bg-[#F9F9FB] p-8 md:p-10 border border-[#EBEBF2]">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="text-xs font-bold tracking-wider text-[#8E8B82] uppercase">
              FULL NAME
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
                PHONE NUMBER
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
