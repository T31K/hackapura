"use client";
import Image from "next/image";

import { useState } from "react";
import { Drawer } from "vaul";

function MeetupDetails() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Drawer.Root open={isOpen} onClose={() => setIsOpen(false)}>
      <Drawer.Trigger
        onClick={() => setIsOpen(!isOpen)}
        className="ml-2 text-red-500 italic underline"
      >
        here
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
          <div className="p-4 bg-stone-800 rounded-t-[10px] flex-1">
            <div
              aria-hidden
              className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-4"
            />
            <div className="w-full mx-auto">
              <Drawer.Title className="!font-bold tracking-tight text-2xl text-white text-center mb-4">
                Meetup Details
              </Drawer.Title>
              <div className="overflow-y-scroll h-[80vh]">
                <div className="max-w-2xl mx-auto">
                  <div className="flex justify-center flex-col items-center">
                    <p className="text-gray-100 underline text-lg italic">
                      {`Location:`}
                    </p>
                    <p className="text-stone-300 text-md">{`Monk's Brew Clubs`}</p>
                    <p className="text-stone-300 text-md mb-3">
                      {`57 East Coast Rd, Singapore 428773`}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <Image
                      src="/location/monk_1.webp"
                      alt="monk_1"
                      width={400}
                      height={0}
                      className="rounded-lg mx-auto"
                    />
                    <Image
                      src="/location/monk_2.webp"
                      alt="monk_1"
                      width={400}
                      className="rounded-lg mx-auto"
                      height={0}
                    />
                  </div>
                  <div className="flex justify-center flex-col items-center mt-12 mb-24">
                    <p className="text-gray-100 underline text-lg italic">
                      {`How to get there:`}
                    </p>{" "}
                    <p className="text-stone-300 text-md">
                      {`MRT: Marine Parade`}
                      <span className="inline-block ml-1 px-4 py-.5 bg-yellow-950 text-white rounded-full !font-sans font-bold">
                        TE26
                      </span>
                    </p>
                    <p className="text-stone-300 text-md mt-1">
                      {`Bus: Opp Roxy Square`}
                      <span className="inline-block ml-1 px-4 py-.5 bg-teal-950 text-white rounded-full !font-sans font-bold">
                        92111
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-center flex-col items-center mt-6">
                    <p className="text-gray-100 underline text-lg italic mb-3">
                      How to get access:
                    </p>{" "}
                    <p className="text-stone-300 text-md max-w-md text-center mb-2">
                      {`
                      Show your Telegram app with the Hackapura group joined &
                      you'll be given a 10% discount for the day pass (free
                      coffee included)`}
                    </p>
                    <Image
                      src="/location/counter.jpg"
                      alt="counter"
                      width={450}
                      height={0}
                      className="rounded-lg mx-auto mb-4"
                    />
                    <p className="text-stone-300 text-md max-w-md text-center mb-2">
                      Take the stairs up to level 2
                    </p>
                    <Image
                      src="/location/stairs.jpg"
                      alt="stairs"
                      width={300}
                      height={0}
                      className="rounded-lg mx-auto mb-4"
                    />
                    <p className="text-stone-300 text-md max-w-md text-center mb-2">
                      Make some MRR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default MeetupDetails;
