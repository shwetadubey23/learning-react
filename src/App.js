import React from "react";
import Card from "./Card";
import cardData from "./CardData";


// function App() {     //  we have a simlpe method instid of useing this 
//     return (
//         <>
//         <h3 className="heading_style">List of Netflix Series</h3>
//             <Card imgsrc={cardData[0].imgsrc}
//             title={cardData[0].title}
//             sname={cardData[0].sname}
//             link={cardData[0].link}
//             />
//             <Card imgsrc={cardData[1].imgsrc}
//             title={cardData[1].title}
//             sname={cardData[1].sname}
//             link={cardData[1].link}
//             />
//             <Card imgsrc={cardData[2].imgsrc}
//             title={cardData[2].title}
//             sname={cardData[2].sname}
//             link={cardData[2].link}
//             />


//         </>

//     );
// }

// export default App

//_________Simple Method using map on CardData module

// function cardValue(value) {
//     return (
// <Card 
// imgsrc={value.imgsrc}
// title={value.title}
// sname={value.sname}
// link={value.link}
// />
//     )
// }


// ___________using Arrow function
function App() {
    return (
        <>
            <h3 className="heading_style">List of Netflix Series</h3>
            {cardData.map((value) => {
                return (
                    <Card
                        imgsrc={value.imgsrc}
                        title={value.title}
                        sname={value.sname}
                        link={value.link}
                    />
                )
            })}
        </>
    )
}

export default App

