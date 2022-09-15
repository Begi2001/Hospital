import React from 'react'
import SectionHeader from "../UsableComponents/SectionHeaders/SectionHeader";

import Img2 from '../../assets/images/aqImg2.png'
import Img3 from '../../assets/images/aqImg3.png'
import Img4 from '../../assets/images/aqImg4.png'
import photo from '../../assets/images/aboutImg.png'
import photo2 from '../../assets/images/founder.png'
import photo3 from '../../assets/images/sign 1.svg'


/*const data = [{
    id: 1,
    image: Img2,
    title: 'Fever & Flu',
    descr: 'One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.'
},/!*
  {id:2,image:Img3,title:'Fever & Flu',descr:'One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.'},
  {id:3,image:Img4,title:'Fever & Flu',descr:'One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.'},
  {id:4,image:Img2,title:'Fever & Flu',descr:'One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.'},
  {id:5,image:Img3,title:'Fever & Flu',descr:'One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.'},
  {id:6,image:Img4,title:'Fever & Flu',descr:'One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.'},
  {id:7,image:Img2,title:'Fever & Flu',descr:'One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.'},
  {id:8,image:Img3,title:'Fever & Flu',descr:'One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.'},
  {id:9,image:Img4,title:'Fever & Flu',descr:'One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.'},*!/]*/

const data = [
    {
        id: 1, title: 'About US', descr: 'Story about our hospital', image: photo, absolute: [
            {
                id: 2,
                image: photo2,
                sing: photo3,
                title: 'Story about our hospital',
                subtitle: 'And how we get to this point',
                descr: 'One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum.',
                author: 'Founder of MEDART Hospital'
            }
        ]
    }
]

function Services() {
    return (<>
        <div>{data.map(serv => (<SectionHeader section={'service'} data={serv}/>))}</div>
    </>)
}

export default Services