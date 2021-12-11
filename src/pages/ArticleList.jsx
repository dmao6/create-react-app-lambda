import React from "react";
import { Link } from "react-router-dom";

function ArticleList(){
    return(
        <div className="articleList">
            <Link to="#"><i class="bi bi-plus-circle">Add a new article</i></Link>


            
        </div>
    )
}


export default ArticleList;