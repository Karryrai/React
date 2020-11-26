import React from "react";


const  Conference= props => (
    <div className="container">
      <div className="row">
      {props.paid.map((conference)=>{
          return (
            <div className="col-md-4" style={{marginBottom:"2rem"}}>
              <div className="conf__box">
                 <img className="conf__box-img"
                    src={conference.imageURL} 
                   alt={conference.confName}/>
                  <div className="conf__text">
                    <h5 className="conf-title">
                      {conference.confName.length < 20 ? `${conference.confName}` : 
                      `${conference.confName.substring(0,25)}...`}
                    </h5>
                    <p className="conf-subtitle">Place: 
                        <span>
                         {conference.city}
                        </span></p>
                    <p className="conf-subtitle">Date: 
                        <span>
                            {conference.confStartDate}
                        </span>
                    </p>
                    <button className="conf__button">
                        <a href={conference.confUrl}>View Details</a>
                    
                    </button>
                  </div>
              </div>
            </div> 

          );
        })}
      </div>
    </div>
    
);

export default Conference;