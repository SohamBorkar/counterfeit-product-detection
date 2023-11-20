'use client'
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [companyName, setCompanyName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  const [contactInformation, setContactInformation] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

async function handleRegister() {
  // Validation checks
  if (
    !companyName ||
    !registrationNumber ||
    !officeAddress ||
    !contactInformation ||
    !email ||
    !username ||
    !password
  ) {
    alert('Please fill in all fields');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  if (password.length < 8) {
    alert('Password should be at least 8 characters long');
    return;
  }

  if (isNaN(registrationNumber)) {
    alert('Registration number must be a number');
    return;
  }

  const postData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      registration_number: registrationNumber,
      company_name: companyName,
      office_address: officeAddress,
      contact_information: contactInformation,
      email: email,
      username: username,
      password: password,
    }),
  };

  const response = await fetch("/api/register/manufacturer", postData);
  const data = await response.json();

  // Clear the form
  setCompanyName("");
  setRegistrationNumber("");
  setOfficeAddress("");
  setContactInformation("");
  setEmail("");
  setUsername("");
  setPassword("");

  alert(data.message);
}

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 py-8">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Register as Manufacturer
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" id ="register-form">
                {/* Company Information */}
                <div>
                  <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Company Name"
                    required=""
                  />
                </div>
                <div>
                  <label htmlFor="registrationNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Registration Number
                  </label>
                  <input
                    type="text"
                    name="registrationNumber"
                    id="registrationNumber"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Registration Number"
                    required=""
                  />
                </div>
                <div>
                  <label htmlFor="officeAddress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Office Address
                  </label>
                  <textarea
                    name="officeAddress"
                    id="officeAddress"
                    value={officeAddress}
                    onChange={(e) => setOfficeAddress(e.target.value)}
                    rows="3"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Office Address"
                    required=""
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="contactInformation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Contact Information
                  </label>
                  <input
                    type="text"
                    name="contactInformation"
                    id="contactInformation"
                    value={contactInformation}
                    onChange={(e) => setContactInformation(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="+91"
                    required=""
                  />
                </div>
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Email"
                    required=""
                  />
                </div>

                {/* Username and Password */}
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Username"
                    required=""
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  type="button"
                  onClick={handleRegister}
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Register
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <Link href="/" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign in</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
