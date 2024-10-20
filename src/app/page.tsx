import Image from "next/image";
import { Input } from "@/components/ui/input"
import {  Command,CommandInput} from "@/components/ui/command"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { ReloadIcon } from "@radix-ui/react-icons"
import { DashboardIcon } from "@radix-ui/react-icons"
import { GearIcon} from "@radix-ui/react-icons"
import { LayersIcon } from "@radix-ui/react-icons"
import { PersonIcon } from "@radix-ui/react-icons"
import { BackpackIcon, BellIcon,Pencil1Icon, ArchiveIcon, TrashIcon } from "@radix-ui/react-icons"

export default function Home() {
  return (
    <div>

      {/* The goal is clone UI, not functionalatiy */}
      {/* 1 - mobile responsive - text size -  conatiner witdh, height */}
      {/* 2 - write everything on 1 page first, then split into components when done*/}
      {/* 3 - use shadcn ui/ mui icon/ mantine or any ui library for icon/search bar*/}
      {/* build backend with Postgres Vercel : user input a note -> note go to Postgres table-> data from Postgres fetch, render back on user's UI */}
      
      <header className="flex flex-wrap items-center justify-center gap-2 border-2">
        <div><HamburgerMenuIcon width="24px" height="55px"/></div>
        <div><a href="https://logowik.com/google-keep-vector-logo-5971.html"><img src="https://logowik.com/content/uploads/images/google-keep3316.jpg" width="60" 
     height="80" /></a></div>
        <div><Command><CommandInput placeholder="Search"  /></Command></div>
        <div><ReloadIcon width="24px" height="55px"/></div>
        <div><DashboardIcon width="24px" height="55px"/></div>
        <div> <GearIcon width="24px" height="55px"/> </div>
        <div><LayersIcon width="24px" height="55px"/></div>
        <div><PersonIcon width="24px" height="55px"/></div>
      </header> 


      <main className = "flex">

        <div className = "w-1/4">
          <div> <BackpackIcon width="24px" height="55px" /></div>
          <div><BellIcon width="24px" height="55px" /></div>
          <div><Pencil1Icon width="24px" height="55px" /></div>
          <div><ArchiveIcon width="24px" height="55px" /></div>
          <div><TrashIcon width="24px" height="55px" /></div>
        </div>

        <div className = "w-1/2">
          <div><Input placeholder="Take a note" /></div>
          <div>NOTE</div>
        </div>

      </main>
    </div>
  );
}

/*<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>*/
