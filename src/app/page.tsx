// CSR React

// import axios from "axios";

// "use client";
// import axios from "axios";
// import { useEffect, useState } from "react";

// interface UserData {
//   name: string;
//   email: string;
// }

// export default function User() {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState<UserData>();

//   useEffect(() => {
//     axios
//       .get(
//         "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
//       )
//       .then((res) => {
//         setData(res.data);
//         setLoading(!loading);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading/.....</div>;
//   }

//   return (
//     <>
//       <div className="flex flex-col justify-center h-screen">
//         <div className="flex justify-center">
//           <div className="border p-8 rounded">
//             <div>Name: {data?.name}</div>

//             {data?.email}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import Link from "next/link";
/** SSR */

// export default async function User() {
//   // const response = await axios.get("http://localhost:3000/api/v1/user/details");

//   // await new Promise((r) => setTimeout(r, 1000));

//   // const data = response.data;

//   return (
//     <>
//       <div className="flex flex-col justify-center h-screen">
//         <div className="flex justify-center">
//           <div className="border p-8 rounded"></div>
//         </div>
//       </div>
//     </>
//   );
// }

/** Link */

export default function Home() {
  return (
    <div className=" flex-col text-lg w-screen h-screen flex items-center justify-center">
      Todo Application
      <Link href="/signup" className="text-lg border p-2 m-2 ">
        Singup in to Todo App
      </Link>
      <Link href="/signin" className="text-lg border p-2 m-2 ">
        Singin in to Todo App
      </Link>
    </div>
  );
}
