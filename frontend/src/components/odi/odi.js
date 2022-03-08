import './odi.scss';

const Odi = ({
  resmargin,
  wkts,
  catches,
  batscore,
  runconceded,
  stumps,
  batinns,
  opposition,
  ground,
  date,
  result,
  toss
}) => {
  return (
    <div className='bat-container'>
      <div className='bat-row'>
        <div className='bat'>
          <h1>{catches}</h1>
          <p className='bat-symbol'>{wkts}</p>
        </div>
        <div className='bat-data'>
          <p className='bat-sr'>{batscore}</p>
          <p className='bat-pos'>{runconceded}</p>
          <p className='bat-dismissal'>
            {stumps}
          </p>
          <p className='bat-dismissal'>
            {batinns}
          </p>
          <p className='bat-dismissal'>
            {opposition}
          </p>
          <p className='bat-dismissal'>
            {ground}
          </p>
          <p className='bat-dismissal'>
            {toss}
          </p>
          <p className='bat-dismissal'>
            {result}
          </p>
          <p className='bat-dismissal'>
            {date}
          </p>
          <p className='bat-dismissal'>
            {resmargin}
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Odi;