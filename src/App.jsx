import React from "react";

const App = () => {
  const envVariable = import.meta.env.VITE_APPWRITE_URL;
  return (
    <>
      <div className="text-center text-4xl bg-gray-500 text-green-500 font-black py-4 ">
        KG BLOGS - APPWRITE
      </div>
      <div className="text-center text-3xl text-blue-600 font-bold">
        env: {envVariable}
      </div>
    </>
  );
};

export default App;
