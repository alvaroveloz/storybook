import './MyLabel.css'

interface Props {
  /**
   * Text to display
   */
  label: string
  /**
   * Size of the label
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Capitalize labels
   */
  allCaps: boolean
  /**
   * To set the color of the label
   */
  color: 'primary' | 'secondary' | 'tertiary'
  /**
   * font text
   */
  fontColor?: string



}
export const MyLabel = ({ label, size = 'normal', allCaps, color, fontColor='black' }: Props) => {
  return (
    <div
      className={`${size} ${color} `}
      style={{ color: fontColor }}
    >
      { allCaps ? label.toUpperCase() : label }
    </div>
  )
}
