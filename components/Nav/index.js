import React,{ Component } from "react";
export default class Nav extends Component{
    constructor(props){
        super(props)
        this._initbind();
        this._init();
    }

    _initbind(){
        this.switchAnimate = this.switchAnimate.bind(this)
    }

    _init(){
        this.animateDesc = [{
            barRef:"menubar",
            contentRef:"navcontent",
            barOffClassName:"header__menu-bar--off",
            barOnClassName:"header__menu-bar--on",
            show:false
        },{
            barRef:"searchbar",
            contentRef:"searchcontent",
            barOffClassName:"header__center__search-icon",
            barOnClassName:"header__menu-bar--on",
            show:false
        }];
    }

    execAnimate(index){
        let animateArr;
        if(index === -1) animateArr = this.animateDesc;
        else animateArr = [this.animateDesc[index]];
        animateArr.forEach((v,k) => {
            const 
                barClassList = this.refs[v.barRef].classList,
                contentClassList = this.refs[v.contentRef].classList;
            
            const { barOffClassName,barOnClassName } = v;
            barClassList.remove("zoomIn");
            contentClassList.remove("slideInDown","slideOutUp");
            requestAnimationFrame(() => {
                if(barClassList.contains(barOffClassName)){
                    barClassList.remove(barOffClassName);
                    barClassList.add(barOnClassName,"zoomIn");
                    contentClassList.remove("hide");
                    contentClassList.add("slideInDown");
                }else{
                    barClassList.remove(barOnClassName);
                    barClassList.add(barOffClassName,"zoomIn");
                    contentClassList.add("slideOutUp");
                }
                v.show = !v.show;
            })
        })
    }

    switchAnimate(index){
        return() => {
            const switchFlag = this.animateDesc.some((v,k) => {
                if(k === index)return;
                return v.show;
            });
            const switchIndex = switchFlag ? -1 : index;
            this.execAnimate(switchIndex);
        }
    }

    render(){
        return(
            <nav>
                <div className="screen-madia__main">
                    <header>
                        <div className="flex header__left">
                            <div className="header__logo">LOGO</div>
                            <div className="flex header__menu-bar">
                                <div onClick={this.switchAnimate(0)} onTouchEnd={this.switchNavBar} className="flex header__menu-wrap">
                                    <div ref="menubar" className="animated header__menu-bar--off"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex header__center">
                            <label onClick={this.switchAnimate(1)} htmlFor="search-input">
                                <span ref="searchbar" className="animated header__center__search-icon"></span>
                            </label>
                        </div>
                        <div className="flex header__right">
                            Hello World
                        </div>
                    </header>
                    <div ref="navcontent" className="animated hide nav__content">导航</div>
                    <div ref="searchcontent" className="animated hide search__content">搜索</div>
                </div>
                <style jsx>{`
                    /* nav layout goes here */
                    nav{
                        width:100%;
                        position: fixed;
                        left:0;
                        top:0;    

                        .animated{
                            animation-duration:.5s;
                        }

                        .screen-madia__main{
                            position:relative;
                        }

                        /* header */
                        @media screen and (max-width:720px){
                            header{
                                height:50px;
                            }
                        }
                        header{
                            width:100%;
                            height:60px;
                            display:flex;
                            jusify-content:space-between;
                            background:#fff;
                            border-bottom:1px solid #ececec;
                            position:absolute;
                            z-index:9999999;
                            .header__left,
                            .header__center,
                            .header__right{
                                height: inherit;
                            }
    
                            .header__left{
                                width:15vw;
                                border-right:1px solid #ececec;
                                .header__logo{
                                    width:10vw;
                                }
                                .header__menu-bar{
                                    width:5vw;
                                    .header__menu-wrap{
                                        width: 25px;
                                        height: 25px;
                                        position: relative;
                                        cursor:pointer;
                                    }
                                }
                            }
        
                            .header__center{
                                width:calc(100% - 35vw);
                                box-sizing:border-box;
                                padding:15px 20px;
                                justify-content:flex-start;
                                label{
                                    width:25px;
                                    height:25px;
                                    cursor:pointer;
                                }
                            }
        
                            .header__right{
                                width:20vw;
                                border-left:1px solid #ececec;
                            }
                        }

                        /* nav content */
                        @media screen and (max-width:720px){
                            .nav__content,search__content{
                                top:50px;
                            }
                        }
                        .nav__content,
                        .search__content{
                            width:100%;
                            height:300px;
                            background:#fff;
                            position:absolute;
                            top:60px;
                            z-index:9999998;
                            &.hide{
                                display:none;
                            }
                        }
                    }

                `}</style>
            </nav>
        );
    }
}