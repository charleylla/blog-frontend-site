import React,{ Component } from "react";
import Link from "next/link";
export default class HomePage extends Component{
    render(){
        return(
            <div>
                Hello Next.js
                <div>
                    <Link href="/articles">
                        <a>文章列表</a>
                    </Link>
                </div>
            </div>
        );
    }
}