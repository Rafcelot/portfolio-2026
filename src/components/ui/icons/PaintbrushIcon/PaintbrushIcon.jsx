
import './paintbrush-icon.scss'

const PaintbrushIcon = ({ className }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      aria-hidden="true"
      className={className} 
      fill="none"
    >
      <path 
        d="M4.39616 9.26352C6.79796 6.4719 12.2393 1.0201 14.5416 0.902652C15.9649 0.766532 13.1283 5.8193 6.40596 11.3489M0.900024 14.7877C1.45225 12.8376 1.1038 13.7959 1.29203 11.5503C1.39314 11.2174 1.59459 10.186 2.85537 9.67188C4.28805 9.08695 5.33884 9.97057 5.61028 10.3859C6.41062 11.2532 6.50318 12.3305 5.61028 13.561C4.71739 14.7915 2.06981 15.0972 0.900024 14.7877Z"
        stroke="currentColor" 
        strokeWidth="1.8"
      />

    </svg>
  )
}

export default PaintbrushIcon