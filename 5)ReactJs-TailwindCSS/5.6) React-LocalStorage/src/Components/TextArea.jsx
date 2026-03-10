const TextArea = (e) => {
  return (
  <textarea value={e.state} className="px-[1rem] py-[0.5rem] resize-none resize: vertical" required placeholder={e.placeholder}>
  </textarea>
  )
}

export default TextArea
