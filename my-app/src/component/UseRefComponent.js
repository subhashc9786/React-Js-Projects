import React, { useEffect } from 'react'
import { useRef } from 'react';

export const UseRefComponent = () => {
const containerRef =  useRef(null);


useEffect(()=>{

  const handleScroll =()=>{

    const container = containerRef.current;
   
    if(container.scrolltop + container.offsetHeight >= container.scrollHeight){
      // fetch more data or perform infinite scroll logic
    }
    
  };

  const container = containerRef.current;
  container.addEventListener('scroll',handleScroll);

  return()=>{
    container.removeEventListener('scroll',handleScroll);
  }
},[]);



  return (
    <div ref={containerRef} style={{height:"500px",overflowY:'scroll'}}>
    lorem500
    Velit excepteur ex velit duis minim nisi. Aute fugiat sint ipsum culpa consequat magna deserunt excepteur. Ea quis magna sint aute laborum quis in veniam officia.

Quis ex non cupidatat nulla amet est officia fugiat occaecat excepteur irure enim fugiat deserunt. Dolore deserunt do excepteur consectetur adipisicing fugiat Lorem eiusmod adipisicing quis. Officia dolore elit consequat enim enim.

Voluptate commodo do reprehenderit tempor excepteur officia sint sunt. Minim voluptate culpa labore ipsum qui irure ea officia amet enim tempor sunt proident. Voluptate incididunt irure culpa commodo laboris et culpa voluptate adipisicing.

Exercitation Lorem ut commodo minim ut eiusmod qui eiusmod laboris sunt reprehenderit nisi. Aute aliquip ad ea dolore. Occaecat laborum minim dolor in ad nisi quis ad id. Aliqua excepteur et culpa mollit sint eiusmod velit reprehenderit sunt eiusmod anim tempor velit irure. Deserunt commodo est reprehenderit velit est.

Elit velit velit amet consectetur et culpa enim occaecat anim anim ullamco ullamco adipisicing. Pariatur incididunt occaecat et nostrud consectetur deserunt nulla exercitation proident. Exercitation elit laboris non ipsum. Officia veniam mollit ipsum occaecat et cupidatat. Occaecat officia pariatur irure sint cillum ut nulla dolor fugiat nulla enim qui excepteur. Elit ex proident Lorem aliqua velit non mollit consequat.

Officia sit ea exercitation fugiat. Veniam labore ullamco pariatur voluptate laborum id ea deserunt cupidatat laboris irure minim. Eu id consequat laboris incididunt. Nulla nostrud officia enim id eiusmod ex culpa anim fugiat ad qui. Nostrud et nostrud ea et enim esse eu minim labore anim dolore irure nisi. In excepteur incididunt ex et duis culpa reprehenderit est mollit fugiat duis. Ad est et duis pariatur in pariatur.

Occaecat velit amet do exercitation qui irure duis. Id elit occaecat incididunt quis quis voluptate cupidatat fugiat. In nisi duis veniam reprehenderit aliquip occaecat Lorem adipisicing dolor. Nisi laboris aute sint nisi velit.

Laborum consectetur nostrud mollit occaecat dolor tempor. Et aute laborum esse duis ex ut excepteur est. Culpa esse qui ullamco consequat ex laborum ea. Dolor officia sit culpa ex magna aliquip amet ullamco nisi velit eu aliqua. Labore culpa ex veniam labore aliquip aliquip proident sint. Esse deserunt sunt laborum magna. Ad dolore laborum est commodo non dolore qui sint ex.

Sint est nulla labore culpa reprehenderit amet. Eu in anim ex anim et proident ex nulla voluptate aliqua ad in officia mollit. Anim deserunt consequat irure fugiat. Anim ad consectetur ut ad. Incididunt irure aliquip enim eu pariatur proident laboris.

Officia qui sunt tempor anim est non adipisicing nisi aute ipsum in duis veniam. Non eu fugiat tempor duis ut do cupidatat ullamco. Proident cillum nostrud magna anim deserunt ad enim irure ipsum. Nulla adipisicing incididunt ut mollit. Veniam amet excepteur ea anim qui do do do. Dolor eu do proident Lorem sunt nisi voluptate cillum consequat consequat velit mollit exercitation.
<iframe src="https://stackoverflow.com/questions/70513786/how-to-get-lorem-ipsum-to-instantiate-on-multiple-lines-instead-of-1-in-vs-code" title="W3Schools Free Online Web Tutorials"></iframe>
    </div>
  )
}
