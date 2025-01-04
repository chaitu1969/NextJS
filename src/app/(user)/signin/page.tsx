"use client";

import axios from "axios";

export default function Signin() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="border p-2">
          <input
            type="text"
            placeholder="username"
            className="m-2 rounded-md text-center text-black"
          />
          <input
            type="password"
            placeholder="password"
            className="m-2 rounded-md text-center text-black"
          />
        </div>
        <button
          onClick={() => {
            axios.post("http://localhost:3000/api/v1/signin");
          }}
          className="border rounded m-2 p-2"
        >
          Signin
        </button>
      </div>
    </>
  );
}
