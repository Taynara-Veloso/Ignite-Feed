import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            className={styles.avatar} 
            src="https://camo.githubusercontent.com/dfdebe92274e943e9bdecefb4ca5197b9a6a68933ef8eeb8d77665d4dec2619a/68747470733a2f2f692e696d6775722e636f6d2f5470675571544d2e706e67" 
          />
          <div className={styles.authorInfo}>
            <strong>Taynara Veloso</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="17 de Maio às 18:30h" dateTime="2024-05-17 18:30:00">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe seu comentário'
        />
        <footer>
        <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  );
}