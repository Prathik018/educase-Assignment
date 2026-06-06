const SignInScreen = ({ onNext }) => {
  return (
    <section className="screen-panel screen-panel--signin">
      <div className="mx-auto w-full max-w-92.5">
        <div className="space-y-5">
          <h2 className="max-w-[320px] text-[1.8rem] font-bold leading-[0.98] tracking-[-0.07em] text-slate-900">
            Signin to your PopX account
          </h2>

          <p className="max-w-77.5 text-[1.22rem] leading-[1.55] text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <form className="mt-8 space-y-5">
          <label className="input-shell block">
            <span className="text-[#6f2bff]">Email Address</span>
            <input
              data-focus-primary
              autoFocus
              type="email"
              placeholder="Enter email address"
              className="w-full rounded-xl border-2 border-[#cfcfd6] bg-transparent px-4 pb-[0.9rem] pt-6 text-[1.05rem] text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#6f2bff]"
            />
          </label>

          <label className="input-shell block">
            <span className="text-[#6f2bff]">Password</span>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full rounded-xl border-2 border-[#cfcfd6] bg-transparent px-4 pb-[0.9rem] pt-6 text-[1.05rem] text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#6f2bff]"
            />
          </label>

          <button
            type="button"
            onClick={onNext}
            className="mt-2 w-full rounded-xl bg-[#c9c9cf] py-3 text-[1.1rem] font-bold text-white"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  )
}

export default SignInScreen