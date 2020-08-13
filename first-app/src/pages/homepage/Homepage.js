import React from "react";
import { useSelector} from "react-redux"
import "./homepage.scss";

const mapState = ({user}) => ({
    currentUser: user.currentUser,
    userError: user.userError
});

const Homepage=(props)=>{
    const { currentUser } = useSelector(mapState);
    return(
        <div className="container-fluid">
            {currentUser &&(

                <div className="row">
                    <div className="col-6 flex">
                
                        <div className= "col-8 text-center content">
                            <h3 className="slogan"> A Marketplace for the
                                <br></br>Columbia Community
                            </h3>
                            <div className="row buttons">
                                <div className="col-6">
                                    <button className="btn">Buy</button>
                                </div>
                                <div className="col-6 ">
                                    <button className="btn">Sell</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 flex">
                        <div className= "col-8 text-center testimonials">
                            <p className="review1">"I produced more sales and saw an<br></br>
                            increase in community support!"
                            </p>
                            <p className="user"> - Hello World</p>
                            
                        </div>
                    </div>

                </div>

            )}
            {!currentUser &&(
                <div className="row">
                    <div className="col-6 flex">
                  
                        <div className= "col-8 text-center content">
                            <h3 className="slogan"> A Marketplace for the
                                <br></br>Columbia Community
                            </h3>
                            <div className="row buttons">
                                <div className="col-6">
                                    <button className="btn">Buy</button>
                                </div>
                                <div className="col-6 ">
                                    <button className="btn">Sell</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 flex">
                        <div className= "col-8 text-center testimonials">
                            <p className="review1">"I produced more sales and saw an<br></br>
                            increase in community support!"
                            </p>
                            <p className="user"> - Hello World</p>
                            
                        </div>
                    </div>

                </div>
            )}
            
        </div>
  
    )
}
Homepage.defaultProps={
    currentUser: null
}

export default Homepage;