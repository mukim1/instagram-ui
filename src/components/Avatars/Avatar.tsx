import React from "react";
import { FaFacebookF } from "react-icons/fa";

export const Avatar = () => (
  <div className="w-10 h-10 bg-gray-400 rounded-full" />
);

export const ActiveAvatar = () => (
  <div className="w-8 h-8 bg-gray-500 rounded-full relative">
    <div className="w-2 h-2 bg-cyan-400 rounded-full absolute right-0 bottom-1 ring ring-zinc-900" />
  </div>
);

export const Logo = () => (
  <div className="p-2 bg-blue-500 rounded-full text-3xl">
    <FaFacebookF />
  </div>
);
