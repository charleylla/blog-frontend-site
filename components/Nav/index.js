import React,{ Component } from "react";
export default class Nav extends Component{
    render(){
        return(
            <nav>
                <div className="screen-madia__main">
                    <div className="nav__box">
                        <div className="nav__left">
                        </div>
                        <div className="nav__center">
                        </div>
                        <div className="nav__right">
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    /* nav layout goes here */
                    .screen-madia__main .nav__box{
                        height:60px;
                    }

                    @media screen and (max-width:720px){
                        .screen-madia__main .nav__box{
                            height:50px;
                        }
                    }

                    nav{
                        width:100%;
                        position: fixed;
                        left:0;
                        top:0;    
                    }

                    .nav__box{
                        display:flex;
                        jusify-content:space-between;
                        background:#fff;
                    }

                    .nav__left,
                    .nav__center,
                    .nav__right{
                        height: inherit;
                    }

                    .nav__left{
                        width:200px;
                        border-right:1px solid #ececec;
                    }

                    .nav__center{
                        width:100%;
                    }

                    .nav__right{
                        width:390px;
                        border-left:1px solid #ececec;
                    }
                `}</style>
            </nav>
        );
    }
}