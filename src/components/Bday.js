import React from 'react'

export default function Bday() {
    let styles={
        heading:{
            textAlign: "center",
            fontWeight: "600",
            paddingBottom:"20px"
        },
        center:{
            padding: "5% 30%",
        },
        lis:{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            marginBottom:"20px",
        },
        im:{
            width:"20%",
        },
        con:{
            width:"80%",
            marginLeft:"20px"
        },
        hh:{
            margin:"0",
        },
        sp:{
            color:"#bfbfbf",
            fontFamily: 'baloo_paaji_2regular',
        },
        btn:{
            width:"60%",
            background:" #D43D94",
            border:"0",
            borderRadius:"8px",
            padding:"8px",
            fontSize:"20px",
            color:"#fff",
            fontFamily: 'baloo_paaji_2regular',
        },
        uu:{
            display:"block",
            margin:"0 auto",
        }

    };
    return (
        <div style={styles.center}>
            <h1 style={styles.heading}>5 birthdays today</h1>
            <ul style={styles.uu}>
                <li style={styles.lis}><div style={styles.im}><img src={require("../assets/images/Ellipse 1.png").default} width="60px"/></div>
                    <div style={styles.con}>
                        <h3 style={styles.hh}>Griffin Wooldridge</h3>
                        <span style={styles.sp}>20 years</span>
                    </div>
                </li>
                <li style={styles.lis}><div style={styles.im}><img src={require("../assets/images/Ellipse -1.png").default} width="60px"/></div>
                    <div style={styles.con}>
                        <h3 style={styles.hh}>Hester Hogan</h3>
                        <span style={styles.sp}>23 years</span>
                    </div>
                </li>
                <li style={styles.lis}><div style={styles.im}><img src={require("../assets/images/Ellipse -2.png").default} width="60px"/></div>
                    <div style={styles.con}>
                        <h3 style={styles.hh}>Danny Winget</h3>
                        <span style={styles.sp}>25 years</span>
                    </div>
                </li>
                <li style={styles.lis}><div style={styles.im}><img src={require("../assets/images/Ellipse -3.png").default} width="60px"/></div>
                    <div style={styles.con}>
                        <h3 style={styles.hh}>Joshua Vergara</h3>
                        <span style={styles.sp}>23 years</span>
                    </div>
                </li>
                <li style={styles.lis}><div style={styles.im}><img src={require("../assets/images/Ellipse -4.png").default} width="60px"/></div>
                    <div style={styles.con}>
                        <h3 style={styles.hh}>jon Rettinger</h3>
                        <span style={styles.sp}>20 years</span>
                    </div>
                </li>
            </ul>
            <button style={styles.btn}>Clear All</button>
        </div>
    )
}
