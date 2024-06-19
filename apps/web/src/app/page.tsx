import Image from 'next/image'
import { add } from '@autospace/sample-lib'
export default function Home() {
  return <h1>Hello{add()}</h1>
}
