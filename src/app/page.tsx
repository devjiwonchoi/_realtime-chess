import { ChessBoard } from '@/components'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Chessboard</h1>
      <ChessBoard />
    </main>
  )
}
