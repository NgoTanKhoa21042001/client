"use client";
import React, { useState } from "react";
import Avatar from "./Avatar";
import { handleSubmit } from "@/lib/fetcher";
import { useRouter } from "next/navigation";

const Form = () => {
  const [avatarId, setAvatarId] = useState((Math.random() * 20).toFixed());
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => handleSubmit(e, router)}
      className="flex flex-col gap-5"
    >
      {/* Avatar */}
      <Avatar avatarId={avatarId} setAvatarId={setAvatarId} />
      <div className="flex flex-col xl:flex-row gap-5">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg">Whats is your name</span>
          </label>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg">Put your email.</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />
        </div>
        <button className="btn">Login</button>
      </div>
    </form>
  );
};

export default Form;