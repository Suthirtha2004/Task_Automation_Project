import { NavLink } from "react-router-dom"

export const SignUp = () =>{
    return(
        <>
        <h1>Sign Up Page</h1>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-black">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-black">
    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign Up with your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form action="#"  className="space-y-6">
        <div>
        <label htmlFor="name" className="block text-sm/6 font-medium text-gray-100">Name</label>
        <div className="mt-2">
          <input id="name" type="text" name="name" required={true} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">Email address</label>
        <div className="mt-2">
          <input id="email" type="email" name="email" required={true} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" type="password" name="password" required={true} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />

        </div>
      </div>
      <div>
        <label htmlFor="slect" className="block text-sm/6 font-medium text-gray-100">Role</label>
        <div className="mt-2">
          <select className="bg-white rounded-2xl">
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
        </select>
        
        </div>
      </div>
      <button type="submit" className="w-50 rounded-m px-3 py-1.5 mt-5 rounded-4xl bg-blue-700 text-white">Sign in</button>

      
    </form>

   <NavLink to = "/teamflow/login">
    <h3 className="mt-10 text-center text-sm/6 text-gray-400">
      Already a member ? Log In/Sign in
       </h3>
       </NavLink>
      <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">Read our terms and conditions</a>
  </div>
</div>
        </>
    )
}