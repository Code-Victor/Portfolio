import React from 'react'
import { styled } from '../../stitches.config'

const NiceLink = styled('a',{
    color:'$textPrimary',
    textDecoration:'none',
    position:'relative',
    
    '&::after':{
        content:"''",
        width:'100%',
        bg:'$gradient4',
        bottom:-3,
        left:0,
        height:2,
        position:'absolute',
        transform:'scaleX(1)',
        transformOrigin:'left bottom',
        transition:'transform 0.4s ease',
    },
    '&:hover::after':{
        transform:'scaleX(0)',
        transformOrigin:'right bottom',

    }
})

export default NiceLink