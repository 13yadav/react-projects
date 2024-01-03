import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [specialCharsAllowed, setSpecialCharsAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copyBtnText, setCopyBtnText] = useState("Copy");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    const lowercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const uppercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()-_+=";

    let validChars = lowercaseChars + uppercaseChars;

    if (numbersAllowed) validChars += numberChars;
    if (specialCharsAllowed) validChars += specialChars;

    let pass = "";

    for (let i = 0; i < length; i++) {
      const randomChar = Math.floor(Math.random() * validChars.length);
      pass += validChars.charAt(randomChar);
    }

    setPassword(pass);
  }, [length, numbersAllowed, specialCharsAllowed, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword, length, numbersAllowed, specialCharsAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select()
    setCopyBtnText("Copied!");
    setTimeout(() => {
      setCopyBtnText("Copy");
    }, 2000);
  }, [password]);

  return (
    <div className="w-screen h-screen">
      <div className="h-full flex flex-wrap justify-center items-center">
        <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="space-y-6">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Password Generator
            </h5>
            <div className="relative">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                value={password}
                readOnly
                ref={passwordRef}
              />
              <button
                className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={copyPasswordToClipboard}
              >
                {copyBtnText}
              </button>
            </div>
            <div className="flex justify-evenly items-center gap-3">
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  name="length"
                  value={length}
                  min={6}
                  max={24}
                  className="cursor-pointer"
                  onChange={(e) => setLength(e.target.value)}
                />
                <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                  Length: {length}
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  id="numbersAllowed"
                  type="checkbox"
                  name="length"
                  value={numbersAllowed}
                  onChange={() => setNumbersAllowed((prev) => !prev)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="numbersAllowed"
                  className="block font-medium text-gray-900 dark:text-white cursor-pointer"
                >
                  Numbers
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  id="charsAllowed"
                  type="checkbox"
                  name="length"
                  value={specialCharsAllowed}
                  onChange={() => setSpecialCharsAllowed((prev) => !prev)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="charsAllowed"
                  className="block font-medium text-gray-900 dark:text-white cursor-pointer"
                >
                  Special Chars
                </label>
              </div>
            </div>
            <button
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={generatePassword}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
