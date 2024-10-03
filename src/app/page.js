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
          every Thursday for weekly/monthly co-working (and demos) in Singapore.
          The group is part of the{" "}
          <a
            className="underline italic text-blue-400 inline-block mr-2"
            href="https://hacka.network"
          >
            Hacka network
          </a>
          with a growing community worldwide.
        </p>
        <p className="my-3">
          If you code your own projects come and join us every Thursday from
          10am to co-work in the CBD area, or join our monthly meetups.
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
        <p className="mt-6">
          Monthly meetup details on
          <a
            className="inline-block mx-2 underline italic text-lg font-semibold text-red-500"
            href="https://t.me/+ZfiSB4qrsFthMzc1"
          >
            Luma
          </a>
        </p>
        <p className="mt-3 mb-6">
          {`Weekly meetup at`}
          <a
            className="inline-block mx-2 underline italic text-lg font-semibold text-red-500"
            href="https://g.co/kgs/W4Sood3"
          >
            {`Monk's Brew Club`}.
          </a>
          You will be invited to the Telegram group upon showing up.
        </p>
      </section>
      <section className="overflow-hidden text-gray-700">
        <h3 className="text-xl font-semibold mb-1 text-white text-center">
          Meetups so far
        </h3>
        <div className="container px-5 mx-auto lg:pt-12 lg:px-24">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-full md:w-1/2">
              <div className="w-full sm:w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_1.webp"
                />
              </div>
              <div className="w-full sm:w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_2.webp"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_3.webp"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-full md:w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_4.webp"
                />
              </div>
              <div className="w-full sm:w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_5.webp"
                />
              </div>
              <div className="w-full sm:w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_6.webp"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-full">
              <div className="w-full sm:w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_7.webp"
                />
              </div>
              <div className="w-full sm:w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_8.webp"
                />
              </div>
              <div className="w-full sm:w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_9.webp"
                />
              </div>{" "}
              <div className="w-full sm:w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_11.webp"
                />
              </div>
              <div className="w-full sm:w-2/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_10.webp"
                />
              </div>
              <div className="w-full sm:w-2/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_12.webp"
                />
              </div>
              <div className="w-full sm:w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_13.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
