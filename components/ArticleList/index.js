import React,{ Component } from "react";
export default class ArticleList extends Component{
    render(){
	const { show } = this.props;
	if(!show) return null;
        return(
            <div>
                <ul>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                    <li>E</li>
                </ul>
            </div>
        );
    }
}