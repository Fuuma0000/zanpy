// import React from "react";
// import { useNavigate } from "react-router-dom";

// const LoginForm = () => {
//   const navigate = useNavigate();

//   return (
//     <div className='bg-white rounded-3xl mx-auto w-4/12 p-8 shadow-2xl'>
//       <h2 className='my-4 text-center text-test font-arial font-black text-4xl'>
//         Log in
//       </h2>

//       <form className='mx-auto max-w-sm'>
//         <div className='flex flex-col gap-4 p-4 md:p-8'>
//           <div>
//             <label
//               for='email'
//               className='mb-2 inline-block text-test font-arial font-black text-2xl tracking-widest'
//             >
//               社員ID
//             </label>
//             <input
//               name='email'
//               className='w-full rounded border bg-form px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring'
//             />
//           </div>

//           <div>
//             <label
//               for='password'
//               className='mb-2 inline-block text-test font-arial font-black text-2xl tracking-widest'
//             >
//               パスワード
//             </label>
//             <input
//               name='password'
//               type='password'
//               className='w-full rounded border bg-form px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring'
//             />
//           </div>
//           <button
//             className='block mx-auto rounded-lg w-5/12 bg-loginBotton px-4 py-3 mt-10 text-center text-lg font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-hover_color focus-visible:ring
//           '
//             onClick={() => navigate("/my-area")}
//           >
//             ログイン
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

//TODO:おもちゃ
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { TextField, Button } from "@mui/material";
// import { OutlinedInput, InputAdornment, IconButton } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const [userId, setUserId] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // ここにログイン処理を実装する
//     navigate("/my-area");
//   };

//   return (
//     <div className='bg-white rounded-3xl mx-auto w-4/12 p-8 shadow-2xl'>
//       <div className='my-4 text-center text-test font-arial font-black text-4xl'>
//         Log in
//       </div>
//       <form
//         onSubmit={handleSubmit}
//         className='w-8/12 flex items-center justify-center flex-col'
//       >
//         <TextField
//           fullWidth
//           label='社員ID'
//           variant='outlined'
//           margin='normal'
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//         />
//         <OutlinedInput
//           id='outlined-adornment-password'
//           label='Password'
//           type={showPassword ? "text" : "password"}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           // ここから下はパスワードの表示・非表示を切り替えるための設定
//           endAdornment={
//             <InputAdornment position='end'>
//               <IconButton
//                 aria-label='toggle password visibility'
//                 onClick={handleClickShowPassword}
//                 onMouseDown={handleMouseDownPassword}
//                 edge='end'
//               >
//                 {showPassword ? <VisibilityOff /> : <Visibility />}
//               </IconButton>
//             </InputAdornment>
//           }
//         />
//         <Button
//           variant='contained'
//           type='submit'
//           fullWidth
//           style={{ backgroundColor: "#A0E99E", fontWeight: 900 }}
//           className='my-4'
//         >
//           Log in
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
