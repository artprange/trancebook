import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './global.css'
import styles from './App.module.css'

//author: { avatar_url: "", name: "", role:""}
//publishedAt: Date
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ RocketSeat',
    },
    content: [
      { type: 'paragraph', content: 'Fala Galeraaa!' },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa.',
      },
      {
        type: 'paragraph',
        content:
          ' É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2023-10-12 15:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/artprange.png',
      name: 'Art',
      role: 'Front end Dev',
    },
    content: [
      { type: 'paragraph', content: 'Fala Galeraaa!' },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa.',
      },
      {
        type: 'paragraph',
        content:
          ' É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2023-10-13 15:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />{' '}
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
