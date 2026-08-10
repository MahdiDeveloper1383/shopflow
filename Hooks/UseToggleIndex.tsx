'use client'
import { useState } from "react";

export const useToggleIndex = ()=>{
     const [openIndex, setOpenIndex] = useState<number | null>(null);
      const toggleIndex = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
      };
    return{
        openIndex,
        toggleIndex
    }
}