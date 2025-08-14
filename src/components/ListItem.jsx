import { Link } from "react-router"

export default function ListItem(props){
    const styles = {
        header: "cursor-pointer",
        footer: "cursor-pointer hover:text-primary duration-100",
        footerRegion: "cursor-pointer px-2 border-r-2 border-gray-300"
    }
    if(props.img){
        return( 
            props.title?
                <li className={`flex gap-x-2 cursor-pointer ${styles[props.variant]} `}><img src={props.img} />
                    <a href={props.location}>
                        {props.title}
                    </a>
                </li>
                :
                props.location?
                    <li className="p-1 bg-white rounded-md border-b-[1px] border-gray-400">
                        <a href={props.location}>
                            <img src={props.img} />
                        </a>
                    </li>
                    :
                    <li className="p-1 bg-white rounded-md border-b-[1px] border-gray-400"><img src={props.img} /></li>
        )
    }
    return(
        props.variant === "header"?
        <li className={styles[props.variant]}>
            <Link to={props.location}>
                {props.title}
            </Link>
        </li>
        :
        <li className={styles[props.variant]}>
            <a href={props.location}>
                {props.title}
            </a>
        </li>
    )
}