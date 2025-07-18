
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50">
      <Head>
        <title>Hi-Way Cafe</title>
      </Head>
      <h1 className="text-4xl font-bold text-brown-700 mb-4">Welcome to Hi-Way Cafe!</h1>
      <p className="text-xl">Enjoy our coffee, slurpee, and delicious food.</p>
    </div>
  );
}
