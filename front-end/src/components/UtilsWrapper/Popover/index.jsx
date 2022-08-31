import React, { useEffect } from 'react'
import * as RadixPopover from "@radix-ui/react-popover";
import styled from "styled-components";

import OrderIcon from "../../../../public/components/Popover/OrderIcon.png";

  export const PopoverContainer = (props) => {
    const { children } = props;
    return <RadixPopover.Root>{children}</RadixPopover.Root>;
  };
  
  const PopoverTrigger = styled(RadixPopover.Trigger)`
    background: #E9E4DA;
    border: 2px solid #DCD8D0;
    padding: 9px 19px 9px 60px;
    font-family: "AvenirBook";
    color: rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    background-image: url(${OrderIcon.src});
    background-position: 15px center;
    background-repeat: no-repeat;
    width: 50%;
  `
  
  const PopoverArrow = styled(RadixPopover.Arrow)`
    fill: #DCD8D0;
  `;
  
  const LocalPopoverContent = (props) => {
    const { children, ...rest } = props;
    return (
      <RadixPopover.Content {...rest}>
        {children}
        <PopoverArrow />
      </RadixPopover.Content>
    );
  };
  
  export const PopoverContent = styled(LocalPopoverContent)`
    width: 100%;
    background-color: #E9E4DA;
    border: 3px solid #DCD8D0;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0px;
    div{
        display: flex;
        width: 100%;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;

        input{
            margin-bottom: 4px;
        }
    }
  `;

  
export default function Popover({order, setOrder, jokes, setJokes}) {
  
  return (
    <PopoverContainer style={{width: "100%"}}>
        <PopoverTrigger>
        Ordenar
        </PopoverTrigger>
        <PopoverContent>
            <div>
                <input type="radio" name="orderRadio" value="likes" onChange={(event) => setOrder(event.target.value)} />
                <p>Likes</p>
            </div>
            <div>
                <input type="radio" name="orderRadio" value="dislikes" onChange={(event) => setOrder(event.target.value)} />
                <p>Deslikes</p>
            </div>
        </PopoverContent>
    </PopoverContainer>
  )
}
