import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TopBar from '../public/components/TopBar.tsx'
import nftImage from '../public/SaveTheWorld.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Save the world.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/earthicon.png" />
      </Head>

      <TopBar />

      <div className = {styles.backgroundImage}>
        <div className = {styles.foreground} >
          <div className = {styles.saveContainer}>
            <div className = {styles.saveTextContainer} >
              <h1 className = {styles.saveText}> 
                Save The
              </h1>
            </div>
            <div className = {styles.saveWorldContainer} >
              <div className={styles.worldContainer}>
                <video className = {styles.textVideo} autoPlay muted loop >
                  <source src="Globe1080.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className={styles.nftContainer}>
            <div className={styles.nftBackground}>
              <img className={styles.nft} src="SaveTheWorld.png" />
            </div>
          </div>
        </div>
      </div>
      <div className = {styles.backgroundUnder} >
        <div className = {styles.underTransition}>
        </div>
        <div className = {styles.underTitle} >
          <h1>Our planet is struggling. Let&apos;s help it.</h1>
        </div>
        <div className = {styles.backgroundUnderContainer}>
          <div className = {styles.underLeft} >

          </div>
          <div className = {styles.underRight} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3617.47 693.466">
        <clipPath id="world" transform="scale(0.15 0.15)">
          <path id="World." className="cls-1" d="M501.586,1293.35H619.422L680.948,768.3q24.5-4.167,37.54-18.77t13.035-34.934q0-23.976-16.424-38.584-16.424-14.59-55.008-14.6l-141.821-.521q-38.59,0-55.007,14.86t-16.425,38.844q0,23.989,16.425,38.845T518.27,768.3h55.79L538.605,1067.06,455.181,818.35H344.122l-83.945,248.71L224.722,768.3h55.79q38.579,0,55.007-14.859t16.424-38.845q0-23.976-16.424-38.584-16.423-14.59-55.007-14.6l-142.343-.521q-38.592,0-55.008,15.12T66.737,716.155q0,21.386,12.514,35.2T116.27,768.3l63.611,525.055H299.8L398.87,989.891ZM1282.64,939.576q-34.41-61.262-101.93-97.5t-140.52-36.238q-72.474,0-138.951,35.456T799.306,938.533q-35.465,61.787-35.456,125.917,0,63.09,34.934,120.97t101.673,91.5q66.736,33.63,139.733,33.63,73.515,0,141.04-34.15t101.68-91.77q34.14-57.6,34.15-119.14Q1317.06,1000.855,1282.64,939.576ZM1161.16,1160.13q-49.02,43.545-120.97,43.54-71.436,0-120.441-43.54t-49.012-93.59q0-61.005,48.491-107.412t120.962-46.4q82.38,0,132.96,58.4,37.02,43.285,37.02,94.9Q1210.17,1116.6,1161.16,1160.13Zm351.42-340.216q-38.6,0-55.01,14.86T1441.15,873.1q0,23.988,16.42,38.844t55.01,14.86h38.59V1186.46h-63.62q-38.58,0-55,14.86t-16.43,38.32q0,23.985,16.43,38.85t55,14.86H1810.3q38.58,0,55.01-14.86t16.42-38.33q0-23.97-16.42-38.84t-55.01-14.86H1658.05V1025.35q66.735-56.317,111.32-84.471t67-28.155q17.2,0,39.11,19.813t41.71,19.813a52.211,52.211,0,0,0,38.32-15.9q15.9-15.9,15.91-38.844,0-27.1-33.37-53.183-49.02-38.58-101.16-38.584-33.9,0-72.73,16.164-38.85,16.167-106.11,64.654v-66.74H1512.58Zm668.96-202.825q-38.6,0-55.01,14.86t-16.42,38.323q0,23.988,16.68,38.844t54.75,14.86h86.03V1186.46H2139.31q-38.595,0-55.01,14.86t-16.43,38.32q0,23.985,16.43,38.85t55.01,14.86h363.41q38.58,0,55.01-14.86t16.42-38.33q0-23.97-16.42-38.84t-55.01-14.86H2374.46V617.089H2181.54Zm900.46,0q-38.6,0-55.01,14.86t-16.42,38.844q0,23.465,16.42,38.323t55.01,14.86h18.25V856.934q-39.105-25.54-79.25-38.323a268.61,268.61,0,0,0-81.86-12.775q-111.06,0-188.23,76.646t-77.17,185.1q0,103.755,73.52,173.37,73.515,69.6,193.96,69.6a310.749,310.749,0,0,0,82.64-10.95,316.486,316.486,0,0,0,76.39-32.32v26.07h125.13q38.58,0,55.01-14.86t16.43-38.33q0-23.97-16.69-38.84t-54.75-14.86h-18.24V617.089H3082Zm-23.99,548.771q-42.225,37.815-117.83,37.81-76.14,0-117.84-37.81-41.715-37.785-41.71-96.72,0-64.635,46.4-110.533,46.41-45.876,113.15-45.883,67.26,0,113.66,45.883t46.41,112.1Q3100.25,1128.07,3058.01,1165.86Zm604.83,23.21q-21.39-20.34-58.92-20.34-37.545,0-58.92,20.34t-21.37,50.57q0,30.255,21.37,50.58t58.92,20.33q37.545,0,58.92-20.33t21.38-50.58Q3684.22,1209.415,3662.84,1189.07Z" transform="translate(-66.75 -617.094)"/>
        </clipPath>
      </svg>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
