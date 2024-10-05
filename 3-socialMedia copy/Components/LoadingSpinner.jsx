import style from './Loading.module.css'

const LoadingSpinner=()=>{
return <div className={style.Loading}>
<div className="spinner-border" role="status" style={{width:'6rem', height:'6rem' }}>
  <span className="visually-hidden">Loading...</span>
</div>
</div>
}

export default LoadingSpinner