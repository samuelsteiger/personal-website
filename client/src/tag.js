import "./tag.css"
import React from 'react';

export default function Tag() {
    const tag_color = "blueviolet";
    const tag_text = "Sample Tag"
    const text_style = {color: tag_text, borderColor: tag_color};
    return(<>
        <div class="tag">
            <p style = {text_style}>
                {tag_text}
            </p>
        </div>
    </>
    )
       
}