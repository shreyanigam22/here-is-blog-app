import "./post.css"

export default function Post() {
    return (
        <div className="post">
       <img className="postImg"
        src="https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">life</span>

            </div>
            <span className="postTitle">
            Courage not only means being brave
                      </span>
            <hr/>
            <span className="postDate">
                1h ago
            </span>

            <p className="postDesc">Paraprofessionals provide instructional, behavioral, and other support to students in and outside of the classroom. Paraprofessionals often work one-on-one with students who receive
             special education and related services or those who have a 504 plan .</p>

            
          </div>
            
        </div>
    )
}
