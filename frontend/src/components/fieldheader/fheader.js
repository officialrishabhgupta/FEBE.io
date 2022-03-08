import "./fheader.scss";

const FieldHeader=()=>(

<div className='batting-containers'>
      <div className='batting-rows'>
        <div className='batting'>
          <h1>Runs</h1>
          <h1>Overs</h1>
          <h1>Maidens</h1>
          <h1>Wkts</h1>
          <p className='batting-symbols'>Econ</p>
        </div>
        <div className='batting-datas'>
          <p className='batting-srs'>Catches</p>
          <p className='batting-poss'>POS</p>
          <p className='batting-dismissals'>
            Dismissal
          </p>
          <p className='batting-dismissals'>
            Inns
          </p>
          <p className='batting-dismissals'>
            Opposition
          </p>
          <p className='batting-dismissals'>
            Ground
          </p>
          <p className='batting-dismissals'>
            Result
          </p>
          <p className='batting-dismissals'>
            MatchNo.
          </p>
          <p className='batting-dismissals'>
            Date
          </p>
        </div>
      </div>
    </div>
);

export default FieldHeader;