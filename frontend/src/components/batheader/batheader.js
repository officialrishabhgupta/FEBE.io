import "./batheader.scss";

const BatHeader=()=>(

<div className='batting-containers'>
      <div className='batting-rows'>
        <div className='batting'>
          <h1>Runs</h1>
          <h1>Mins</h1>
          <h1>4s</h1>
          <h1>6s</h1>
          <p className='batting-symbols'>BF</p>
        </div>
        <div className='batting-datas'>
          <p className='batting-srs'>SR</p>
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

export default BatHeader;