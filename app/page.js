import './styles/style.scss'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'


export default function Page() {
  return (
    <>
  <h1 className={styles.sitetitle}>ともすた</h1>
  <Image src="/images/next.svg"
   width={150}
   height={30}
   alt="Next.js" />
  <p><Link href="about">ポートフォリオ</Link></p>
  <p>1+1={1+1}</p>
    </>

)

}