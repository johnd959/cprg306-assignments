import Image from 'next/image'
import StudentInfo from './StudentInfo'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo/>
      <ul>
        <li><Link href="./week2">Week 2</Link></li>
        <li><Link href="./week3">Week 3</Link></li>
        <li><Link href="./week4">Week 4</Link></li>
      </ul>
    </main>
  );
}
