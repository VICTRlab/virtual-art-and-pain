import { useState, useCallback, useEffect } from "react";
const TextAreaWithWordLimit = ({ rows, cols, value, limit, question, moreText, setWordCount }) => {
  const [{ content, wordCount }, setContent] = useState({
    content: value,
    wordCount: 0
  });

  const setFormattedContent = useCallback(
    text => {
      let words = text.split(' ').filter(Boolean);
      if (words.length > limit) {
        setContent({
          content: words.slice(0, limit).join(' '),
          wordCount: limit
        });
      } else {
        setContent({ content: text, wordCount: words.length });
      }
    },
    [limit, setContent]
  );

  useEffect(() => {
    setFormattedContent(content);
  }, []);
  const handleChange = (event) => {
    const val = event.target.value;
    setFormattedContent(val);
    setWordCount(wordCount);
    console.log(wordCount);
  }
  return (
    <>
      <div className="grid grid-cols-3 gap-6 border border-purple-300 rounded-md p-2">
        <div className="col-span-3 sm:col-span-2">
          <div className="block text-md font-medium text-gray-700">
            {question}
          </div>
          <p className="my-2 text-sm text-gray-500">{moreText}</p>
          <textarea
            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
            rows={rows}
            cols={cols}
            onChange={handleChange}
            value={content}
          />
          <p className="block text-md font-medium text-gray-700">
            Word count: {wordCount}/{limit}
          </p>
        </div>
      </div>
    </>
  );
};
export default TextAreaWithWordLimit;