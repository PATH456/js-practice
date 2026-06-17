function ProductDescription({ text, maxLength }) {
  const [isExpanded, setIsExpanded] = React.useState(false)
  return (
    <>
    {!isExpanded && (
      <>
      <p>{text.slice(0, maxLength)}...</p>
      <button onClick = {() => setIsExpanded(true)}>Show more</button>
      </>
      )}

    {isExpanded && (
      <>
      <p>{text}</p>
      <button onClick = {() => setIsExpanded(false)}>Show less</button>
      </>
    )}
    </>
  )
}