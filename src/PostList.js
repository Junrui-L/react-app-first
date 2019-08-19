import React, { Component } from "react";
import PostItem from './PostItem'
import LoginForm from './formInput'
import StackForm from './stackForm'
import CheckForm from './checkForm'
import SimpleForm from './simpleForm'
// const data = [{
//     title: '大家来一起讨论React吧。。。',
//     author : '田七',
//     date: '2018-05-30 09:00'
// }, {
//     title: '前端框架你最爱哪一个',
//     author : '李四',
//     date: '2018-05-30 12:00'
// }, {
//     title: 'web app 的时代已经到来',
//     author : '王五',
//     date: '2018-05-30 13:00'
// }]
class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }

        this.timer = null; // 定时器
        this.handleVote = this.handleVote.bind(this) // ES 6 Class中，必须手动绑定this
    }

    componentDidMount() {
        // 用setTimeout 模拟异步从服务器获取数据
        this.timer = setTimeout( () => {
            this.setState({
                posts: [
                    {
                        id: 1,
                        title: '大家来一起讨论React吧。。。',
                        author : '田七',
                        date: '2018-05-30 09:00', 
                        vote: 5
                    }, {
                        id: 2,
                        title: '前端框架你最爱哪一个',
                        author : '李四',
                        date: '2018-05-30 12:00', 
                        vote: 23
                    }, {
                        id:3,
                        title: 'web app 的时代已经到来',
                        author : '王五',
                        date: '2018-05-30 13:00', 
                        vote: 2
                    } 
                ]
            })
        }, 1000)
    }

    componentWillUnmount() {
        if(this.timer) {
            clearTimeout(this.timer)
        }
    }

    handleVote(id) {
        // 根据帖子的ID进行过滤，找到待修改vote属性的帖子，返回新的posts对象
        const posts = this.state.posts.map( item => {
            // console.log(item)
            const newItem = item.id === id ? {...item, vote: ++item.vote} : item;
    
            return newItem
        
        })
        // 使用新的posts对象设置state
        this.setState({
            posts
        })
    }
    render () {
        return (
            <div>
                <LoginForm></LoginForm>
                <CheckForm></CheckForm>
                <StackForm></StackForm>
                <SimpleForm></SimpleForm>
                帖子列表：
                <ul>
                   {
                       this.state.posts.map(item => 
                            <PostItem
                                post = {item}
                                key = {item.id}
                                onVote = {this.handleVote}

                            />
                        )
                   }
                </ul>
            </div>
        )
    }
}

export default PostList