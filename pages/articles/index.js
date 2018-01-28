import React,{ Component } from "react";
import ArticleList from "@components/ArticleList"
import { connect } from "./connect";

@connect
class Article extends Component{
    render(){
        const { list_on,switch_list_state } = this.props;
        return(
            <div className="article-box__title">
                Artical Lists
                <button onClick={switch_list_state}>switch article list</button>
                <ArticleList show={list_on}/>
                <style jsx>{`
                    .article-box__title {
                        background: red;
                        transition:all ease .5s;
                        display:flex;
                        width:100%;
                        p{
                            color:#fff;
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

export default Article;
