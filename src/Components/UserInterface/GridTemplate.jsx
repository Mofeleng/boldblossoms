import React, { useState, useEffect } from 'react'

function GridTemplate({ direction, text_wrapper_heading, text_wrapper_text, img_src_classname, is_button, button_text, button_type, button_link}) {
    /***************
     * direction 1 = text first then image
     * direction 0 = image first then text
     * is_button is a boolean value to specify whether the text wrapper has a button
     * button type is a boolean value to specify whether the button is a primary or accent button
     * 
     ***************/

    const [ buttonClassnames, setButtonClassNames ] = useState(null);
    useEffect(() => {
        if (is_button) {
            setButtonClassNames(button_type ? 'btn btn_primary' : 'btn btn_accent btn_border_black');
        }
    }, [is_button, button_type]);

  if (direction == 1) {
    return (
        <div className="direction_one_grid">
            <div className="text_wrapper text_start padding_right_sm">
                <h3 className="heading_small">{text_wrapper_heading}</h3>
                <p className="paragraph">
                    {text_wrapper_text}
                </p>
                {is_button ? (
                    <a href={button_link} className={buttonClassnames}>{button_text}</a>
                ):(null)}
            </div>
            <div className={img_src_classname} id="image_wrapper">
            </div>
        </div>
    )
  } else if (direction == 0) {
    return (
        <div className="direction_zero_grid grid_margin_top_lg">
            <div className={img_src_classname} id="image_wrapper">
            </div>
            <div className="text_wrapper text_start padding_left_md">
                <h3 className="heading_small">{text_wrapper_heading}</h3>
                <p className="paragraph">
                    {text_wrapper_text}
                </p>
                {is_button ? (
                    <a href={button_link} className={buttonClassnames}>{button_text}</a>
                ):(null)}
            </div>
        </div>
    )
  } else {
    return "No grid direction specified";
  }
}

export default GridTemplate;