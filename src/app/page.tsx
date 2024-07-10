'use client'

import Navbar from "@/components/Navbar";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar"
import HorizontalTrack from "@/components/HorizontalTrack";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Navbar></Navbar>
      <div className="h-full w-full grid grid-cols-5">

        <LeftSidebar></LeftSidebar>

        <div className="col-span-3 flex flex-col items-center">
          <HorizontalTrack></HorizontalTrack>
          <HorizontalTrack></HorizontalTrack>
          <HorizontalTrack></HorizontalTrack>
          <HorizontalTrack></HorizontalTrack>
          <HorizontalTrack></HorizontalTrack>
        </div>

        <RightSidebar></RightSidebar>

      </div>
    </main>
  );
}
