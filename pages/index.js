import Head from "next/head"
import Image from "next/image"
import luxury from "../public/icon-luxury.svg"
import sedans from "../public/icon-sedans.svg"
import suvs from "../public/icon-suvs.svg"

export default function Home() {
  return (
    <div className="flex content-center h-screen bg-veryLightGray text-veryLightGray">
      <Head>
        <title>3-column preview card component</title>
        <meta
          name="description"
          content="This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects."
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className="flex content-center justify-center w-screen rounded-l-lg">
        <div className="flex flex-wrap items-center justify-center m-5 ">
          <div className="px-20 py-16 w-96 bg-brightOrange">
            <Image src={sedans} alt="" />
            <h2 className="mt-5 text-3xl font-bigShoulders">SEDANS</h2>
            <p className="mt-5 mb-32 text-base font-lexendDeca text-transparentWhite">
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>
            <a
              href="#"
              className="px-10 py-2 text-center border-2 border-solid rounded-full border-transparentWhite bg-veryLightGray text-brightOrange hover:bg-transparent hover:text-transparentWhite"
            >
              Learn More
            </a>
          </div>
          <div className="px-20 py-16 w-96 bg-darkCyan">
            <Image src={suvs} alt="" />
            <h2 className="mt-5 text-3xl font-bigShoulders">SUVS</h2>
            <p className="mt-5 mb-32 text-base font-lexendDeca text-transparentWhite">
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </p>
            <a
              href="#"
              className="px-10 py-2 text-center border-2 border-solid rounded-full bg-veryLightGray text-darkCyan hover:text-transparentWhite hover:bg-transparent"
            >
              Learn More
            </a>
          </div>
          <div className="px-20 py-16 w-96 bg-veryDarkCyan">
            <Image src={luxury} alt="" />
            <h2 className="mt-5 text-3xl font-bigShoulders">LUXURY</h2>
            <p className="mt-5 mb-32 text-base font-lexendDeca text-transparentWhite">
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </p>
            <a
              href="#"
              className="px-10 py-2 text-center border-2 border-solid rounded-full bg-veryLightGray text-veryDarkCyan hover:text-transparentWhite hover:bg-transparent"
            >
              Learn More
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
