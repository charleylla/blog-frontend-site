import React,{ Component } from "react";
import stylesheet from "./style.css";
export default class Nav extends Component{
    constructor(props){
        super(props)
        this.state={
            searchKeyWords:"",
        }
        this._initbind();
        this._init();
    }

    _initbind(){
        this.switchAnimate = this.switchAnimate.bind(this);
        this.execAnimate = this.execAnimate.bind(this);
        this.changeSearchValue = this.changeSearchValue.bind(this);
        this.resetSearchValue = this.resetSearchValue.bind(this);
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

    changeSearchValue(e){
        const searchKeyWords = e.target.value;
        this.setState({
            searchKeyWords
        })
    }

    resetSearchValue(){
        this.setState({
            searchKeyWords:""
        })
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
        });
        this.resetSearchValue();
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
        const { searchKeyWords } = this.state;
        return(
            <nav>
                <div className="screen-madia__main">
                    <header className="flex">
                        <div className="flex header__left">
                            <div className="header__logo">LOGO</div>
                            <div className="flex header__menu-bar">
                                <div 
                                    onClick={this.switchAnimate(0)} 
                                    onTouchEnd={this.switchAnimate(0)} 
                                    className="flex header__menu-wrap"
                                >
                                    <div 
                                        ref="menubar" 
                                        className="animated header__menu-bar--off"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex header__center">
                            <label 
                                onClick={this.switchAnimate(1)} 
                                onTouchEnd={this.switchAnimate(1)} 
                                htmlFor="search-input"
                            >
                                <span 
                                    ref="searchbar" 
                                    className="animated header__center__search-icon"
                                />
                            </label>
                        </div>
                        <div className="flex header__right">
                            Hello World
                        </div>
                    </header>
                    <div 
                        ref="navcontent" 
                        className="animated hide nav__content"
                    >
                        导航
                    </div>
                    <div 
                        ref="searchcontent"
                        className="flex animated hide search__content"
                    >
                        <p>搜索本站</p>
                        <input 
                            value={searchKeyWords} 
                            onInput={this.changeSearchValue}
                            id="search-input" 
                            placeholder="按关键字搜索文章、专题"
                        />
                    </div>
                </div>
                <style jsx>{stylesheet}</style>
            </nav>
        );
    }
}