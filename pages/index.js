import Hero from 'components/hero'

export default function Home () {
  const props1 = { title: 'CUBE', subtitle: 'アウトプットしていくサイト' }
  return <Hero {...props1} imageOn />
}
