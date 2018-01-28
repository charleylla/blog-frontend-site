import React,{ Component } from "react";
export default class Nav extends Component{
    render(){
        return(
            <nav>
                <div className="nav__box">
                    <div className="nav__left">
                    </div>
                    <div className="nav__center">
                    </div>
                    <div className="nav__right">
                    </div>
                </div>
                <style jsx>{`
                    nav{
                        width:100%;
                        position: fixed;
                        left:0;
                        top:0;    
                    }
                    
                    .nav__box{
                        height:9.5vh;
                        background:#fff;
                        display:flex;
                        justify-content:space-between;
                    }

                    .nav__left{
                        width:12vw;
                        border-right:1px solid #ececec;
                    }

                    .nav__right{
                        width:23.6vw;
                        border-left:1px solid #ececec;
                    }
                
                `}</style>
            </nav>
        );
    }
}