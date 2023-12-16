import React from 'react';
import {ImageCard} from "./ImageCard/ImageCard";

import SkullSVG from "../../assets/svg/skull-circle.inline.svg";
import LaptopSVG from "../../assets/svg/laptop-circle.inline.svg";

export const ImageCardList = () => (
    <>
        <ImageCard image={<SkullSVG/>}
                   heading={'No More Death-By-Power Point...  Like Ever'}
                   content={<>
                       <p>Plus, adding SketchWow Animate makes SkechWow even MORE fun to use. <br/>
                           <span style={{fontStyle: 'italic'}}>(... never thought that was possible, until we
                                           proved ourselves wrong!)</span>
                       </p>

                       <p>There are dozens of presentation and animation tools out there... but as you’ll
                           soon <br/> find out, there’s NOTHING like SketchWow Animate!</p>
                       <p>
                           Keep reading to see some of the unique, eye-popping animations you can create
                           only <br/>
                           <span style={{fontWeight: 600}}><u>using SketchWow Animate!</u></span>
                       </p>
                   </>}
        />
        <ImageCard image={<LaptopSVG/>}
                   heading={'How Does SketchWow Animate Work?'}
                   content={<>
                       <p>Once you purchase the SketchWow Animate add-on, a new “Animate” button will be
                           enabled
                           in SketchWow on the top toolbar.</p>

                       <p>Click it... that’s when the magic happens!</p>
                       <p>
                           Next, you can add animation and movement to any element, shape, text, page or
                           imported image.
                       </p>
                   </>}
        />
    </>
);