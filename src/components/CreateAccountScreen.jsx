const CreateAccountScreen = ({ onNext }) => {
  return (
    <section className="screen-panel screen-panel--create">
      <div className="mx-auto w-full max-w-92.5">
        <div className="space-y-5">
          <h2 className="max-w-[320px] text-[1.7rem] font-bold leading-[0.98] tracking-[-0.07em] text-slate-900">
            Create your PopX account
          </h2>
        </div>

        <form className="mt-7 space-y-[0.95rem]">
          <label className="input-shell block">
            <span className="text-[#6f2bff]">
              Full Name<span className="text-rose-500">*</span>
            </span>
            <input
              data-focus-primary
              autoFocus
              type="text"
              defaultValue="Marry Doe"
              className="w-full rounded-xl border-2 border-[#d4d4da] bg-transparent px-4 pb-[0.72rem] pt-6 text-[1.02rem] text-slate-900 outline-none transition-colors focus:border-[#6f2bff]"
            />
          </label>

          <label className="input-shell block">
            <span className="text-[#6f2bff]">
              Phone number<span className="text-rose-500">*</span>
            </span>
            <input
              type="tel"
              defaultValue="Marry Doe"
              className="w-full rounded-xl border-2 border-[#d4d4da] bg-transparent px-4 pb-[0.72rem] pt-6 text-[1.02rem] text-slate-900 outline-none transition-colors focus:border-[#6f2bff]"
            />
          </label>

          <label className="input-shell block">
            <span className="text-[#6f2bff]">
              Email address<span className="text-rose-500">*</span>
            </span>
            <input
              type="email"
              defaultValue="Marry Doe"
              className="w-full rounded-xl border-2 border-[#d4d4da] bg-transparent px-4 pb-[0.72rem] pt-6 text-[1.02rem] text-slate-900 outline-none transition-colors focus:border-[#6f2bff]"
            />
          </label>

          <label className="input-shell block">
            <span className="text-[#6f2bff]">
              Password <span className="text-rose-500">*</span>
            </span>
            <input
              type="password"
              defaultValue="Marry Doe"
              className="w-full rounded-xl border-2 border-[#d4d4da] bg-transparent px-4 pb-[0.72rem] pt-6 text-[1.02rem] text-slate-900 outline-none transition-colors focus:border-[#6f2bff]"
            />
          </label>

          <label className="input-shell block">
            <span className="text-[#6f2bff]">Company name</span>
            <input
              type="text"
              defaultValue="Marry Doe"
              className="w-full rounded-xl border-2 border-[#d4d4da] bg-transparent px-4 pb-[0.72rem] pt-6 text-[1.02rem] text-slate-900 outline-none transition-colors focus:border-[#6f2bff]"
            />
          </label>

          <fieldset className="pt-2">
            <legend className="mb-4 text-[1.05rem] font-medium text-slate-700">
              Are you an Agency?<span className="text-rose-500">*</span>
            </legend>

            <div className="flex items-center gap-8">
              <label className="flex items-center gap-3 text-[1.05rem] text-slate-700">
                <input
                  type="radio"
                  name="agency"
                  defaultChecked
                  className="h-6 w-6 border-[#bbbcc5] text-[#6f2bff] focus:ring-[#6f2bff]"
                />
                Yes
              </label>

              <label className="flex items-center gap-3 text-[1.05rem] text-slate-700">
                <input
                  type="radio"
                  name="agency"
                  className="h-6 w-6 border-[#bbbcc5] text-[#6f2bff] focus:ring-[#6f2bff]"
                />
                No
              </label>
            </div>
          </fieldset>

          <button
            type="button"
            onClick={onNext}
            className="mt-9 w-full rounded-xl bg-[#6f2bff] py-4 text-[1.1rem] font-bold text-white"
          >
            Create Account
          </button>
        </form>
      </div>
    </section>
  )
}

export default CreateAccountScreen