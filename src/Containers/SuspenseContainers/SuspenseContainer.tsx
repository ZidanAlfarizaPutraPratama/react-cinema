import { Spinner } from 'react-bootstrap'
import './SuspenseContainerStyle.css';

const SuspenseContainer = () => {
  return (
    <div className="loading">
        <div className="background-loading" />
        <Spinner animation='border' variant='light' className='spinner' />
    </div>
  )
}



export default SuspenseContainer