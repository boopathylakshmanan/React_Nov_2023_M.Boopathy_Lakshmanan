const Styling =()=> {
    const pstyle={
        color:"darkBlue",
        FontSize:"16px",
        backgroundColor:"lightblue",
        Padding:"10px",
        border:"1px solid blue",
        borderRadius:"5px"
    };
    return(<div>

        <h1 style={{color:"green"}}>Inline Style in JSX example</h1>
        <p style={pstyle}>This is a paragraph with inline styles applied</p>
    </div>
    );
}
export default Styling;