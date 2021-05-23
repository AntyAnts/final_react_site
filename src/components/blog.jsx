import classes from './styles_components/Blog.module.css'
const Blog = (props) =>{
    return(
        <div className ={classes.blog_div}>
            <img className={classes.img_blog} src={props.path}></img>
            <h1>{props.title}</h1>
            <p>{props.comment}</p>
            <button className={classes.blog_btn}>Продолжить</button>
        </div>
    )
}
export default Blog