"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="container flex flex-col fixed left-1/2 -translate-x-1/2 top-1 rounded-b-3xl gap-3 z-50 backdrop-blur-lg py-5">
      <div className="flex flex-row items-center justify-between">
        <div className="inline-flex items-center font-geist-mono gap-5">
          <Link
            href="/"
            className="flex flex-row items-center gap-2 hover:bg-secondary px-2 py-1 rounded-xl cursor-pointer duration-150"
          >
            <img src="/schedify.png" alt="Schedify" height={24} width={24} />
            <h1 className="font-bold text-lg">Schedify</h1>
          </Link>

          <Link
            href="/pricing"
            className="flex flex-row items-center gap-2 font-geist-sans hover:bg-secondary px-2 py-1 rounded-xl cursor-pointer duration-150"
          >
            <h1 className="text-sm">Pricing</h1>
          </Link>

          <Link
            href="https://docs.schedify.dev/docs/introduction"
            passHref
            target="_blank"
            className="flex flex-row items-center gap-2 font-geist-sans hover:bg-secondary px-2 py-1 rounded-xl cursor-pointer duration-150"
          >
            <h1 className="text-sm">Docs</h1>
          </Link>
        </div>

        <div className="inline-flex items-center gap-5">
          <ClerkLoading>
            <Skeleton className="min-h-[28px] min-w-[28px] rounded-full" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignInButton mode="modal">
                <Button className="rounded-full font-semibold">
                  Join Now!
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton userProfileMode="modal" />
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
};
