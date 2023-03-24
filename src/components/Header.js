import React from "react";
import styled from "styled-components";


const Header = () => {
    const HeaderStyle = styled.header`

        background-color: #F28C28;
        color: white;
        display: flex;
        flex-direction: row;
        margin: 0;
        justify-content: center;

        `

    return ( 
   
            <HeaderStyle>
                <h2 className="text-3xl font-bold p-2">If Only ...</h2>
            </HeaderStyle>

     );
}
 
export default Header;