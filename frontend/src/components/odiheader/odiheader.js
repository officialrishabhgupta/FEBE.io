import "./odiheader.scss";

const OdiHeader=()=>(

<div className='batting-containers'>
      <div className='batting-rows'>
        <div className='batting'>
          <h1>Catches</h1>
          <p className='batting-symbols'>Wkts</p>
        </div>
        <div className='batting-datas'>
          <p className='batting-srs'>BatScore</p>
          <p className='batting-poss'>RunsConc</p>
          <p className='batting-dismissals'>
            Stumps
          </p>
          <p className='batting-dismissals'>
            BatInns
          </p>
          <p className='batting-dismissals'>
            Opposition
          </p>
          <p className='batting-dismissals'>
            Ground
          </p>
          <p className='batting-dismissals'>
            Toss
          </p>
          <p className='batting-dismissals'>
            Result
          </p>
          <p className='batting-dismissals'>
            Date
          </p>
          <p className='batting-dismissals'>
            ResMargin
          </p>
        </div>
      </div>
    </div>
);

export default OdiHeader;