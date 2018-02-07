import React,{ Component } from "react";
import ReactDOM from 'react-dom';
import Mask from "@components/Mask";
import stylesheet from "./style.css";

export default class Banner extends Component{
    constructor(props){
        super(props)
        this.state={
            timer: 0,
            num: 0,
            sliderList: [],
        }
        this._initbind();
        this._init();
    }

    _initbind(){
        this.carousel = this.carousel.bind(this)
    }

    _init(){

    }
    
    componentDidMount(){
        //clearInterval(this.state.timer);
        let { timer } = this.state
        timer = setInterval(this.carousel,2000);
        this.setState({ timer })
    }

    carousel(){
        //ReactDOM.findDOMNode(this.sliderList).children
        let { num, sliderList } = this.state
        let lis = sliderList.children
        //lis[num].className = "slider__li"
        let classArr = lis[num].className.split(" ")
        classArr.splice(-1,1)
        lis[num].className = classArr.join(" ")

        num++;
        if(num === 3){
            num = 0;
        }
        this.setState({ num })
        //lis[num].className = "slider__li slider__li--active"  
        lis[num].className = lis[num].className + " slider__li--active"
    }

    render(){
        const { mask_on } = this.props;
        return(
            <div className="banner">
                <div className="carousel__left">
                    <div className="carousel__left__top">
                        <div className="banner__day__left">
                            <p className="banner__day__num">05</p>
                            <p className="banner__day__text">FEBRUARY</p>
                            <p className="banner__day__text">FWA OF THE DAY</p>
                        </div>
                        <input className="button__share" type="button" value="Share +" />
                    </div>
                    <div className="carousel__left__bottom">
                         <section className="carousel__section">
                             <a href="#">
                                 <h3>Website</h3>
                                 <h2>#12LaboursOfHercules</h2>
                                 <p>The Twelve Labours of Hercules are a series of brand collaborations that have been initiated by HANDS in 2017.</p>
                             </a>
                         </section>
                    </div>
                </div>
                <div className="carousel__right">
                    <div className="slider">
                        <ul className="slider__list" ref={(u) => { this.state.sliderList = u; }} >
                            <li className="slider__li slider__li--active">
                                <a href="#">
                                    <img src="/static/img/1.png" alt=""  />
                                </a>
                            </li>
                            <li className="slider__li">
                                <a href="#">
                                    <img src="/static/img/2.png" alt=""  />
                                </a>
                            </li>
                            <li className="slider__li">
                                <a href="#">
                                    <img src="/static/img/3.png" alt=""  />
                                </a>
                            </li>
                        </ul>
                        <div className="slide__dot">
                            <a>
                                <span className="slide__dot__item slide__dot__item--active"></span>
                            </a>
                            <a>
                                <span className="slide__dot__item"></span>
                            </a>
                            <a>
                                <span className="slide__dot__item"></span>
                            </a>
                        </div>
                    </div>  
                </div>
                <Mask mask_on={mask_on} />
                <style jsx>{stylesheet}</style>
            </div>
        );
    }
}