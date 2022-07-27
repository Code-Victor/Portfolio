import { styled } from "../../stitches.config";

const Container=styled('div',{
    width:'100%',
    margin:'0 auto',
    '@sm':{
        maxWidth:'640px'
    },
    '@md':{
        maxWidth:'768px'
    },
    '@lg':{
        maxWidth:'1024px'
    },
    '@xl':{
        maxWidth:'1280px'
    },
    '@xxl':{
        maxWidth:'1640px'
    },
    variants:{
        padding:{
            none:{},
            '1':{
                px:'0.8rem'
            },
            '2':{
                px:'1rem'
            },
            '3':{
                px:'1.5rem'
            },
        }
    },
    defaultVariants:{
        padding:'1'
    }
    
})
export default Container