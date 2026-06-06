const accountImage =
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80'

const AccountSettingsScreen = ({ onBack }) => {
  return (
    <section className="screen-panel screen-panel--account" data-focus-primary tabIndex={1}>
      <div className="screen-content screen-content--account flex flex-col overflow-hidden bg-[#F6F7FB]">
        <div className="border-b border-[#ececef] bg-[#ffffff] px-5 py-[0.95rem]">
          <h2 className="text-[1.35rem] font-medium text-[#3f4044]">
            Account Settings
          </h2>
        </div>

        <div className="px-5 py-5">
          <div className="flex items-start gap-4">
            <div className="relative h-[4.9rem] w-[4.9rem] shrink-0">
              <img
                src={accountImage}
                alt="Marry Doe"
                className="h-full w-full rounded-full object-cover"
              />

              <span className="absolute bottom-0 right-0 grid h-7 w-7 place-items-center rounded-full bg-[#6f2bff] text-white shadow-lg">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M4 7a2 2 0 0 1 2-2h2.17a2 2 0 0 0 1.42-.59l.82-.82A2 2 0 0 1 12.83 3h1.34a2 2 0 0 1 1.41.59l.82.82A2 2 0 0 0 18.62 5H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Zm8 9.5A4.5 4.5 0 1 0 12 7a4.5 4.5 0 0 0 0 9.5Zm0-2A2.5 2.5 0 1 1 12 9a2.5 2.5 0 0 1 0 5.5Z" />
                </svg>
              </span>
            </div>

            <div className="pt-1">
              <h3 className="text-[1.08rem] font-bold text-[#2f3136]">
                Marry Doe
              </h3>
              <p className="mt-1 text-[0.98rem] font-medium text-[#67686f]">
                Marry@Gmail.Com
              </p>
            </div>
          </div>

          <p className="mt-5 text-[1rem] leading-[1.55] text-[#4f5156]">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>


        </div>
                <div className="border-t border-dashed border-[#bbbbbf]" />

      </div>

      <div className="w-full px-0">
        <div className="border-t border-dashed border-[#bbbbbf]" />
      </div>
    </section>
  )
}

export default AccountSettingsScreen