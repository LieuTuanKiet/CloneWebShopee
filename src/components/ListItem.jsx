import { Link } from "react-router"

export default function ListItem(props){
    const styles = {
        header: "cursor-pointer",
        footer: "cursor-pointer hover:text-primary duration-100",
        footer2: "cursor-pointer px-2 border-r-2 border-gray-300",
        footer3: "cursor-pointer px-2",
        footer4: "cursor-pointer px-8 border-r-2 border-gray-300",
        footer5: "cursor-pointer px-8",
        footer6: "flex gap-x-2 cursor-pointer hover:text-primary duration-100",
        ad: "cursor-pointer flex flex-col justify-between items-center h-full w-[20%]",
    };

   switch(props.type){
    case "normal":
        return(
            <li className={styles[props.variant]}>
                <a href={props.location}>
                    {props.title}
                </a>
            </li>
        );
    case "normalLink":
        return(
            <li className={styles[props.variant] }>
                <Link to={props.location}>
                    {props.title}
                </Link>
            </li>
        );
    case "image":
        return(
            <li className="p-1 bg-white rounded-md border-b-[1px] border-gray-400"><img src={props.img} /></li>
        );
    case "imageLocation":
        return(
            <li className= {styles[props.variant] || "p-1 bg-white rounded-md border-b-[1px] border-gray-400"}>
                <a href={props.location}>
                    <img src={props.img} />
                </a>
            </li>
        );
    case "imageTitle":
        return(
            <li className={`${styles[props.variant]} `}><img src={props.img} />
                <a href={props.location}>
                    {props.title}
                </a>
            </li>
        );
    case "imageTitleLink":
        return(
            <li className={`${styles[props.variant]} `}><img src={props.img} className="w-[22%]"/>
                <Link to={props.location} className="text-center w-[52%]">
                    {props.title}
                </Link>
            </li>
        )
   };

   /* Disabled because too complex if adding more code into this instead using switch case for a while before try to add OOP inside this project
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
                    <li className= {styles[props.variant] || "p-1 bg-white rounded-md border-b-[1px] border-gray-400"}>
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
        <li  className={styles[props.variant] }>
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
        */
}
