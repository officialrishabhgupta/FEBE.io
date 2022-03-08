import './fielding.scss';

const Field = ({
  runs,
  overs,
  maidens,
  wkts,
  econ,
  catches,
  pos,
  dismissal,
  inns,
  opposition,
  ground,
  date,
  matchnumber,
  result
}) => {
  return (
    <div className='bat-container'>
      <div className='bat-row'>
        <div className='bat'>
          <h1>{runs}</h1>
          <h1>{overs}</h1>
          <h1>{maidens}</h1>
          <h1>{wkts}</h1>
          <p className='bat-symbol'>{econ}</p>
        </div>
        <div className='bat-data'>
          <p className='bat-sr'>{catches}</p>
          <p className='bat-pos'>{pos}</p>
          <p className='bat-dismissal'>
            {dismissal}
          </p>
          <p className='bat-dismissal'>
            {inns}
          </p>
          <p className='bat-dismissal'>
            {opposition}
          </p>
          <p className='bat-dismissal'>
            {ground}
          </p>
          <p className='bat-dismissal'>
            {result}
          </p>
          <p className='bat-dismissal'>
            {matchnumber}
          </p>
          <p className='bat-dismissal'>
            {date}
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Field;