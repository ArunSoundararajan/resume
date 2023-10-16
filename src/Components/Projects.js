

const Project=(props)=>{
    return(
        <>
         <h1 className="mt-3 mb-2 font-bold text-sm">{props.title}</h1>
    <p className=" mt-3 mb-2 font-medium text-xs tracking-wider">{props.timeline}</p>
    <ul className=" pl-10 list-disc w-4/5">
            <li>{props.list1}</li>
            <li>{props.list2}</li>
            
        </ul>

    <p className=" mt-3 mb-2 font-medium text-xs tracking-wider">
    <span className="font-bold">{props.tech} </span>{props.skills}</p>
    </>
    )
}

export default Project