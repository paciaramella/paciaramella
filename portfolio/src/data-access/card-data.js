import cap from '../svgs/academic-cap.svg';
import code from '../svgs/code.svg';
// import resume from '../svgs/Resume.svg';

export const CARDS = [
    {
        frontText: 'Card 1',
        backText:'UGA',
        icon: cap,
    },
    {
        frontText: 'Card 2',
        backText:'Java, Python, JS, Node.js',
        icon: code,
        right: true,
    },    
    {
        frontText: 'Card 3',
        // icon: resume,
    },    
    {
        frontText: 'Card 4',
        backText:'Card 4 Back',
        icon: null,
        right: true,
    },    
]