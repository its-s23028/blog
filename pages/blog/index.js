import Hero from 'components/hero'

export default function Blog () {
  const props1 = { title: 'Blog', subtitle: 'Recent Posts' }
  return <Hero {...props1} />
}
