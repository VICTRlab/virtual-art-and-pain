import {useState, useEffect, useCallback} from react

export default function LimitedWordTextarea({ rows, cols, value, limit }) {
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
  
    return (
      <>
        <textarea
          rows={rows}
          cols={cols}
          onChange={event => setFormattedContent(event.target.value)}
          value={content}
        />
        <p>
          {wordCount}/{limit}
        </p>
      </>
    );
  };