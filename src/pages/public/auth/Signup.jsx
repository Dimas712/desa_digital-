import React from 'react'

const Signup = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="rounded-lg shadow-lg mt-1 sm:mx-auto sm:w-full sm:max-w-sm p-10 object-top">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-5 tracking-tight text-gray-900">
            Selamat Datang
          </h2>
          <p className="mt-10 text-center text-lg leading-4 tracking-tight text-gray-500">Silahkan mendaftar menggunakan nama, email dan password anda</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
          <div>
              <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
                Nama
              </label>
                <input
                  id='Name'
                  name='Nama'
                  type='Name'
                  placeholder='Masukkan nama lengkap'
                  autoComplete='Name'
                  required
                  className="block w-full rounded border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder='Masukkan alamat email'
                  autoComplete="email"
                  required
                  className="block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder='Masukkan password'
                  autoComplete="current-password"
                  required
                  className="block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Sudah punya akun?{' '}
            <a href="/" className="font-semibold leading-4 text-indigo-600 hover:text-indigo-500">
              Login
            </a>
          </p>
        </div>
        </div>
      </div>
  )
}

export default Signup