import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';

const name = 'Naoki Kuhara';
export const siteTitle = 'Next.js Sample Website';

type Props = {
  children: React.ReactNode;
  home: boolean;
};

export default function Layout({ children, home }: Props) {
  const router = useRouter();

  const routerFirstPost = () => {
    router.push({
      pathname: '/',
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src='/images/atoa.jpg'
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=''
            />
            <h1
              className={utilStyles.heading2Xl}
              onClick={() => routerFirstPost()}
            >
              {name}
            </h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <Image
                priority
                src='/images/atoa.jpg'
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=''
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/' className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>← Use link : Back to home</Link>
          <div>
            <a className={styles.cursor} onClick={() => router.back()}>
              ← Use useRouter : Back to home
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
