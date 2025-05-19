import React from "react";
import Link from "next/link";
import { notFoundPageText } from "@/utils/text";

const NotFound = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-y-6 dark:bg-white bg-gray-800 w-screen h-[120vh] fixed -top-20">
      <h1 className="text-9xl font-bold dark:text-gray-800 text-gray-200">404</h1>
      <h2 className="text-3xl font-semibold dark:text-gray-800 text-gray-200">{notFoundPageText.notFound}</h2>
      <Link className=" bg-gray-700 dark:bg-gray-300 dark:hover:bg-gray-200 hover:bg-gray-800 dark:text-gray-800 text-gray-200 font-semibold py-2 px-4 border border-gray-400 dark:border-gray-600 rounded shadow" href="/">
        {notFoundPageText.backHome}
      </Link>
    </div>
  );
};

export default NotFound;