import React,{ Component } from "react";
export default class Articel extends Component{
    render(){
        return(
            <div className="article-box__title">
                Artical Lists
                <p>Para</p>
                <style jsx>{`
                    .article-box__title {
                        background: red;
                        transition:all ease .5s;
                        display:flex;
                        width:100%;
                        p{
                            color:#fff;
                        }
                        &:hover{
                            font-size:30px;
                        }
                    }
                    @media (max-width: 600px) {
                        .article-box__title {
                            background: blue;
                            color:#fff;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

