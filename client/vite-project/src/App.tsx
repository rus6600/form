import { Button } from "./components/button";
import { Form } from "./components/form";
import { Input } from "./components/input";
import React, { useState } from "react";
import { cn } from "./utils/helpers";
import './App.css'

export default function App() {
  const [selectedTab, setSelectedTab] = useState("signIn");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    console.log(formData);

    try {
      const res = await fetch("http://192.168.8.7:3000/signin", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();
    } catch (e) {}
  };

  console.log(selectedTab);
  return (
    <div className="w-full grid  place-items-center h-[100vh]">
      <div className="w-full sm:w-1/2 flex flex-col">
        <h2 className="text-4xl font-bold text-center">Sign up</h2>
        <p className="pt-4 pb-8 text-center text-lg font-light">
          Log in with your information to get a personalized experience with the
          Unified Government Services Portal. You can log in to the portal using
          your ID card or phone number.
        </p>

        <div className="flex bg-gray-200 rounded-t-lg">
          <Button
            onClick={() => {
              setSelectedTab("signIn");
            }}
            type="button"
            className={cn(
              "w-full border-b  p-3 font-medium text-gray-400 cursor-pointer",
              selectedTab === "signIn" &&
                "border-b-gray-900 text-black duration-600"
            )}
          >
            Sign in
          </Button>
          <Button
            onClick={() => {
              setSelectedTab("signUp");
            }}
            type="button"
            className={cn(
              "w-full border-b  p-3 font-medium text-gray-400 cursor-pointer",
              selectedTab === "signUp" &&
                "border-b-gray-900 text-black duration-600"
            )}
          >
            Sign Up
          </Button>
        </div>

        {selectedTab === "signIn" ? (
          <Form onSubmit={handleSubmit} className="w-full place-items-center">
            <div className="flex flex-col gap-5 bg-gray-200 p-4 w-full rounded-b-lg">
              <div className="w-full flex flex-col gap-3">
                <Input
                  className="bg-white rounded-lg p-2"
                  type="email"
                  id="email"
                  labelText="Email:"
                  name="email"
                  placeholder="@email.com"
                />

                <Input
                  className="bg-white rounded-lg w-full p-2"
                  type="text"
                  id="password"
                  name="password"
                  labelText="Password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex gap-4 w-full">
                <Button
                  type="submit"
                  className="dark:md:hover:bg-gray-500 hover:text-white cursor-pointer p-4 py-2 w-full rounded-lg bg-gray-300"
                >
                  Sign in
                </Button>
                <Button
                  type="button"
                  className="dark:md:hover:bg-gray-500 hover:text-white cursor-pointer p-4 py-2 w-full rounded-lg bg-gray-300"
                >
                  Continue
                </Button>
              </div>
            </div>
          </Form>
        ) : (
          <Form onSubmit={handleSubmit} className="w-full place-items-center">
            <div className="flex flex-col gap-5 bg-gray-200 p-4 w-full rounded-b-lg">
              <div className="w-full flex flex-col gap-3">
                <Input
                  className="bg-white rounded-lg p-2"
                  type="email"
                  id="email"
                  labelText="Email:"
                  name="email"
                  placeholder="@email.com"
                />

                <Input
                  className="bg-white rounded-lg w-full p-2"
                  type="text"
                  id="name"
                  name="name"
                  labelText="Name (full)"
                  placeholder="Alish Fun"
                />
                <Input
                  className="bg-white rounded-lg w-full p-2"
                  type="text"
                  id="password"
                  name="password"
                  labelText="Password"
                  placeholder="Create Password"
                />
                <Input
                  className="bg-white rounded-lg w-full p-2"
                  type="text"
                  id="password"
                  name="password"
                  labelText="Password"
                  placeholder="Repeat your password"
                />
                
              </div>
              <div className="flex gap-4 w-full">
                <Button
                  type="submit"
                  className="dark:md:hover:bg-gray-500 hover:text-white cursor-pointer p-4 py-2 w-full rounded-lg bg-gray-300"
                >
                  Sign in
                </Button>
                <Button
                  type="button"
                  className="dark:md:hover:bg-gray-500 hover:text-white cursor-pointer p-4 py-2 w-full rounded-lg bg-gray-300"
                >
                  Continue
                </Button>
              </div>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
}
