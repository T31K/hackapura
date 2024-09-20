import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center gap-y-6 py-24 px-16 bg-black text-white relative">
      <a href="https://github.com/T31K/hackapura" target="_blank">
        <Image
          src="/github.svg"
          width={40}
          height={40}
          alt="github_logo"
          className="absolute top-6 right-6"
        />
      </a>
      <header>
        <div className="text-2xl mb-4 text-center">🙏🇸🇬🤓🤓🇸🇬🙏</div>
        <h1 className="text-4xl text-center text-red-600 font-pressStart my-4">
          HACKAPURA
        </h1>
        <div className="text-2xl mb-4 text-center">🙏🇸🇬🤓🤓🇸🇬🙏</div>
        <div className="text-center mb-8">
          <p>EST. 2024</p>
          <p>Singapore, Singapore</p>
        </div>
      </header>
      <section className="max-w-3xl mb-8 pt-8">
        <p>
          A community-run group of indie makers / coders / designers / hardware
          hackers who build their own independent apps/startups, meeting up
          every Thursday for weekly co-working (and demos) in Singapore. The
          group is part of the{" "}
          <a
            className="underline italic text-blue-400"
            href="https://hacka.network"
          >
            Hacka
          </a>{" "}
          network with a growing community worldwide.
        </p>
        <p className="my-3">
          If you code your own projects come and join us every Thursday from
          10am to co-work in the CBD area.
        </p>
        <p className="mb-4 text-lg font-semibold">The timings are:</p>
        <ul className="list-none list-inside">
          <li>
            10:30am – Intros{" "}
            <span className="text-gray-400">
              {`(self intro + what you're working on)`}
            </span>
          </li>
          <li>
            1:30pm – Order lunch and eat together{" "}
            <span className="text-gray-400">(optional)</span>
          </li>
          <li>
            4:30pm – Demos{" "}
            <span className="text-gray-400">
              (share what you made today, or just watch)
            </span>
          </li>
          <li>5:30pm – Drinks somewhere nearby 🍻🍷</li>
        </ul>
        <a
          className="my-6 block text-lg font-semibold text-red-500"
          href="https://t.me/+ZfiSB4qrsFthMzc1"
        >
          Join telegram group
        </a>
      </section>
    </main>
  );
}
