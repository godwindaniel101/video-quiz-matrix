import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators, } from 'redux'
import { useSelector } from "react-redux";
import { RootState } from '../../state/reducers';
import { useHistory } from 'react-router'
import { actions } from '../../state'
function ErrorRequest() {
  const dispatch = useDispatch()
  const history  = useHistory()
  const { callPageLoader } = bindActionCreators(actions, dispatch)
  
  useEffect(() => { callPageLoader(false) }, [dispatch])
  const { error } = useSelector((state: RootState) => state.error);
  console.log('xxxxxxxxxxxx')
  console.log(error)
  return (
    <div className="container rw-containter">
      <div className="rw-table-container">
        <div className="rw-table-item">
          <div className="table-wrap">
            <div className="table-head">
              <div className="rw-table-text">
                <h3>Oops ! something went wrong</h3>
                <span> {error ? error : 'Try again later'}</span>
                <span className="link" onClick={()=>history.push('/')}>Back to Safety</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ErrorRequest
