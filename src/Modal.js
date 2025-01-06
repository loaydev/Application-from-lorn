export default function Modal({prope, erroemaseg=null }){
    if (prope) {
        return (
            <div id="model"> 
                <div id="model-con" >
                    <h1 style={{color : erroemaseg ? "red" : "green" }} >
                        {erroemaseg != null ?
                         erroemaseg: "The Form Been Submitted Successfully " } </h1>
                </div>
            </div>
        );
    } else {
        return (<></>)
    }

}