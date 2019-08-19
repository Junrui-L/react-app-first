import React from "react";
import "./PostItem.css"
// import PropTypes from 'prop-types';
// class PostItem extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             vote:0
//         };
//     }

//     // 处理点赞逻辑
//     handleClick() {
//         let vote = this.state.vote;
//         vote++;
//         this.setState({
//             vote: vote
//         })    
//     }

//     render() {
//         const { title, author, date } = this.props
//         return (
//             <li>
//                 <div>{title}</div>
//                 <div>创建人 <span>{author}</span></div>
//                 <div>创建时间：<span>{date}</span></div>
//                 <div>
//                     <button
//                         onClick = {() => {
//                                 this.handleClick()
//                             }
//                         }
//                     >点赞</button>
//                     &nbsp;
//                     <span>{this.state.vote}</span>
//                 </div>
//             </li>     
//         )
//     }
// }

// PostItem.PropTypes = {
//     post: PropTypes.object,
//     onVote: PropTypes.func
// }

// style: PropTypes.shape({
//     color: PropTypes.string,
//     fontSize: PropTypes.number
// })

// sequence: PropTypes.arrayOf(PropTypes.number)

// PostItem.PropTypes = {
//     post: PropTypes.shape({
//         id: PropTypes.number,
//         title: PropTypes.string,
//         author: PropTypes.string,
//         date: PropTypes.string,
//         vote: PropTypes.number
//     }).isRequired,
//     onVote: PropTypes.func.isRequired
// }
function PostItem(props) {
    const handleClick = () => {
        props.onVote(props.post.id)
    };
    const  { post } = props;
    // const style =  {
    //     width: "100%",
    //     height: "50px",
    //     backgroundColor: "#993",
    //     fontSize: "30px"
    // }
    return (
        <li>
            <div 
               className = "title"
            >{post.title}</div>
            <div className = "content">
                创建人： <span>{post.author}</span>
            </div>
            <div className = "content">创建时间： <span>{post.date}</span></div>
            <div className = "like">
                <span onClick = {handleClick}>点赞</span>
                &nbsp;
                <span>{post.vote}</span>
            </div>
        </li>
    )

}


export default PostItem;