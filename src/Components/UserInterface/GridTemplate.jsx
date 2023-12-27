import React from 'react'

function GridTemplate({ direction, grid_classname, text_wrapper_heading, text_wrapper_text, img_src_classname}) {
  if (direction == 1) {
    return (
        <div className={grid_classname}>
            <div className="text_wrapper text_start padding_right_sm">
                <h3 className="heading_small">{text_wrapper_heading}</h3>
                <p className="paragraph">
                    {text_wrapper_text}
                </p>
            </div>
            <div className={img_src_classname} id="image_wrapper">
            </div>
        </div>
    )
  } else if (direction == 0) {
    return (
        <div className={grid_classname}>
            <div className={img_src_classname} id="image_wrapper">
            </div>
            <div className="text_wrapper text_start padding_left_md">
                <h3 className="heading_small">{text_wrapper_heading}</h3>
                <p className="paragraph">
                    {text_wrapper_text}
                </p>
            </div>
        </div>
    )
  } else {
    return "No grid direction specified";
  }
}

export default GridTemplate