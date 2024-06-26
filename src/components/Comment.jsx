import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react';

import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }){
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() { //forma de escrita mais legível = Clean Code
    //setLikeCount(likeCount + 1)
    setLikeCount((state) => {
      return state + 1
    });
     
    /* 
      Uma solução para adicionar mais like em um só click 

      const newLikeCount = likeCount + 1;

      setLikeCount(newLikeCount);
      setLikeCount(newLikeCount + 1);
    */
    /* 
      Outra maneira de adicionar mais like em um só click com função

      function handleLikeComment() {
        setLikeCount((state) => {
          return state + 1
        });

        setLikeCount((state) => {
          return state + 1
        });
      }
        SEMPRE QUE FOR PRECISO ATUALIZAR UMA INFORMAÇÃO, 
        E ESSA INFORMAÇÃO DEPENDE DO VALOR QUE ELA TINHA 
        ANTERIORMENTE (DEPENDE DELA MESMA) É MAIS INTERESSANTE 
        FAZER A ATUALIZAÇÃO USANDO ESSE PADRÃO DE FUNÇÕES. 
    */
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://camo.githubusercontent.com/dfdebe92274e943e9bdecefb4ca5197b9a6a68933ef8eeb8d77665d4dec2619a/68747470733a2f2f692e696d6775722e636f6d2f5470675571544d2e706e67" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Taynara Veloso</strong>
              <time title="20 de Maio às 19:25" dateTime="2024-05-20 19:25:00">Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
          {/* <button onClick={() => setLikeCount(likeCount + 1)}> funciona do mesmo jeito */}
            <ThumbsUp/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}