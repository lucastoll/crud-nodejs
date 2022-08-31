import Head from "next/head";
import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Só piada boa</title>
        <meta
          name="description"
          content="Aplicação utilizando Banco de dados, CRUD, REST e Next.JS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Welcome />
      </main>
    </div>
  );
}
