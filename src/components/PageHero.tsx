import styles from './PageHero.module.css'

interface Props {
  tag: string
  title: string
  highlight?: string
  sub?: string
  img?: string
}

export default function PageHero({ tag, title, highlight, sub, img }: Props) {
  return (
    <section className={styles.hero} style={img ? { backgroundImage: `url(${img})` } : {}}>
      <div className={styles.overlay} />
      <div className="noise-overlay" />
      <div className={`wrap ${styles.content}`}>
        <span className={`tag anim-fadeUp`}>{tag}</span>
        <h1 className={`h1 anim-fadeUp delay-1 ${styles.title}`}>
          {title}{highlight && <><br /><span className="gold italic">{highlight}</span></>}
        </h1>
        {sub && <p className={`lead anim-fadeUp delay-2 ${styles.sub}`}>{sub}</p>}
        <div className="gold-line anim-fadeUp delay-3" />
      </div>
    </section>
  )
}
