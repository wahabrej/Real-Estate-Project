import React from 'react'
import photo1 from '../assets/photo1.jpg'
import photo from '../assets/photo.jpg'
export default function About() {
  return (
 <div className="max-w-7xl mt-5 py-7 flex flex-wrep justify-around items-center">
    <div className="w-1/3">
        <img src={photo1} alt=""  />
    </div>
    <div className="w-1/3">
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At libero odio esse modi labore fuga nam quam totam minus, enim nulla perferendis earum ea suscipit praesentium ducimus, asperiores dolor explicabo pariatur exercitationem velit accusantium commodi doloremque! Suscipit vel doloremque ipsa, voluptates molestias nemo esse repellendus minima dolores, corrupti maxime. Magni modi tempora saepe nam et magnam id aut, in inventore.</h1>
    </div>
 </div>
  )
}
