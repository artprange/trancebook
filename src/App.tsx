import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.css";

//author: { avatar_url: "", name: "", role:""}
//publishedAt: Date
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2014/06/13223100/e67ffec6-21cc-11ee-954e-0ecc81f4ee58-972x597.jpeg",
      name: "Astrix",
      role: "Fullon DJ",
    },
    content: [
      { type: "paragraph", content: "Fala Galeraaa!" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um set!",
      },
      {
        type: "paragraph",
        content:
          " Tentei reviver as minhas origens! Dê o play e sinta a energia emanar! ",
      },
      {
        type: "link",
        content: "https://www.youtube.com/watch?v=lIuEuJvKos4",
      },
    ],
    publishedAt: new Date("2023-10-12 15:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://i.scdn.co/image/ab6761610000e5eb8f35c6b2a9280144fcd28a7f",
      name: "Neelix",
      role: "Prog Fullon DJ",
    },
    content: [
      { type: "paragraph", content: "Como vocês estão crianças? " },
      {
        type: "paragraph",
        content:
          "Vídeo fresquinho no canal! Saiu o Editado do UNIVERSO PARALELO",
      },
      {
        type: "paragraph",
        content:
          " Eu amei tocar esse ano e mal posso esperar pelo ano que vem!",
      },
      {
        type: "link",
        content: "https://www.youtube.com/watch?v=fONegAhyBRU",
      },
    ],
    publishedAt: new Date("2023-10-13 15:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />{" "}
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
