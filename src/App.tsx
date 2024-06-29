import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import UserInfo from "./components/UserInfo";

function App() {
  const [showUser, setShowUser] = useState(false);
  const [handle, setHandle] = useState("");
  const [data, setData] = useState(null);

  const handleSearchInput = (input: string): void => {
    setHandle(input);
    setShowUser(true);
  };

  useEffect(() => {
    if (handle) {
      async function fetchUserData() {
        const apiKey = import.meta.env.VITE_API_KEY;
        const secret = import.meta.env.VITE_SECRET_KEY;
        const methodName = "user.info";
        const rand = Math.random().toString(36).substring(2, 8);
        const time = Math.floor(Date.now() / 1000);
        const paramsString = `apiKey=${apiKey}&handles=${handle}&time=${time}`;
        const hashString = `${rand}/${methodName}?${paramsString}#${secret}`;
        const hash = await crypto.subtle.digest(
          "SHA-512",
          new TextEncoder().encode(hashString)
        );
        const hashHex = Array.from(new Uint8Array(hash))
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("");
        const apiSig = `${rand}${hashHex}`;

        const url = `https://codeforces.com/api/${methodName}?handles=${handle}&apiKey=${apiKey}&time=${time}&apiSig=${apiSig}`;

        try {
          const response = await fetch(url);
          const result = await response.json();
          if (result.status === "OK") {
            setData(result.result[0]);
          } else {
            console.error(result.comment);
            setData(null);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          setData(null);
        }
      }

      fetchUserData();
    }
  }, [showUser]);

  return (
    <div className="flex flex-col max-w-[1000px mx-auto w-full]">
      <section className="min-h-screen flex flex-col">
        <Header />
        <Hero
          handle={handle}
          setHandle={setHandle}
          handleSearchInput={handleSearchInput}
        />
        {showUser && data && (
          <UserInfo
            data={data}
            showUser={showUser}
            setShowUser={setShowUser}
            setHandle={setHandle}
            handle={handle}
          />
        )}
      </section>
    </div>
  );
}

export default App;
