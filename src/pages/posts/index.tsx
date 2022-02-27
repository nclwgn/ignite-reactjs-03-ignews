import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>12 de março de 2020</time>
            <strong>Título do post</strong>
            <p>Parágrafo de resumo do post com algumas informações importantes. Parágrafo de resumo do post com algumas informações importantes. Parágrafo de resumo do post com algumas informações importantes.</p>
          </a>
          <a href='#'>
            <time>12 de março de 2020</time>
            <strong>Título do post</strong>
            <p>Parágrafo de resumo do post com algumas informações importantes. Parágrafo de resumo do post com algumas informações importantes. Parágrafo de resumo do post com algumas informações importantes.</p>
          </a>
          <a href='#'>
            <time>12 de março de 2020</time>
            <strong>Título do post</strong>
            <p>Parágrafo de resumo do post com algumas informações importantes. Parágrafo de resumo do post com algumas informações importantes. Parágrafo de resumo do post com algumas informações importantes.</p>
          </a>
        </div>
      </main>
    </>
  );
}