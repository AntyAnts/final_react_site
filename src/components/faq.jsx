import classes from './styles_components/FAQ.module.css'
const FAQ = () =>{
    return (
        <div className={classes.div_faq_cl}>
            <ul>
                <li className={classes.li_cl}>
                    Как добавить пост о ремонте ? Ответ: пост можно добавить после окончательной доработки серверной части
                </li>
                <li className={classes.li_cl}>
                    У меня не работает карта в контактах Ответ: удалите cookie и перезагрузите страницу
                </li>
            </ul>
        </div>
    )
}
export default FAQ