export default function BoxColor(props){
    const divStyle ={
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        textAlign: "center",
        height: "100px"
    }

    return (
        <div style={divStyle}>
            <h2>r:{props.r} g:{props.g} b:{props.b}</h2>
            <h2>#{props.r.toString(16)}{props.g.toString(16)}{props.b.toString(16)}</h2>
        </div>
    )
}