import Head from "next/head";
import data from "@/data/data.json";
import Image from "next/image";
import { useState } from "react";

type TimeframeKey = "daily" | "weekly" | "monthly";

export default function Home() {
  const [selectedTimeframe, setSelectedTimeframe] =
    useState<TimeframeKey>("daily");

  const handleClick = (timeframe: TimeframeKey) => {
    setSelectedTimeframe(timeframe);
  };

  const timeframeStrings: Record<TimeframeKey, string> = {
    daily: "Day",
    weekly: "Week",
    monthly: "Month",
  };

  // Styles
  const buttons = `h-full w-1/3 flex items-center md:justify-start hover:text-slate-300 justify-center text-pale-blue`;
  const colors = [
    `hsl(15, 100%, 70%)`,
    `hsl(195, 74%, 62%)`,
    `hsl(348, 100%, 68%)`,
    `hsl(145, 58%, 55%)`,
    `hsl(264, 64%, 52%)`,
    `hsl(43, 84%, 65%)`,
  ];
  const icons = [
    `/icons/icon-work.svg`,
    `/icons/icon-play.svg`,
    `/icons/icon-study.svg`,
    `/icons/icon-exercise.svg`,
    `/icons/icon-social.svg`,
    `/icons/icon-self-care.svg`,
  ];

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="time-tracking-dashboard" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-very-dark-blue px-4 py-14 font-rubik">
        <div className="grid h-full w-full min-w-[350px] grid-cols-1 grid-rows-7 items-center justify-center text-white md:max-w-[950px] md:grid-cols-4 md:grid-rows-2 md:gap-6">
          {/* Header */}
          <div className="row-span-2 flex h-48 w-full flex-col overflow-hidden rounded-2xl bg-dark-blue md:h-full">
            <div className="flex h-2/3 w-full items-center justify-evenly rounded-2xl bg-blue md:flex-col md:items-start md:justify-start md:gap-6 md:px-6 md:py-8">
              <Image
                src={"/images/image-jeremy.png"}
                width={36}
                height={36}
                alt="Profile Picture"
                className="h-20 w-auto rounded-full border-2 border-slate-50"
              />
              <div className="flex flex-col gap-1">
                <p className="text-pale-blue">Report for</p>
                <div className="flex gap-2 text-2xl md:flex-col md:text-4xl md:font-extralight">
                  <p>Jeremy</p>
                  <p>Robson</p>
                </div>
              </div>
            </div>
            <div className="flex h-1/3 w-full md:flex-col md:items-start md:px-6 md:py-2">
              <button
                className={`${buttons} ${selectedTimeframe === "daily" ? "text-slate-50" : "hover:text-slate-200"}`}
                onClick={() => handleClick("daily")}
              >
                Daily
              </button>
              <button
                className={`${buttons} ${selectedTimeframe === "weekly" ? "text-slate-50" : "hover:text-slate-200"}`}
                onClick={() => handleClick("weekly")}
              >
                Weekly
              </button>
              <button
                className={`${buttons} ${selectedTimeframe === "monthly" ? "text-slate-50" : "hover:text-slate-200"}`}
                onClick={() => handleClick("monthly")}
              >
                Monthly
              </button>
            </div>
          </div>
          {/* Content */}
          {data.map((item, index) => (
            <div key={index} className="relative my-4 md:my-0">
              <div
                className="absolute inset-0 z-10 flex justify-end overflow-hidden rounded-2xl px-4 opacity-90"
                style={{ backgroundColor: colors[index % colors.length] }}
              >
                <img
                  src={icons[index % icons.length]}
                  alt="icon"
                  width={24}
                  height={24}
                  className="h-20 w-auto -translate-y-2"
                />
              </div>
              <div className="relative z-20 mt-10 flex flex-col rounded-2xl bg-dark-blue px-6 py-7 hover:bg-desaturated-blue">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl">{item.title}</h2>
                  <img
                    src={"/icons/icon-ellipsis.svg"}
                    width={24}
                    height={24}
                    alt="options"
                    className="text-pale-blue hover:text-slate-200"
                  />
                </div>
                <div className="flex items-center justify-between md:flex-col md:items-start md:gap-2">
                  <h1 className="text-5xl font-extralight">
                    {item.timeframes[selectedTimeframe].current}hrs
                  </h1>
                  <p className="text-sm text-pale-blue">
                    Last {timeframeStrings[selectedTimeframe]} -{" "}
                    {item.timeframes[selectedTimeframe].previous}hrs
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
