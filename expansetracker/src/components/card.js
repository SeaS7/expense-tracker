const Card = ()=>{
    const classes = "card "+ props.className;
    return(
        <div className={classes}>
            {props.children}
        </div>
    )
}