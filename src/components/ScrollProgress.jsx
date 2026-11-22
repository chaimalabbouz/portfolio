import { useScrollProgress } from '../hooks/useScrollProgress'
import './ScrollProgress.css'

export default function ScrollProgress() {
  const progress = useScrollProgress()
  return (
    <div className="progress" role="progressbar" aria-label="Reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)}>
      <div className="progress__bar" style={{ transform: `scaleX(${progress})` }} />
    </div>
  )
}
