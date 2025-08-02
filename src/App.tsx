import { useState } from "react";

interface IFaq {
  id: number;
  question: string;
  answer: string;
}

const ACCORDIAN_DATA: IFaq[] = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components.",
  },
  {
    id: 2,
    question: "What is a component in React?",
    answer:
      "A component is an independent, reusable piece of UI in a React application. Components can be functional or class-based.",
  },
  {
    id: 3,
    question: "What is the Virtual DOM?",
    answer:
      "The Virtual DOM is a lightweight copy of the real DOM. React uses it to efficiently update and render UI changes by comparing differences and applying minimal DOM operations.",
  },
  {
    id: 4,
    question: "What is useState in React?",
    answer:
      "useState is a React Hook that lets you add state to functional components. It returns the current state and a function to update it.",
  },
];

function App() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto px-4">
      <h1 className="text-2xl font-semibold">Sweet Accordian</h1>

      <ul className="flex flex-col w-full border border-black">
        {ACCORDIAN_DATA?.map((item, index) => {
          return (
            // MOUNT UNMOUNT HIDDEN CONTENT BELOW ( SHOW CONTENT ON ACTIVE INDEX CONDITIONALLY BASIS WITH PLUS TO MINUS ARROW ) -------->
            // <li
            //   key={item?.id}
            //   className="flex flex-col border border-black"
            // >
            //   <div className="flex justify-between items-start gap-2 p-3">
            //     <span>{item?.question}</span>
            //     <button
            //       onClick={() => handleToggle(index)}
            //       className={`text-2xl`}
            //     >
            //       {activeIndex === index ? "-" : "+"}
            //     </button>
            //   </div>
            //   {activeIndex === index && (
            //     <p className={"text-gray-400 px-3 pb-3"}>{item?.answer}</p>
            //   )}
            // </li>

            // SHOW HIDDEN CONTENT WITH SMOOTH TRANSITION WITH THE HELP OF HEIGHT AND OPACITY BELOW -------->
            <li
              key={item?.id}
              className={`flex flex-col p-3 ${
                index !== 0 && " border-t border-black"
              }`}
            >
              <div className="flex justify-between items-start gap-2">
                <span>{item?.question}</span>
                <button
                  onClick={() => handleToggle(index)}
                  className={`${
                    activeIndex === index && " rotate-45"
                  } text-2xl transition-transform duration-300 ease-in-out`}
                >
                  +
                </button>
              </div>

              <p
                className={`overflow-hidden text-gray-400  transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {item?.answer}
              </p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default App;
