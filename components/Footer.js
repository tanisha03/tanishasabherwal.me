import Link from "next/link";
import {Icons} from '../assets/Icon';

const LINKS=[
    {
        icon:'email',
        link:'mailto:tanisha031199@gmail.com'
    },
    {
        icon:'twitter',
        link:'https://twitter.com/tanishaaa03'
    },
    {
        icon:'github',
        link:'https://github.com/tanisha03'
    },
    {
        icon:'medium',
        link:'https://medium.com/@tanisha031199'
    }
];


export default function Footer() {
    return (
        <div>
            {
                   LINKS.map(link=>(
                       <Link href={link.link} aria-label={link.icon} target="_blank" rel="noopener" key={link.index}>
                           <a>{Icons?.social[link.icon]}</a>
                       </Link>
                   )) 
            } 
        </div>
    )
}
