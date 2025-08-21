import IGFeed from '@/components/IGFeed';
import Lightbox from '@/components/Lightbox';
export default function PortfolioPage(){
  return (<main className="section"><div className="container">
    <h2>Portfolio</h2><p className="subtitle">Highlights from recent work and our Instagram feed.</p>
    <Lightbox images={['/images/flowers.jpg','/images/decor.jpg','/images/graphic.jpg','/images/cards.jpg','/images/entertainment.jpg','/images/documentary.jpg']} />
    <div style={{height:16}}/>
    <IGFeed/>
  </div></main>);
}
