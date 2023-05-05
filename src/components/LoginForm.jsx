import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-white rounded-3xl mx-auto w-4/12 p-8 shadow-2xl'>
      <h2 className='my-4 text-center text-test font-arial font-black text-4xl'>
        Log in
      </h2>

      <form className='mx-auto max-w-sm'>
        <div className='flex flex-col gap-4 p-4 md:p-8'>
          <div>
            <label
              for='email'
              className='mb-2 inline-block text-test font-arial font-black text-2xl tracking-widest'
            >
              社員ID
            </label>
            <input
              name='email'
              className='w-full rounded border bg-form px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring'
            />
          </div>

          <div>
            <label
              for='password'
              className='mb-2 inline-block text-test font-arial font-black text-2xl tracking-widest'
            >
              パスワード
            </label>
            <input
              name='password'
              className='w-full rounded border bg-form px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring'
            />
          </div>
          <button
            className='block mx-auto rounded-lg w-5/12 bg-loginBotton px-4 py-3 mt-10 text-center text-lg font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-hover_color focus-visible:ring
          '
            onClick={() => navigate("/担当エリア")}
          >
            ログイン
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
