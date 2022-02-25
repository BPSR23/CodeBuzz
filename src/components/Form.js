import React from "react";
import { useForm } from "react-hook-form";

function Form() {
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })

  return (
    <div className="min-h-screen flex flex-col justify-center bg-fixed bg-blue-50" >
      <div className="max-w-md w-full mx-auto ">
        <div className="text-center text-3xl font-semibold ">CCC</div>
        <div className="text-5xl font-bold mt-2 text-center">
          Code Collate
        </div>
      </div>
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border rounded-md border-gray-300">
        <form action="" className="space-y-6" onSubmit={onSubmit}>
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Email
            </label>
            <input
              useref={register()}
              name="email"
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              LeetCode ID
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-300 rounded"
              />
              <label htmlFor="" className="ml-2 text-sm text-gray-600">
                Remember Me
              </label>
            </div>
            <div className="font-medium text-sm text-blue-500">
              Forgot Password?
            </div>
          </div>
          <div>
            <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  
}

export default Form;
