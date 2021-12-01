import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { actions } from '../../state'
function Notfound() {
  const dispatch = useDispatch()
  const history  = useHistory()
  const { callPageLoader } = bindActionCreators(actions, dispatch)
  
  useEffect(() => {callPageLoader(false) }, [dispatch])
  return (
    <div className="container rw-containter">
      <div className="rw-table-container">
        <div className="rw-table-item">
          <div className="table-wrap">
            <div className="table-head">
              <div className="rw-table-text">
                <h3 className="error-header">404 Route not found</h3>
                <span> You most have gotten lost.. </span>
                <span>
                  <span className="link" onClick={()=>history.push('/')}>Back to Safety</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Notfound
