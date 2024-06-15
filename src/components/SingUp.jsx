import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SingUp = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        // If the server responded with a status code outside the range [200, 299]
        throw new Error(data.message || "Something went wrong");
      }

      setLoading(false);
      navigate("/sign-in");
     
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-[80vh] w-full">
      <form onSubmit={handleSubmit}>
        <div className="border-black border-r-4 border-b-4 rounded-xl bg-yellow-200 px-10 py-10 bg-transparent">
          <div className="flex flex-col item-center">
            <label
              htmlFor="firstName"
              className="text-gray-400 text-lg font-semibold mt-2 capitalize"
            >
              First Name <span className="text-red-800">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter First Name"
              className="border w-[250px] p-2 rounded-md border-x-fuchsia-800 border-y-fuchsia-400"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col item-center">
            <label
              htmlFor="lastName"
              className="text-gray-400 text-lg font-semibold mt-2 capitalize"
            >
              last Name <span className="text-red-800">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter last Name"
              className="border w-[250px] p-2 rounded-md border-x-fuchsia-800 border-y-fuchsia-400"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col item-center">
            <label
              htmlFor="email"
              className="text-gray-400 text-lg font-semibold mt-2 capitalize"
            >
              email <span className="text-red-800">*</span>
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter email"
              className="border w-[250px] p-2 rounded-md border-x-fuchsia-800 border-y-fuchsia-400"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col item-center">
            <label
              htmlFor="password"
              className="text-gray-400 text-lg font-semibold mt-2 capitalize"
            >
              Password <span className="text-red-800">*</span>
            </label>
            <input
              type="text"
              id="password"
              placeholder="Enter password"
              className="border w-[250px] p-2 rounded-md border-x-fuchsia-800 border-y-fuchsia-400"
              onChange={handleChange}
            />
          </div>
          <button className="w-full border mt-4 h-10 bg-transparent text-gray-900 border-black text-lg  font-semibold uppercase rounded-md hover:bg-black hover:text-white hover::border-gray-800">
            {loading ? "loading" : "Sign Up"}
          </button>
          {error && <p>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default SingUp;
