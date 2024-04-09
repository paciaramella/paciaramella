import cap from '../svgs/Graduation-Cap.svg';
import code from '../svgs/code2.svg';
// import resume from '../svgs/Resume.svg';

export const CARDS = [
    {
        frontText: 'Card 1',
        backText:'University of Georgia',
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