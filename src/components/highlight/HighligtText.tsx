import React from "react";

function isNotEmpty(target: string) {
  return target.length > 0;
}

function generateMatchedStringObjects(source: string, target: string) {
  const searchKeyword = target.replace(/[\-\[\]\/{}()*+?.\\^$|]/g, "\\$&");
  const regex = new RegExp(`(${searchKeyword})`, "gi");

  return source
    .split(regex)
    .filter(isNotEmpty)
    .map((keyword) => ({
      text: keyword,
      highLight: regex.test(keyword),
    }));
}

interface HighlightTextProps {
  keyword: string;
  source: string;
  color?: string;
}

export default function HighlightText({
  keyword,
  source,
  color = "red",
}: HighlightTextProps) {
  if (!isNotEmpty(keyword.trim())) {
    return <>{source}</>;
  }
  return (
    <>
      {generateMatchedStringObjects(source, keyword.trim()).map(
        (matchedObject, index) => {
          return matchedObject.highLight ? (
            <mark key={"highLightText" + index} style={{ background: color }}>
              {matchedObject.text}
            </mark>
          ) : (
            <span key={"highLightText" + index}>{matchedObject.text}</span>
          );
        }
      )}
    </>
  );
}
