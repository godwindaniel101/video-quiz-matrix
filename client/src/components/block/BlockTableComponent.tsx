import React, { useEffect } from "react";
import { RootState } from "../../state/reducers";
import ReactPaginate from "react-paginate";
import BlockTableRowComponent from "./BlockTableRowComponent";
import Calendar from "react-calendar";
import { actions } from "../../state";
import { IBlock } from "../../interface/IBlock";
import { useDispatch, useSelector } from "react-redux";
import { getCalendarTimestamp } from "../../utils/helpers";
import { useHistory } from 'react-router-dom'


import { bindActionCreators } from "redux";
//Component that shows the block been mined 
const BlockTableComponent = () => {
  
   const history = useHistory()

  const dispatch = useDispatch();

  const { getBlocks, setBashTime } = bindActionCreators(actions, dispatch);

  const {  pagination: { totalCount, limit, page, pageCount },  } = useSelector((state: RootState) => state.paginate);


  const bashtime = useSelector((state: RootState) => state.bashtime);

  const { loading } = useSelector((state: RootState) => state.blockpreloader);

  const pageChange = (selected: number) => {  getBlocks(history ,selected, true); };
  
  useEffect(() => { getBlocks(history); }, [dispatch]);

  const block = useSelector((state: RootState) => state.block)

  const renderView = (): JSX.Element[] => {
    return block.map((block: IBlock) => {
      return <BlockTableRowComponent block={block} key={block.block_index} />;
    });
  };

  const calendarChanged = (date: any) => { setBashTime(getCalendarTimestamp(date));   getBlocks(history,0, true);  };

  const timeval = new Date(bashtime);

  return (
    <div className="container rw-containter">
      <div className="rw-table-container">
        <div className="rw-table-item">
          <div className="rwd-table-wrap">
            <div className="rwd-table-head">
              <div className="rw-table-text">
                <h3>Quick Blocks</h3>
                <span> Shows all Quick capital Blocks</span>
              </div>
            </div>
            <div className={"rwd-table-div " + (loading ? "proccessing" : "")}>
              {totalCount > 0 ? (
                <React.Fragment>
                  <div className="rwd-table-main">
                    <table className="rwd-table">
                      <thead>
                        <tr>
                          <th>Block Index</th>
                          <th>Hash</th>
                          <th>Height</th>
                          <th>Time</th>
                        </tr>
                      </thead>
                      <tbody>{renderView()}</tbody>
                    </table>
                  </div>
                  <div className="rm-paginate">
                    <div className="countStat">
                      Showing {page} of {totalCount}
                    </div>
                    <ReactPaginate
                      containerClassName={"pagination"}
                      activeClassName="active"
                      pageCount={pageCount}
                      pageRangeDisplayed={0}
                      disableInitialCallback={true}
                      marginPagesDisplayed={limit}
                      initialPage={0}
                      onPageChange={({ selected }) => pageChange(selected)}
                    />
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className="no-record"></div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
        <div className="rw-calendar">
          <Calendar
            onChange={(formatLongDate: any) => {
              calendarChanged(formatLongDate);
            }}
            value={timeval}
          />
        </div>
      </div>
    </div>
  );
};

export default BlockTableComponent;
