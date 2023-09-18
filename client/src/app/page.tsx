"use client";
import { useState } from "react";
import { icon } from "@/assets/images";
import Button from "@/common/Button";
import TopNavigation from "@/common/navs/top/TopNavigation";
import Footer from "@/components/Footer";
import { orbitron, poppins } from "@/fonts/fonts";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/Faq";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nft Factory</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`overflow-hidden ${poppins.className}`}>
        <TopNavigation />
        <div className="max-w-screen-xl mx-auto px-4">
          <section className="flex justify-between items-center mt-10">
            <div className="w-2/5   ml-20">
              <h1 className={`${orbitron.className} text-primary text-4xl`}>
                Create and manage your own NFTs, collaborate with consumers.
              </h1>
              <p className="mb-10 mt-2 text-white">
                Easily create and manage your NFTs in one place, Unlock rewards,
                perks and experiences through digital collections, & Engage
                directly with consumers. let your NFTs forge connections beyond
                transactions.
              </p>
              <div className="flex gap-8">
                <Button
                  as="link"
                  href="/register"
                  className={`${orbitron.className} text-xl px-8 py-2 bg-gradient-linear`}
                >
                  Get Started
                </Button>
                <Image src="/images/wallet.svg" alt="" height={50} width={50} />
              </div>
            </div>
            <div className="hidden sm:block">
              <Image src="/images/Group.svg" alt="" height={500} width={500} />
            </div>
          </section>

          <div className="mx-20 mt-14 mb-28 relative">
            <FAQ />
          </div>
        </div>

        <Footer />
        <div className="absolute bottom-0 right-0 bg-gradient-to-br from-transparent via-transparent to-primary opacity-10 w-[30%] h-[500px]    "></div>
      </main>
    </>
  );
}
