import { IBlock } from "../../interface/IBlock";
import { helpers } from '../../utils/helpers'
import { timeStampToDate } from '../../utils/helpers'
import { useHistory } from 'react-router';
//Component for each table on the block table 
const BlockTableRowComponent = (block: { block:IBlock, key: number}) => {
  const history = useHistory()
  const pushLink = () =>{
    history.push(`transaction/${block.block.hash}`)
  }
  return (
    <tr>
      <td>
        <span className="link" onClick={()=>pushLink()}>
          {block.block.block_index}
        </span>
      </td>
      <td>{helpers(block.block.hash, 42)}</td>
      <td>
      <span className="link" onClick={()=>pushLink()}>
          {block.block.height}
        </span>
      </td>
      <td>{timeStampToDate(block.block.time)}</td>
    </tr>
  )
}
export default BlockTableRowComponent
