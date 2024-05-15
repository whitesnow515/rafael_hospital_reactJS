import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const ReactTagsInput = () => {
  const [tags] = useState(["Tooth cleaning"]);
  const [suggestions] = useState(["Children Care"]);

  return (
    <div>
      <TagsInput
        tags={tags}
        suggestions={suggestions}
        value={tags}
        placeHolder="Press enter to add new tag"
      />
    </div>
  );
};

export default ReactTagsInput;
