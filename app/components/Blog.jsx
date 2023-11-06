"use client";

import { Fragment, useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BoltIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Blog(props) {
  const [isOpen, setIsOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [sumData, setSumData] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = "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";
  const apiUrl = "https://api.openai.com/v1/chat/completions";

  const queryChatGPT = async (query) => {
    setLoading(true);
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Summarize this blog ${query}`,
          },
        ],
        max_tokens: 2000,
        top_p: 1,
        temperature: 0.5,
        frequency_penalty: 0,
        presence_penalty: 0,
      }),
    });

    const data = await response.json();
    setSumData(data.choices[0].message.content);
    setLoading(false);
  };

  return (
    <>
      <main className="py-8">
        <div className="grid lg:flex items-center justify-between mb-4">
          <h1 className="font-semibold tracking-tight text-2xl text-slate-700">
            {props.title}
          </h1>
          <button
            onClick={() => {
              setIsOpen(true);
              queryChatGPT(props.desc);
            }}
            className="hover:ring-1 ring-fuchsia-500 transition duration-300 ease-in-out w-10 h-10 bg-purple-100 flex items-center justify-center rounded-full lg:my-0 my-4"
          >
            <BoltIcon className="w-7 h-7 stroke-0 fill-fuchsia-500" />
          </button>
        </div>
        <p className="text-slate-600 text-justify">{props.desc}</p>
      </main>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          initialFocus={cancelButtonRef}
          onClose={setIsOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-2xl text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">
                  <div className="p-10 lg:px-14 w-full bg-[#f8f8f8]">
                    <div className="flex items-center justify-between mb-4">
                      <h1 className="text-2xl lg:text-center text-slate-700 font-semibold tracking-tight">
                        {props.title}
                      </h1>
                      <div>
                        <button
                          onClick={() => setIsOpen(false)}
                          className="hover:ring-1 ring-fuchsia-500 transition duration-300 ease-in-out w-8 h-8 flex items-center justify-center rounded-full lg:my-0"
                        >
                          <XMarkIcon className="w-6 h-6 stroke-gray-700" />
                        </button>
                      </div>
                    </div>
                    {loading ? (
                      <p className="text-gray-700 text-center p-20">
                        Loading...
                      </p>
                    ) : (
                      <p className="text-gray-700 text-justify">{sumData}</p>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
