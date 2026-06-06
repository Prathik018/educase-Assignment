const WelcomeScreen = ({ onShowCreateAccount, onShowSignIn }) => {
  return (
    <section className="screen-panel screen-panel--welcome">
      <div className="mx-auto flex w-full max-w-92.5 flex-col">
        <div className="space-y-5">
          <h1 className="text-[1.95rem] font-bold  leading-[0.96] tracking-[-0.07em] text-slate-900">
            Welcome to PopX
          </h1>

          <p className="max-w-72.5 text-[1.22rem] leading-[1.55] text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <div className="mt-11 space-y-4">
          <button
            type="button"
            data-focus-primary
            autoFocus
            onClick={onShowCreateAccount}
            className="w-full rounded-xl bg-[#6f2bff] py-4 text-[1.1rem] font-bold text-white  transition-transform duration-200 active:scale-[0.99]"
          >
            Create Account
          </button>

          <button
            type="button"
            onClick={onShowSignIn}
            className="w-full rounded-xl bg-[#d7c2ff] py-4 text-[1.1rem] font-bold text-slate-900 transition-transform duration-200 active:scale-[0.99]"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </section>
  )
}

export default WelcomeScreen