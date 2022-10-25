import { LoremIpsum } from "react-lorem-ipsum";
export default function About() {
  return (
    <div>
      <h1 className='willow-font text-3xl text-yellow-600 pb-8'>[about_me]</h1>
      <p className='text-gray-400 text-xl text-normal tracking-widest'><LoremIpsum /></p>
    </div>
  )
}