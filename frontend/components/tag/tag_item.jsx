import React from 'react';

export default function TagItem({tag, removeTag}) {
  return (
    <span className="tag-item">
    {/* onclick={removeTag} */}
      <span className="remove-icon" >X</span>
      <span className="tag-text">
        {tag}
      </span>
    </span>
  )
}
