import Spline from '@splinetool/react-spline/next';
import KeySound from '../components/KeySound';

export default function Home() {
  return (
    <main style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <KeySound /> {/* This enables the sound behind the scene */}
      <Spline scene="https://prod.spline.design/Hu4B-WDRnNfy4jyB/scene.splinecode" />
    </main>
  );
}
